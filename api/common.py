"""File for common dependencies throughout the FASTAPI app.

Examples include authentication related functions.
"""
from api.db.database import SessionLocal


def get_db():
    """Yields a db session for a request, then closes it when complete.

    This method is a Dependency.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
