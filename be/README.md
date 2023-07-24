## Setup local development

### Requirements:

* python 3.11+

### DB

Any SQL like database(for local dev it is used sqlite)
NOTE: sqlite it is used since db structure is pretty simple, in the future when structure will become more complicated
add prod version of DB to docker config, and reconfig local [dev_settings.py](be%2Fdev_settings.py)

#### Mandatory env variables:

* SECRET_KEY - for local dev put anything

### Execute cmd sequence

Note: it is highly recommended to use [virtual env](https://docs.python.org/3/library/venv.html) to not pollute you
environment

1. install dependencies: python -m pip install -r [requirements.txt](requirements.txt)
2. execute: python ./manage.py migrate
3. execute: python manage.py collectstatic --noinput
4. start dev server: python ./manage.py runserver

### Local documentation

If application is running in a dev mode, you can check endpoints by navigating to http://localhost:8000/doc/ 
