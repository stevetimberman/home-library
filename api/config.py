import os
from typing import Any, Optional

from pydantic import BaseSettings, PostgresDsn, validator


class Settings(BaseSettings):
    APP_NAME: str = "Library App API"
    ADMIN_EMAIL: str

    POSTGRES_SERVER: str = "pgdb"
    POSTGRES_PORT: int = 5432
    POSTGRES_USER: str = "steventimberman"
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str = "home_library"
    SQLALCHEMY_DATABASE_URL: Optional[PostgresDsn] = None

    @validator("SQLALCHEMY_DATABASE_URL", pre=True)
    def build_db_connection(cls, v: Optional[str], values: dict[str, Any]) -> Any:
        if isinstance(v, str):
            return v
        return PostgresDsn.build(
            scheme="postgresql",
            user=values.get("POSTGRES_USER"),
            password=values.get("POSTGRES_PASSWORD"),
            host=values.get(
                "POSTGRES_SERVER",
            ),
            path=f"/{values.get('POSTGRES_DB') or ''}",
        )


settings = Settings(
    _env_file=os.environ.get("ENV_FILE", "/opt/home-library/env.d/local-dev.env")
)
