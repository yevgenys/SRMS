from rest_framework import serializers

from result.models import Result


class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = '__all__'

    def to_representation(self, instance):
        rep = super(ResultSerializer, self).to_representation(instance)
        rep['student'] = f"{instance.student.first_name} {instance.student.last_name}"
        rep['course'] = f"{instance.course.name}"
        return rep
