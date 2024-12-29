from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    tags_list = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = ['id', 'title', 'slug', 'content', 'created_at', 'updated_at', 
                 'published_at', 'is_published', 'tags', 'tags_list']
        read_only_fields = ['created_at', 'updated_at']

    def get_tags_list(self, obj):
        return [tag.strip() for tag in obj.tags.split(',')] if obj.tags else []