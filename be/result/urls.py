from django.urls import path

from result.views import ResultsView

urlpatterns = [
    path('', ResultsView.as_view(), name='results'),
]
