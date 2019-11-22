from rest_framework import serializers

from . import models


class UserSerializer(serializers.ModelSerializer):
    auth_token = serializers.CharField(source='auth_token.key', read_only=True)

    class Meta:
        model = models.User
        fields = [
            'first_name',
            'last_name',
            'auth_token',
        ]


class RequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Requirement
        fields = '__all__'
