# Generated by Django 4.2.3 on 2023-07-23 11:33

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('result', '0002_remove_result_grade_result_score'),
    ]

    operations = [
        migrations.AlterField(
            model_name='result',
            name='score',
            field=models.CharField(choices=[('A', 'A'), ('B', 'B'), ('C', 'C'), ('D', 'D'), ('F', 'F')], max_length=2),
        ),
    ]
