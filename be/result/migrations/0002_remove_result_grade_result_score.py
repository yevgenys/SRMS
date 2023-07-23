# Generated by Django 4.2.3 on 2023-07-23 11:32

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('result', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='result',
            name='grade',
        ),
        migrations.AddField(
            model_name='result',
            name='score',
            field=models.CharField(choices=[('A', 'A'), ('B', 'B'), ('C', 'C'), ('D', 'D'), ('F', 'F')], default=None,
                                   max_length=2),
        ),
    ]