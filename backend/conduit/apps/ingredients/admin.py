from django.contrib import admin
from conduit.apps.ingredients.models import CategoryIngredients, Ingredient

admin.site.register(CategoryIngredients)
admin.site.register(Ingredient)