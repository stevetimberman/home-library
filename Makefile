PWD = $(shell pwd)
VENV = $(PWD)/.venv
BIN_FLAKE8 = $(VENV)/bin/flake8
BIN_ISORT = $(VENV)/bin/isort

.PHONY: clean flake8 isort isort_check test

clean:
	find . -name '*.py[co]' -delete
	rm -rf $(VENV)

flake8:
	$(BIN_FLAKE8)

isort:
	$(BIN_ISORT) **/*.py --filter-files --interactive

isort_check:
	$(BIN_ISORT) **/*.py --filter-files --check-only

test:
	python -m pytest \
		-v \
		--cov=home_library \
		--cov-report=term \
		--cov-report=html:coverage-report \
		tests/

run_server:
	uvicorn api.main:app --host 0.0.0.0 --port 5000 \
	--log-level="debug" --reload \
	--reload-exclude '.pytest_cache' \
	--reload-exclude '.mypy_cache' \
	--reload-exclude '.venv' \
	--reload-exclude '.git'
