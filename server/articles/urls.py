from django.urls import path
from articles.views import article_detail, article_list, latest_articles


app_name = 'articles'

urlpatterns = [
    path('articles/', article_list, name='article-list'),
    path('articles/<slug:slug>/', article_detail, name='article-detail'),
    path('latest-articles/', latest_articles, name='latest-articles'),
]