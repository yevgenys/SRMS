import os

import dj_database_url

from be.settings import *

assert SECRET_KEY, f"SECRET_KEY - can't be empty"

if os.getenv("DATABASE_URL", None) is None:
    raise Exception("DATABASE_URL environment variable not defined")

DATABASES = {
    "default": dj_database_url.parse(os.environ.get("DATABASE_URL")),
}

ALLOWED_HOSTS = [
    "enter hostname"
]