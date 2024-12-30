from django.urls import path
from articles.views import article_detail, article_list


app_name = 'articles'

urlpatterns = [
    path('articles/', article_list, name='article-list'),
    path('articles/<slug:slug>/', article_detail, name='article-detail'),
]