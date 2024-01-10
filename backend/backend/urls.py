from django.contrib import admin
from django.urls import path, include

from rest_framework import routers

from posts.views import PostViewSet

router = routers.DefaultRouter()
router.register('posts', PostViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls))
]
