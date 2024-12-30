from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Article
from .serializers import ArticleSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    
    lookup_field = 'slug'
    filterset_fields = ['is_published', 'tags']
    search_fields = ['title', 'content']
    ordering_fields = ['published_at', 'created_at']

    def get_object(self):
        queryself = self.get_queryset()
        slug = self.kwargs.get('slug')
        return queryself.get(slug=slug)

    def get_queryset(self):
        queryset = Article.objects.all()
        start_date = self.request.query_params.get('start_date', None)
        end_date = self.request.query_params.get('end_date', None)
        
        if start_date:
            queryset = queryset.filter(published_at__gte=start_date)
        if end_date:
            queryset = queryset.filter(published_at__lte=end_date)
            
        tag = self.request.query_params.get('tag', None)
        if tag:
            queryset = queryset.filter(tags__icontains=tag)
            
        return queryset