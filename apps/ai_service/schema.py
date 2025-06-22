import graphene

class Query(graphene.ObjectType):
    hello = graphene.String()

    def resolve_hello(root, info):
        return "Hola desde el microservicio IA 🚀"

schema = graphene.Schema(query=Query)
