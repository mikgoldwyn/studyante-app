from rest_framework import serializers

from . import models


class UserSerializer(serializers.ModelSerializer):
    auth_token = serializers.CharField(source='auth_token.key', read_only=True)

    class Meta:
        model = models.User
        fields = [
            'id',
            'first_name',
            'last_name',
            'type',
            'auth_token',
            'gender',
            'push_notification_token',
            'profile_picture',
        ]


class RequirementSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Requirement
        fields = '__all__'
