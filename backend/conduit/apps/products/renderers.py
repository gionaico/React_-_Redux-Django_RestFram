from conduit.apps.core.renderers import ConduitJSONRenderer


class ProductJSONRenderer(ConduitJSONRenderer):
    object_label = 'product'
    pagination_object_label = 'products'
    pagination_count_label = 'productsCount'

