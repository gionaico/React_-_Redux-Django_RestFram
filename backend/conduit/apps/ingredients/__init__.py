from django.apps import AppConfig


class IngredientsAppConfig(AppConfig):
    name = 'conduit.apps.ingredients'
    label = 'ingredients'
    verbose_name = 'ingredients'

    

default_app_config = 'conduit.apps.ingredients.IngredientsAppConfig'
