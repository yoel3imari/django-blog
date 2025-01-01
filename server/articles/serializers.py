from rest_framework import serializers
from .models import Article


class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = [
            "id",
            "title",
            "slug",
            "content",
            "is_published",
            "published_at",
            "tags",
            "cover",
            "category",
            "author",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["id", "slug", "author", "created_at", "updated_at"]
        depth = 1
