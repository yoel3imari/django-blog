from django.urls import path
from .views import login, register, validate_token

urlpatterns = [
    path("login/", login),
    path("register/", register),
    path("validate_token/", validate_token),
]