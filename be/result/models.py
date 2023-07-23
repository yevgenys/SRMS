from django.db import models

from course.models import Course
from student.models import Student

SCORES = [
    ("A", "A"),
    ("B", "B"),
    ("C", "C"),
    ("D", "D"),
    ("E", "E"),
    ("F", "F"),
]


class Result(models.Model):
    score = models.CharField(max_length=2, choices=SCORES)
    datetime = models.DateTimeField(auto_now=True)
    student = models.ForeignKey(Student, related_name="result", on_delete=models.CASCADE)
    course = models.ForeignKey(Course, related_name="result", on_delete=models.CASCADE)
