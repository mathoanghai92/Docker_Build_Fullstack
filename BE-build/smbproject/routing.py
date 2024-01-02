import sourcedefender  # noqa
from channels.auth import AuthMiddlewareStack
from channels.http import AsgiHandler
from channels.routing import ProtocolTypeRouter
from channels.routing import URLRouter
from django.urls import re_path

from FinesseIntegration.consumer import UserFinesseConsumer
from Notifications.consumers import UserNotificationConsumer
from UserManagement.consumer import AgentMonitorConsumer
from UserManagement.consumer import UserStatusConsumer

# Fetch Django ASGI application early to ensure AppRegistry is populated
# before importing consumers and AuthMiddlewareStack that may import ORM
# models.


class Consumer(UserNotificationConsumer, UserFinesseConsumer, UserStatusConsumer):
    """Must inherit consumer from module"""


application = ProtocolTypeRouter(
    {
        "http": AsgiHandler(),
        "websocket": AuthMiddlewareStack(
            URLRouter(
                [
                    re_path(
                        "notifications/(?P<access_token>[a-zA-Z0-9-_.]+)/$",
                        Consumer.as_asgi(),
                    ),
                    re_path(
                        r"^ws/agent-monitor/(?P<access_token>[a-zA-Z0-9-_.]+)/$",
                        AgentMonitorConsumer.as_asgi(),
                    ),
                    re_path(
                        r"^ws/notifications/(?P<access_token>[a-zA-Z0-9-_.]+)/$",
                        Consumer.as_asgi(),
                    ),
                ]
            )
        ),
    }
)
