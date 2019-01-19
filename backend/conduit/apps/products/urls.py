from django.conf.urls import include, url

from rest_framework.routers import DefaultRouter

from .views import (
    ProductViewSet, CommentsListCreateAPIView, CommentsDestroyAPIView, CategoryListAPIView
)

router = DefaultRouter(trailing_slash=False)
router.register(r'products', ProductViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),

    url(r'^products/(?P<product_slug>[-\w]+)/comments/?$', 
        CommentsListCreateAPIView.as_view()),

    url(r'^products/(?P<product_slug>[-\w]+)/comments/(?P<comment_pk>[\d]+)/?$',
        CommentsDestroyAPIView.as_view()),

    url(r'^categories/?$', CategoryListAPIView.as_view()),
]
