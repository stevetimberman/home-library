import logging

from tenacity import after_log, before_log, retry, stop_after_attempt, wait_fixed

from api.db.database import SessionLocal

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

WAIT_SECONDS = 3
MAX_ATTEMPTS = 60  # 3 sec * 60 tries = 3 minutes


@retry(
    stop=stop_after_attempt(MAX_ATTEMPTS),
    wait=wait_fixed(WAIT_SECONDS),
    before=before_log(logger, logging.INFO),
    after=after_log(logger, logging.WARN),
)
def init() -> None:
    try:
        db = SessionLocal()
        db.execute("SELECT 1;")
    except Exception as err:
        logger.error(err)
        raise err


def main() -> None:
    logger.info("Initializing service...")
    init()
    logger.info("Service finished initializing.")


if __name__ == "__main__":
    main()
