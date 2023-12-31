# Generated by Django 4.2.3 on 2023-07-23 10:27

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('course', '0002_remove_course_deleted_alter_course_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='name',
            field=models.CharField(max_length=256, unique=True,
                                   validators=[django.core.validators.MinLengthValidator(2)]),
        ),
    ]
