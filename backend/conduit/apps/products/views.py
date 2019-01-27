from rest_framework import generics, mixins, status, viewsets
from rest_framework.exceptions import NotFound
from rest_framework.permissions import (
    AllowAny, IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser
)
from rest_framework.response import Response
from rest_framework.views import APIView
from .renderers import ProductJSONRenderer

from .models import Product, Comentario, Category
from .serializers import ProductSerializer, ComentarioSerializer, CategorySerializer

class ProductViewSetAdmin(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_field = 'slug'
    permission_classes = (IsAuthenticated,)
    permission_classes = (IsAdminUser,)

class ProductViewSet(mixins.CreateModelMixin, 
                     mixins.ListModelMixin,
                     mixins.RetrieveModelMixin,
                     viewsets.GenericViewSet):
    print("\n---------------------------------------   ProductViewSet  -- \n")
    lookup_field = 'slug'
    queryset = Product.objects.select_related('saler', 'saler__user')
    #permission_classes = (IsAuthenticatedOrReadOnly,)
    renderer_classes = (ProductJSONRenderer,)
    serializer_class = ProductSerializer
    
    def get_queryset(self):
        print("\n---------------------------------------   ProductViewSet-get_queryset  -- \n")
        queryset = self.queryset
        
        saler = self.request.query_params.get('saler', None)
        if saler is not None:
            print("saler")
            queryset = queryset.filter(saler__user__username=saler)
                
        category = self.request.query_params.get('category', None)
        if category is not None:
            print("category")
            queryset = queryset.filter(category__category=category)


        return queryset

    def create(self, request):
        print("\n---------------------------------------  ProductViewSet  -- create\n")
        
        #serializer_context = {'request': request}
        #info = request.data.get('product', {})

        #print(request.data)
        serializer_context = {
            #'saler': request.user.profile,
            'saler': request.user,
            'request': request.data
        }
        print(serializer_context)
        return Response("probando create", status=status.HTTP_200_OK)
        #serializer_data = request.data.get('product', {})
        #print(serializer_context)
        #serializer = self.serializer_class(
        #data=serializer_data, context=serializer_context
        #)
        #serializer.is_valid(raise_exception=True)
        #serializer.save()
        #
        #return Response(serializer.data, status=status.HTTP_201_CREATED)

    def list(self, request):
        print("\n---------------------------------------  ProductViewSet  -- list\n")
        serializer_context = {'request': request}
        page = self.paginate_queryset(self.get_queryset())

        serializer = self.serializer_class(
            page,
            context=serializer_context,
            many=True
        )

        return self.get_paginated_response(serializer.data)

    def retrieve(self, request, slug):
        print("\n---------------------------------------  ProductViewSet  -- retrieve\n")
        serializer_context = {'request': request}

        try:
            serializer_instance = self.queryset.get(slug=slug)
        except Product.DoesNotExist:
            raise NotFound('An product with this slug does not exist.')

        serializer = self.serializer_class(
            serializer_instance,
            context=serializer_context
        )

        return Response(serializer.data, status=status.HTTP_200_OK)

    def delete(self, request, slug):
        print("\n---------------------------------------  ProductViewSet  -- delete\n")
        serializer_context = {'request': request}
        try:
            serializer_instance = self.queryset.get(slug=slug)
            serializer_instance.delete()
            return Response("deleted", status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            return Response("NO-----deleted", status=status.HTTP_200_OK)



    def update(self, request, slug):
        print("\n---------------------------------------  ProductViewSet  -- update\n")
        serializer_context = {'request': request}

        try:
            serializer_instance = self.queryset.get(slug=slug)
        except Product.DoesNotExist:
            raise NotFound('An product with this slug does not exist.')
            
        serializer_data = request.data.get('product', {})

        serializer = self.serializer_class(
            serializer_instance, 
            context=serializer_context,
            data=serializer_data, 
            partial=True
        )
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)


class ComentariosListCreateAPIView(generics.ListCreateAPIView):
    print("\n---------------------------------------  ComentariosListCreateAPIView  -- \n")
    lookup_field = 'product__slug'
    lookup_url_kwarg = 'product_slug'
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Comentario.objects.select_related(
        'product', 'product__saler', 'product__saler__user',
        'saler', 'saler__user'
    )
    serializer_class = ComentarioSerializer

    def filter_queryset(self, queryset):
        print("\n---------------------------------------  ComentariosListCreateAPIView-filter_queryset-- \n")    
        # The built-in list function calls `filter_queryset`. Since we only
        # want comments for a specific article, this is a good place to do
        # that filtering.
        filters = {self.lookup_field: self.kwargs[self.lookup_url_kwarg]}

        return queryset.filter(**filters)

    def create(self, request, article_slug=None):
        print("\n---------------------------------------  ComentariosListCreateAPIView-create-- \n")    
        data = request.data.get('comentario', {})
        context = {'saler': request.user.profile}

        try:
            context['product'] = Product.objects.get(slug=product_slug)
        except Product.DoesNotExist:
            raise NotFound('An product with this slug does not exist.')

        serializer = self.serializer_class(data=data, context=context)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class ComentariosDestroyAPIView(generics.DestroyAPIView):
    print("\n---------------------------------------  ComentariosDestroyAPIView  -- \n")
    lookup_url_kwarg = 'comentario_pk'
    permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Comentario.objects.all()

    def destroy(self, request, product_slug=None, comentario_pk=None):
        try:
            comentario = Comentario.objects.get(pk=comentario_pk)
        except Comentario.DoesNotExist:
            raise NotFound('A Comentario with this ID does not exist.')

        comentario.delete()

        return Response(None, status=status.HTTP_204_NO_CONTENT)


class CategoryListAPIView(generics.ListAPIView):
    print("\n---------------------------------------  CategoryListAPIView  -- \n")
    queryset = Category.objects.all()
    pagination_class = None
    permission_classes = (AllowAny,)
    serializer_class = CategorySerializer

    def list(self, request):
        print("\n---------------------------------------  CategoryListAPIView-list-- \n")
        serializer_data = self.get_queryset()
        serializer = self.serializer_class(serializer_data, many=True)

        return Response({
            'categories': serializer.data
        }, status=status.HTTP_200_OK)


class ProductFeedAPIView(generics.ListAPIView):
    print("\n---------------------------------------  ProductFeedAPIView  -- \n")
    # permission_classes = (IsAuthenticated,)
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def list(self, request):
        queryset = self.get_queryset()
        page = self.paginate_queryset(queryset)

        serializer_context = {'request': request}
        serializer = self.serializer_class(
            page, context=serializer_context, many=True
        )
        print("\n---------------------------------------  ProductFeedAPIView  list-- \n", serializer)

        return self.get_paginated_response(serializer.data)
