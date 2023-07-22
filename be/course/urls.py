from django.urls import path

from course.views import CoursesView, CourseView

urlpatterns = [
    path('', CoursesView.as_view(), name='courses'),
    path('<int:pk>', CourseView.as_view(), name='course'),
]
