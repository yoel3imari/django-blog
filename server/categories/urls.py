from django.urls import path
from categories.views import category_list, category_detail, popular_categories

urlpatterns = [
    path('categories/', category_list, name='category-list'),
    path('categories/<slug:slug>/', category_detail, name='category-detail'),
    path('popular-categories/', popular_categories, name='popular-categories'),
]