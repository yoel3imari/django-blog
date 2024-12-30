import django_filters

from articles.models import Article


class ArticleFilter(django_filters.FilterSet):
    # Filter by author username
    author_username = django_filters.CharFilter(field_name='author__username', lookup_expr='iexact')
    
    # Filter by tags (exact match)
    tags = django_filters.CharFilter(field_name='tags', lookup_expr='icontains')
    
    # Filter by is_published
    is_published = django_filters.BooleanFilter(field_name='is_published')

    class Meta:
        model = Article
        fields = ['author_username', 'tags', 'is_published']