from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import routers

from django.contrib.admin.models import LogEntry

LogEntry.objects.all().delete()

from account.views import (
	ProfileView,
	CustomAuthToken,
	UserViewSet,
	)
router = routers.DefaultRouter()
router.register(r'user', UserViewSet)

urlpatterns = [
	path('', include(router.urls)),
	path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
	path('profile',ProfileView.as_view()),
	path('api/auth/', CustomAuthToken.as_view()),
	

]

# urlpatterns = format_suffix_patterns(urlpatterns)