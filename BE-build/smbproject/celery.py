import logging
import os

from celery import Celery
from celery.schedules import crontab
from celery.signals import worker_ready
from celery_singleton import clear_locks

from smbproject import settings
from smbproject.Common import constants
from smbproject.settings import config

logger = logging.getLogger(constants.NAME_LOG_APP)
# set the default Django settings module for the 'celery' program.
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "smbproject.settings")
app = Celery("smbproject.celeryconfig")


@worker_ready.connect
def unlock_all(**kwargs):
    clear_locks(app)


def get_celery_worker_status(verbose=False):
    try:
        i = app.control.inspect(timeout=0.1)
        availability = i.ping()
        result = availability
        if availability is not None and verbose:
            stats = i.stats()
            registered_tasks = i.registered()
            active_tasks = i.active()
            scheduled_tasks = i.scheduled()
            result = {
                "availability": availability,
                "stats": stats,
                "registered_tasks": registered_tasks,
                "active_tasks": active_tasks,
                "scheduled_tasks": scheduled_tasks,
            }
        return result
    except Exception as e:
        logger.exception(e)


# app.conf.ONCE = {
#   'backend': 'celery_once.backends.Redis',
#   'settings': {
#     'url': settings.REDIS_URL,
#     'default_timeout': 60 * 60
#   }
# }

# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
# - namespace='CELERY' means all celery-related configuration keys
#   should have a `CELERY_` prefix.
# app.config_from_object("django.conf:settings", namespace="CELERY")
app.config_from_object("smbproject.celeryconfig")
# Load task modules from all registered Django app configs.
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)


BEAT_SCHEDULE_CONF = {
    "scan-email-every-minute": {
        "task": "ScanEmail.tasks.run_scan_email_services",
        "schedule": crontab(minute="*/1"),
        "options": {
            "queue": constants.SCAN_EMAIL_QUEUE,
        },
    },
    "scan-assignment-rule": {
        "task": "AssignmentRule.tasks.execute_assignment_rule",
        "schedule": crontab(minute="*/3"),
        "options": {
            "queue": constants.INTERVAL_QUEUE,
        },
    },
    "scan-calendar-event-every-minute": {
        "task": "Calendar.tasks.run_scan_calendar_event",
        "schedule": crontab(minute="*/1"),
        "options": {
            "queue": constants.INTERVAL_QUEUE,
        },
    },
    "scan-sla-every-minute": {
        "task": "Interval.tasks.run_scan_sla_services",
        "schedule": crontab(minute="*/1"),
        "options": {
            "queue": constants.INTERVAL_QUEUE,
        },
    },
    "scan-upcoming-workflow-events-every-minute": {
        "task": "Interval.tasks.run_scan_upcoming_workflow_events",
        "schedule": crontab(minute="*/1"),
        "options": {
            "queue": constants.INTERVAL_QUEUE,
        },
    },
    "scan-workflow-every-minute": {
        "task": "Interval.tasks.run_scan_workflow_events",
        "schedule": crontab(minute="*/1"),
        "options": {
            "queue": constants.INTERVAL_QUEUE,
        },
    },
    "scan-campaign-every-minute": {
        "task": "Interval.tasks.run_scan_campaign",
        "schedule": crontab(minute="*/1"),
        "options": {
            "queue": constants.INTERVAL_QUEUE,
        },
    },
    "scan-campaign-task-every-minute": {
        "task": "Interval.tasks.run_scan_campaign_task",
        "schedule": crontab(minute="*/1"),
        "options": {
            "queue": constants.INTERVAL_QUEUE,
        },
    },
    "scan-clean-log-history-every-minute": {
        "task": "LogHistory.views.run_clean_log_history",
        "schedule": crontab(minute=10, hour=1),
        "options": {
            "queue": constants.INTERVAL_QUEUE,
        },
    },
    "scan-time-delete-record": {
        "task": "Interval.tasks.run_scan_time_delete_record",
        "schedule": crontab(minute=10, hour=2),
        "options": {
            "queue": constants.INTERVAL_QUEUE,
        },
    },
    "scan-time-delete-notification": {
        "task": "Interval.tasks.run_delete_notification",
        "schedule": crontab(minute=10, hour=3),
        "options": {
            "queue": constants.INTERVAL_QUEUE,
        },
    },
    "scan-call-scoring-every-minute": {
        "task": "CalabrioIntegration.tasks.scan_call_scoring",
        "schedule": crontab(minute="*/1"),
        "options": {
            "queue": constants.INTERVAL_QUEUE,
        },
    },
}


if config.get("ENABLE_CELERY_MULTI_QUEUE") == "1":
    app.conf.task_routes = {
        "*.feeds.*": {"queue": constants.FEED_QUEUE},
        "ScanEmail.tasks.run_scan_email_services": {
            "queue": constants.SCAN_EMAIL_QUEUE
        },
        "AssignmentRule.tasks.execute_assignment_rule": {
            "queue": constants.INTERVAL_QUEUE
        },
        "Calendar.tasks.run_scan_calendar_event": {"queue": constants.INTERVAL_QUEUE},
        "Interval.tasks.run_scan_sla_services": {"queue": constants.INTERVAL_QUEUE},
        "Interval.tasks.run_scan_upcoming_workflow_events": {
            "queue": constants.INTERVAL_QUEUE
        },
        "Interval.tasks.run_scan_workflow_events": {"queue": constants.INTERVAL_QUEUE},
        "Interval.tasks.run_scan_campaign": {"queue": constants.INTERVAL_QUEUE},
        "Interval.tasks.run_scan_campaign_task": {"queue": constants.INTERVAL_QUEUE},
        "Interval.tasks.run_scan_time_delete_record": {
            "queue": constants.INTERVAL_QUEUE
        },
        "Interval.tasks.run_delete_notification": {"queue": constants.INTERVAL_QUEUE},
        "LogHistory.views.run_clean_log_history": {"queue": constants.INTERVAL_QUEUE},
        "CalabrioIntegration.tasks.scan_call_scoring": {
            "queue": constants.INTERVAL_QUEUE
        },
    }
else:
    BEAT_SCHEDULE_CONF = {
        key: {
            inner_key: inner_value
            for inner_key, inner_value in val.items()
            if inner_key != "options"
        }
        for key, val in BEAT_SCHEDULE_CONF.items()
    }


app.conf.beat_schedule = BEAT_SCHEDULE_CONF
