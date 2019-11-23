from rest_framework import routers

from . import viewsets

router = routers.DefaultRouter()
router.register(r'users', viewsets.UserViewSet)
router.register(r'requirements', viewsets.RequirementViewSet)
urlpatterns = router.urls
