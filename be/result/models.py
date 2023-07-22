from django.db import models

from course.models import Course
from student.models import Student

US_SYSTEM = [
    ("A+", "A+"),
    ("A", "A"),
    ("A−", "A−"),
    ("B+", "B+"),
    ("B", "B"),
    ("B−", "B-"),
    ("C+", "C+"),
    ("C", "C"),
    ("C−", "C-"),
    ("D+", "D+"),
    ("D", "D"),
    ("D−", "D-"),
    ("F", "F"),
]


class Result(models.Model):
    grade = models.CharField(max_length=2, choices=US_SYSTEM)
    datetime = models.DateTimeField(auto_now=True)
    student = models.ForeignKey(Student, related_name="result", on_delete=models.CASCADE)
    course = models.ForeignKey(Course, related_name="result", on_delete=models.CASCADE)
