from django.contrib import admin
from .models import Product, Comentario, Category

# Register your models here.
admin.site.register(Product)
admin.site.register(Comentario)
admin.site.register(Category)