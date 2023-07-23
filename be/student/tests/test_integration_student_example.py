from datetime import datetime, timedelta

from django.conf import settings
from django.test import TestCase

from student.models import Student


class RootE2ETest(TestCase):
    @classmethod
    def setUpClass(cls):
        super().setUpClass()
        settings.SECRET_KEY = "dummy"


class StudentPositiveTestCase(RootE2ETest):
    TEST_STD_FNAME = "TEST_STD_FNAME"
    TEST_STD_LNAME = "TEST_STD_LNAME"
    TEST_STD_ID = 1
    TEST_STD_DATE_OF_BIRTH = datetime.today().date() - timedelta(days=365 * 20)
    TEST_STD_EMAIL = "email@email.com"

    def setUp(self):
        self._tst_student = Student.objects.create(
            first_name=self.TEST_STD_FNAME,
            last_name=self.TEST_STD_LNAME,
            id=self.TEST_STD_ID,
            date_of_birth=self.TEST_STD_DATE_OF_BIRTH,
            email=self.TEST_STD_EMAIL
        )

    def test_list_students(self):
        response = self.client.get("/api/v1/student/")
        self.assertEqual(response.status_code, 200)
        students = response.json()
        self.assertEqual(len(students), 1)
        self.assertEqual(students[0]["id"], self._tst_student.id)
        self.assertEqual(students[0]["email"], self._tst_student.email)
        self.assertEqual(students[0]["first_name"], self._tst_student.first_name)
        self.assertEqual(students[0]["last_name"], self._tst_student.last_name)

    def test_remove_student(self):
        response = self.client.delete(f"/api/v1/student/{self.TEST_STD_ID}")
        self.assertEqual(response.status_code, 204)
        self.assertEqual(len(Student.objects.all()), 0)


class StudentNegativeTestCase(RootE2ETest):
    def test_remove_unexisting_student(self):
        response = self.client.delete(f"/api/v1/student/-1")
        self.assertEqual(response.status_code, 404)

    def test_create_student_missing_email(self):
        response = self.client.post(f"/api/v1/student/", {
            "first_name": "fname",
            "last_name": "fname",
            "date_of_birth": "01/01/1999",
        })
        self.assertEqual(response.status_code, 400)
