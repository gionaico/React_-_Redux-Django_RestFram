import graphene

import conduit.apps.ingredients.schema


class Query(conduit.apps.ingredients.schema.Query, graphene.ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass

schema = graphene.Schema(query=Query)