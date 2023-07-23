from rest_framework import generics

from permissions.custom_permissions import IsSchoolManager
from student.models import Student
from student.serializers import StudentSerializer


class StudentsView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsSchoolManager]


class StudentView(generics.RetrieveDestroyAPIView):
    serializer_class = StudentSerializer
    permission_classes = [IsSchoolManager]

    def get_queryset(self):
        pk = self.kwargs["pk"]
        return Student.objects.filter(pk=pk)
