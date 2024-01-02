#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys

import sourcedefender  # noqa

DJANGO_SETTING_MODULE = "DJANGO_SETTINGS_MODULE"
SMB_PROJECT_SETTINGS = "smbproject.settings"
DJANGO_ALLOW_ASYNC_UNSAFE = "DJANGO_ALLOW_ASYNC_UNSAFE"
DJANGO_ALLOW_ASYNC_UNSAFE_VALUE = "true"
DJANGO_IMPORT_ERROR = "Couldn't import Django. Are you sure it's installed and available on your PYTHONPATH environment variable? Did you forget to activate a virtual environment?"


def main():
    os.environ.setdefault(DJANGO_SETTING_MODULE, SMB_PROJECT_SETTINGS)
    os.environ[DJANGO_ALLOW_ASYNC_UNSAFE] = DJANGO_ALLOW_ASYNC_UNSAFE_VALUE
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            DJANGO_IMPORT_ERROR
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()
