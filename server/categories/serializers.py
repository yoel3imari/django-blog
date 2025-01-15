from rest_framework import serializers

from categories.models import Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'visit_count', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']