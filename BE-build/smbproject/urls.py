"""smbproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import contextlib

import sourcedefender  # noqa
from django.conf import settings
from django.conf.urls import url
from django.core.cache import cache
from django.urls import include
from django.urls import path
from django.urls import re_path
from django.views.static import serve
from drf_yasg import openapi
from drf_yasg.generators import OpenAPISchemaGenerator
from drf_yasg.views import get_schema_view
from rest_framework import permissions

from Object.common.utils import decode_token_string
from Object.common.utils import handle_error
from smbproject import patch  # noqa
from smbproject.Common import connect
from smbproject.Common import constants
from smbproject.settings import config
from UserRoleProfile.user import check_user_crm
from UserRoleProfile.user import encode_token


def render_schema_view(ui="swagger"):
    class CustomAPISchemeGenerator(OpenAPISchemaGenerator):
        def get_schema(self, request=None, public=False):
            schema = super().get_schema(request, public)
            schema.base_path = settings.PROXY_API_PREFIX
            return schema

    user_email = config.get("USER_DEBUG")
    if user_email:
        with contextlib.suppress(Exception):
            db_root = connect.client.Tenants
            user_info = db_root[constants.TB_USER].find_one({"email": user_email})
            tenant_id = user_info.get("tenants")
            user_tenant_info = check_user_crm(tenant_id, user_email)
            token = encode_token(user_tenant_info, tenant_id, 36000)
            cache.set("swagger_default_token", token)
    schema_view = get_schema_view(
        openapi.Info(
            title="CRM API",
            default_version="v1",
            description="API",
            terms_of_service="https://www.google.com/policies/terms/",
            contact=openapi.Contact(email="quyetlq@basebs.com"),
            license=openapi.License(name="BSD License"),
        ),
        url=config.get("PROXY"),
        urlconf="smbproject.urls",
        public=True,
        permission_classes=[permissions.AllowAny],
        generator_class=CustomAPISchemeGenerator,
    )
    if ui == "swagger":
        return schema_view.with_ui("swagger", cache_timeout=0)

    if ui == "redoc":
        return schema_view.with_ui("redoc", cache_timeout=0)

    return schema_view.without_ui(cache_timeout=0)


def protected_log_serve(
    request, routing_path, document_root=None, show_indexes=True, **kwargs
):
    try:
        token = kwargs.get("token")
        token = decode_token_string(token)
        if token.get("Tenants") != "root":
            return handle_error(
                "You do not have permission to access this resources.", status_code=403
            )
        return serve(request, routing_path, document_root, show_indexes)
    except Exception:
        return handle_error(
            "You do not have permission to access this resources.", status_code=403
        )


def protected_media_serve(request, path, document_root=None, **kwargs):
    try:
        path_split = path.split("/")
        tenant_id = path_split[0]
        object_id = path_split[1]
        db = getattr(connect.client, constants.DB_TENANTS)
        media_setting = db[constants.TB_MEDIA_SETTINGS].find_one(
            {"tenant_id": tenant_id}
        )
        if media_setting and object_id in media_setting.get("object_ids", []):
            token = request.headers["Authorization"]
            decoded_token = decode_token_string(token)
            if decoded_token.get("Tenants") != tenant_id:
                return handle_error(
                    "You do not have permission to access this resources.",
                    status_code=403,
                )
        return serve(request, path, document_root, show_indexes=False)
    except Exception:
        return handle_error(
            "You do not have permission to access this resources.", status_code=403
        )


urlpatterns = [
    path("", include("FinesseIntegration.urls")),
    path("", include("VoiceBiometricIntegration.urls")),
    path("", include("ExposeAPIs.urls")),
    path("", include("KnowledgeBase.urls")),
    path("", include("SMS.urls")),
    path("", include("Notifications.urls")),
    path("", include("RegisterCTI.urls")),
    path("", include("AdvanceConfigCTI.urls")),
    path("", include("SendEmail.urls")),
    path("", include("tenants.urls")),
    path("", include("UserRoleProfile.urls")),
    path("", include("Object.urls")),
    path("", include("SearchManagement.urls")),
    path("", include("LogsHistory.urls")),
    path("", include("Report.urls")),
    path("", include("SLA.urls")),
    path("", include("Campaign.urls")),
    path("", include("TenantConfiguration.urls")),
    path("", include("GoogleIntegration.urls")),
    path("", include("Calendar.urls")),
    path("", include("CrmImportUsers.urls")),
    path("", include("ScanEmail.urls")),
    path("api/quality-management/", include("QualityManagement.urls")),
    url("api/calabrio-integration/", include("CalabrioIntegration.urls")),
    url("api/action/", include("Action.urls")),
    url("api/approval/", include("Approval.urls")),
    url("api/user-management/", include("UserManagement.urls")),
    url("api/health-check", include("health_check.urls")),
    path("api/log-system/", include("LogSystem.urls")),
    path("api/permission/", include("LcmPermission.urls")),
    path("api/workflow/", include("Workflows.urls")),
    path("api/crm/", include("CrmUploadData.urls")),
    path("api/dynamic-button/", include("DynamicButton.urls")),
    path("api/interactions/", include("Interaction.urls")),
    path("api/vbee/", include("Vbee.urls")),
    path("api/cti/", include("CallCenter.urls")),
    path("api/third-party/", include("ThirdPartyAPIs.urls")),
    path("api/", include("Popup.urls")),
    path("api/ic/", include("IC.urls")),
    path("api/interval/", include("Interval.urls")),
    path("api/list-view/", include("ListView.urls")),
    path("api/list-view-details/", include("ListViewDetails.urls")),
    path("api/high-light/", include("Highlight.urls")),
    path("api/ldap/", include("LDAP.urls")),
    path("api/comment/", include("Comment.urls")),
    path("api/admin/", include("CustomAdmin.urls")),
    path("api/admin/", include("CustomAdmin.urls")),
    path("api/recycle-bin/", include("RecycleBin.urls")),
    path("api/o365-integration/", include("O365Integration.urls")),
    path("api/assignment-rule/", include("AssignmentRule.urls")),
    path("api/", include("IssueHandling.urls")),
    path("api/knowledge-base-enhancement/", include("KnowledgeBaseEnhancement.urls")),
    path("api/internet-form/", include("InternetForm.urls")),
    path("api/mobile/", include("Mobile.urls")),
    path("api/object-standard/", include("ObjectStandardization.urls")),
    path("api/interaction-expose-api/", include("InteractionExposeApi.urls")),
    url(
        r"^media/(?P<path>.*)$",
        protected_media_serve,
        {"document_root": settings.MEDIA_ROOT},
    ),
    url(
        r"^api/logs/(?P<token>[^/\n\r]+)/(?P<routing_path>.*)$",
        protected_log_serve,
        {"document_root": settings.LOG_DIR, "show_indexes": True},
    ),
]

handler403 = "smbproject.patch.handler403"

if settings.DEBUG is True:
    urlpatterns += (
        url(
            r"^api/media/(?P<path>.*)$",
            protected_media_serve,
            {"document_root": settings.MEDIA_ROOT},
        ),
    )

if settings.SWAGGER_ENABLE:
    urlpatterns.extend(
        [
            re_path(
                r"^api/swagger(?P<format>\.json|\.yaml)$",
                render_schema_view(None),
                name="schema-json",
            ),
            path(
                "api/swagger/",
                render_schema_view(),
                name="schema-swagger-ui",
            ),
            path("api/redoc/", render_schema_view("redoc"), name="schema-redoc"),
            url(
                r"^api/static/(?P<path>.*)$",
                serve,
                {"document_root": settings.STATIC_ROOT},
            ),
        ]
    )
