from django.apps import AppConfig


class ProductsAppConfig(AppConfig):
    name = 'conduit.apps.products'
    label = 'products'
    verbose_name = 'Products'

    def ready(self):
        import conduit.apps.products.signals

default_app_config = 'conduit.apps.products.ProductsAppConfig'
