from django.conf.urls import include, url

from rest_framework.routers import DefaultRouter

from .views import (
    ProductViewSet, ComentariosListCreateAPIView, ProductFeedAPIView, 
    ComentariosDestroyAPIView, CategoryListAPIView, ProductViewSetAdmin
)

router = DefaultRouter(trailing_slash=False)
router.register(r'products', ProductViewSet)
router.register(r'products_Admin', ProductViewSetAdmin)  

urlpatterns = [
    url(r'^', include(router.urls)),

    url(r'^products/feed/?$', ProductFeedAPIView.as_view()),

    url(r'^products/(?P<product_slug>[-\w]+)/comentarios/?$', 
        ComentariosListCreateAPIView.as_view()),

    url(r'^products/(?P<product_slug>[-\w]+)/comentarios/(?P<comment_pk>[\d]+)/?$',
        ComentariosDestroyAPIView.as_view()),

    url(r'^categories/?$', CategoryListAPIView.as_view()),
]
