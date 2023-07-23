from rest_framework import generics

from permissions.custom_permissions import IsSchoolManager
from result.models import Result
from result.serializers import ResultSerializer


class ResultsView(generics.ListCreateAPIView):
    queryset = Result.objects.all()
    serializer_class = ResultSerializer
    permission_classes = [IsSchoolManager]
