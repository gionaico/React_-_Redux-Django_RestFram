from django.db import models
from conduit.apps.core.models import TimestampedModel


class Product(TimestampedModel):
    slug = models.SlugField(db_index=True, max_length=255, unique=True)
    name = models.CharField(db_index=True, max_length=255)

    description = models.TextField()
    price = models.DecimalField(max_digits=5, decimal_places=2, blank=True, null=True)

    
    saler = models.ForeignKey(
        'profiles.Profile', on_delete=models.CASCADE, related_name='products'
    )

    category = models.ManyToManyField(
        'products.Category', related_name='products'
    )

    def __str__(self):
        return self.name


class Comentario(TimestampedModel):
    body = models.TextField()

    product = models.ForeignKey(
        'products.Product', related_name='comentarios', on_delete=models.CASCADE
    )

    saler = models.ForeignKey(
        'profiles.Profile', related_name='comentarios', on_delete=models.CASCADE
    )


class Category(TimestampedModel):
    category = models.CharField(max_length=255)
    slug = models.SlugField(db_index=True, unique=True)

    def __str__(self):
        return self.category
