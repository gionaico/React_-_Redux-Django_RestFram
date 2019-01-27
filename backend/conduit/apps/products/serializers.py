from rest_framework import serializers
from conduit.apps.profiles.serializers import ProfileSerializer
from .models import Product, Comentario, Category
from .relations import CategoryRelatedField


class ProductSerializer(serializers.ModelSerializer):
    saler = ProfileSerializer(read_only=True)
    description = serializers.CharField(required=False)
    slug = serializers.SlugField(required=False)


    categoryList = CategoryRelatedField(many=True, required=False, source='category')

    # Django REST Framework makes it possible to create a read-only field that
    # gets it's value by calling a function. In this case, the client expects
    # `created_at` to be called `createdAt` and `updated_at` to be `updatedAt`.
    # `serializers.SerializerMethodField` is a good way to avoid having the
    # requirements of the client leak into our API.
    createdAt = serializers.SerializerMethodField(method_name='get_created_at')
    updatedAt = serializers.SerializerMethodField(method_name='get_updated_at')

    class Meta:
        model = Product
        fields = (
            'saler',
            'name',
            'price',
            'description',
            'slug',
            'image',
            'categoryList',
            'createdAt',
            'updatedAt',
        )

    def create(self, validated_data):
        saler = self.context.get('saler', None)

        categories = validated_data.pop('categories', [])

        product = product.objects.create(saler=saler, **validated_data)

        for category in categories:
            product.categories.add(category)

        return product

    def get_created_at(self, instance):
        return instance.created_at.isoformat()
    
    def get_updated_at(self, instance):
        return instance.updated_at.isoformat()

    

class ComentarioSerializer(serializers.ModelSerializer):
    saler = ProfileSerializer(required=False)

    createdAt = serializers.SerializerMethodField(method_name='get_created_at')
    updatedAt = serializers.SerializerMethodField(method_name='get_updated_at')

    class Meta:
        model = Comentario
        fields = (
            'id',
            'saler',
            'body',
            'createdAt',
            'updatedAt',
        )

    def create(self, validated_data):
        product = self.context['product']
        saler = self.context['saler']

        return Comentario.objects.create(
            saler=saler, product=product, **validated_data
        )

    def get_created_at(self, instance):
        return instance.created_at.isoformat()

    def get_updated_at(self, instance):
        return instance.updated_at.isoformat()


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('category',)

    def to_representation(self, obj):
        return obj.category
