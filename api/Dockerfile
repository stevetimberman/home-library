# syntax=docker/dockerfile:1
FROM python:3.10.3-slim as python-base
# USER root:root

RUN apt-get update \
	&& apt-get install -y apt-utils \
	&& apt-get install -y --no-install-recommends build-essential openssh-client openssl \
	libpq-dev postgresql-client \
	&& apt-get -y clean

ENV PYTHONUNBUFFERED=1 \
    # prevents python creating .pyc files
    PYTHONDONTWRITEBYTECODE=1 \
    \
    # pip
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100 \
    POETRY_HOME="/opt/bin" \
    # make poetry create the virtual environment in the project's root
    # it gets named `.venv`
    POETRY_VIRTUALENVS_IN_PROJECT=true \
    # do not ask any interactive question
    POETRY_NO_INTERACTION=1 \
    \
    # paths
    # this is where our requirements + virtual environment will live
    HOME_LIBRARY_PATH="/opt/home-library" \
    VENV_PATH="/opt/home-library/.venv" \
    PIPX_BIN_DIR="/opt/bin" \
    PIPX_HOME="/opt/pipx"

# prepend poetry and venv to path
ENV PATH="$VENV_PATH/bin:$PIPX_HOME/bin:/root/.local/bin:/opt/bin:$PATH"

RUN mkdir -p /opt/home-library
COPY . /opt/home-library

RUN python3 -m pip install --user pipx
RUN POETRY_VERSION=$(cat /opt/home-library/.poetry-version) && \
	pipx install poetry==$POETRY_VERSION

# RUN useradd -Um -s /bin/bash app
# RUN chown -R app:app /opt/home-library
# RUN chown -R app:app /opt/pipx
# USER app:app


# COPY --chown=app:app poetry.lock pyproject.toml /opt/home-library/
# COPY poetry.lock pyproject.toml poetry.toml /opt/home-library/

# WORKDIR /opt/home-library
# RUN poetry install --without dev

# FROM python-base as development
# ENV FASTAPI_ENV=development
# WORKDIR $HOME_LIBRARY_PATH

# copy in our built poetry + venv
# COPY --from=builder-base $POETRY_HOME $POETRY_HOME
# COPY --from=builder-base $HOME_LIBRARY_PATH $HOME_LIBRARY_PATH

# quicker install as runtime deps are already installed
# RUN poetry install

# COPY --chown=app:app . /opt/home-library

WORKDIR /opt/home-library

RUN poetry install

ENTRYPOINT ["/opt/home-library/scripts/local-dev/server-entrypoint.sh"]
# will become mountpoint of our code
# WORKDIR $HOME_LIBRARY_PATH/api
