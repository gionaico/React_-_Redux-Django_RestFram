import graphene

import apps.graphql.schema

class Mutations(
    apps.graphql.schema.Mutation,
    graphene.ObjectType,
):
    pass


class Queries(
    apps.graphql.schema.Query,
    graphene.ObjectType
):
    pass


schema = graphene.Schema(query=Queries, mutation=Mutations)