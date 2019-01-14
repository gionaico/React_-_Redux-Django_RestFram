from django.conf.urls import include, url

from rest_framework.routers import DefaultRouter

from .views import (
    ContactView
)

router = DefaultRouter(trailing_slash=False)


urlpatterns = [
    url(r'^', include(router.urls)),

    url(r'^contact', ContactView.as_view()),
    
]
