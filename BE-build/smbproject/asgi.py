"""
ASGI config for poc_crm_demo project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/howto/deployment/asgi/
"""
import os

import django
import sourcedefender  # noqa
from channels.routing import get_default_application


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "smbproject.settings")
django.setup()
application = get_default_application()
