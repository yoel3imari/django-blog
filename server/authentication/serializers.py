from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = User
        fields = ["username", "email"]
        read_only_fields = [
            "id",
            "email_verified_at",
            "created_at",
            "updated_at",
        ]
