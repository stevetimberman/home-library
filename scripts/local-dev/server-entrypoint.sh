#!/usr/bin/env bash

poetry shell

python /opt/home-library/api/scripts/pre_start.py

alembic upgrade head

uvicorn "api.main:app" --reload --host 0.0.0.0 --port 8000
