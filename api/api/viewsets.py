from rest_framework import viewsets
from rest_framework import status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import permissions
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate

from . import models
from . import serializers


class UserViewSet(viewsets.ModelViewSet):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer
    filterset_fields = ['gender', 'type']

    @action(detail=False, methods=['post'], permission_classes=(permissions.AllowAny,))
    def login(self, request):
        data = request.data
        user = authenticate(username=data.get('username'), password=data.get('password'))
        if user:
            Token.objects.get_or_create(user=user)
            data = self.get_serializer(instance=user).data
            return Response(data=data)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)


class RequirementViewSet(viewsets.ModelViewSet):
    queryset = models.Requirement.objects.all().order_by('-status')
    serializer_class = serializers.RequirementSerializer
    filterset_fields = ['student', 'subject']
