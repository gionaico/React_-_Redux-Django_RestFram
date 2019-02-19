from django.db import models


class CategoryIngredients(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Ingredient(models.Model):
    name = models.CharField(max_length=100)
    notes = models.TextField()
    categoryIngredients = models.ForeignKey(
        CategoryIngredients, related_name='ingredients', on_delete=models.CASCADE)

    def __str__(self):
        return self.name