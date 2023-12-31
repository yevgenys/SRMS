# Generated by Django 4.2.3 on 2023-07-22 20:55

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ('course', '0001_initial'),
        ('student', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Result',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('grade', models.CharField(
                    choices=[('A+', 'A+'), ('A', 'A'), ('A−', 'A−'), ('B+', 'B+'), ('B', 'B'), ('B−', 'B-'),
                             ('C+', 'C+'), ('C', 'C'), ('C−', 'C-'), ('D+', 'D+'), ('D', 'D'), ('D−', 'D-'),
                             ('F', 'F')], max_length=2)),
                ('datetime', models.DateTimeField(auto_now=True)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='result',
                                             to='course.course')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='result',
                                              to='student.student')),
            ],
        ),
    ]
