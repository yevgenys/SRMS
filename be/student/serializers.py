from datetime import datetime

from rest_framework import serializers

from student.models import Student


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

    def validate(self, data):
        """
        Check that the start is before the stop.
        """
        if not data['date_of_birth']:
            raise serializers.ValidationError({"date_of_birth": "Field is required"})

        if (datetime.today().year - data['date_of_birth'].year) < 10:
            raise serializers.ValidationError({"date_of_birth": "Student should be at least 10 years old"})
        return data
