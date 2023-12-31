from rest_framework import generics

from course.models import Course
from course.serializers import CourseSerializer
from permissions.custom_permissions import IsSchoolManager


class CoursesView(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [IsSchoolManager]


class CourseView(generics.RetrieveDestroyAPIView):
    serializer_class = CourseSerializer
    permission_classes = [IsSchoolManager]

    def get_queryset(self):
        pk = self.kwargs["pk"]
        return Course.objects.filter(pk=pk)
