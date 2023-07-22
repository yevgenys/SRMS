from django.core.validators import MinLengthValidator
from django.db import models

from student.models import Student


class Course(models.Model):
    name = models.CharField(max_length=256, validators=[MinLengthValidator(2)])
    deleted = models.BooleanField(default=False)
    datetime = models.DateTimeField(auto_now=True)
    students = models.ManyToManyField(Student, related_name="course")
