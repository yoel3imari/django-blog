from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated

from .serializers import UserSerializer

@api_view(["POST"])
def login(request):
    """
    Authenticate user and return JWT tokens.
    """
    user = get_object_or_404(User, username=request.data["username"])
    if not user.check_password(request.data["password"]):
        return Response(
            {"message": "Wrong Credentials!"},
            status=status.HTTP_401_UNAUTHORIZED
        )
    # Generate JWT tokens
    refresh = RefreshToken.for_user(user)
    serializer = UserSerializer(instance=user)
    return Response({
        "refresh": str(refresh),
        "access": str(refresh.access_token),
        "user": serializer.data
    })

@api_view(["POST"])
def register(request):
    """
    Register a new user and return JWT tokens.
    """
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        user.set_password(request.data["password"])
        user.save()
        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)
        return Response({
            "refresh": str(refresh),
            "access": str(refresh.access_token),
            "user": serializer.data
        })
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def validate_token(request):
    """
    Validate the JWT token.
    """
    return Response({"message": "Token is valid!"}, status=status.HTTP_200_OK)