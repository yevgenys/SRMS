import os

from be.settings import *

DEBUG = True

ALLOWED_HOSTS.extend(["localhost", "127.0.0.1"])

INSTALLED_APPS.append('django.contrib.staticfiles')
INSTALLED_APPS.append('drf_yasg')

MEDIA_ROOT = os.path.join(BASE_DIR, 'localStatic')

STATIC_URL = '/static/'
SCHEDULER_NEWS_UPDATE_TOKEN = "ugabuga_update"
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")
STATICFILES_DIRS = (os.path.join(BASE_DIR, "static"),)

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
        },
    },
    'root': {
        'handlers': ['console'],
        'level': 'DEBUG',
    },
}

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000"
]

SWAGGER_SETTINGS = {
    'SECURITY_DEFINITIONS': {
        'api_key': {
            'type': 'apiKey',
            'in': 'header',
            'name': 'SRMS',
        }
    },
}

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
