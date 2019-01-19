from rest_framework import serializers

from .models import Category


class CategoryRelatedField(serializers.RelatedField):
    def get_queryset(self):
        return Category.objects.all()

    def to_internal_value(self, data):
        category, created = Category.objects.get_or_create(category=data, slug=data.lower())

        return category

    def to_representation(self, value):
        return value.category
