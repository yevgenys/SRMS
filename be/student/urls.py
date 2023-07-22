from django.urls import path

from student.views import StudentsView, StudentView

urlpatterns = [
    path('', StudentsView.as_view(), name='students'),
    path('<int:pk>', StudentView.as_view(), name='student'),
]
