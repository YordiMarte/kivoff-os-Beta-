
INSTALLED_APPS = [
    
    "graphene_django",
    "corsheaders",
]

MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    ...
]

GRAPHENE = {
    "SCHEMA": "ai_service.schema.schema"
}

CORS_ALLOW_ALL_ORIGINS = True
