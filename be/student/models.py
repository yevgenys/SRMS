from django.core.validators import MinLengthValidator
from django.db import models


class Student(models.Model):
    first_name = models.CharField(max_length=256, validators=[MinLengthValidator(2)])
    last_name = models.CharField(max_length=256, validators=[MinLengthValidator(2)])
    middle_name = models.CharField(max_length=256, null=True, default=None)
    date_of_birth = models.DateField()
    email = models.EmailField(unique=True)
    deleted = models.BooleanField(default=False)
    datetime = models.DateTimeField(auto_now=True)
