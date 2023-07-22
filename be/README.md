## Setup local development

### Requirements:

* python 3.11

#### Mandatory env variables:

* SECRET_KEY - for local dev put anything

### Execute cmd sequence

1. install dependencies: python -m pip install -r [requirements.txt](requirements.txt)
2. execute migrations: python ./manage.py migrate
3. execute migrations: python manage.py collectstatic --noinput
4. start dev server: python ./manage.py runserver
