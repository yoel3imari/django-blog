from django.urls import path, include
from rest_framework.routers import DefaultRouter

from articles.views import article_detail, article_list


app_name = 'articles'

urlpatterns = [
    path('articles/', article_list, name='article-list'),
    path('articles/<slug:slug>/', article_detail, name='article-detail'),
]