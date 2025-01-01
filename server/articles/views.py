from django.db import models

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .filters import ArticleFilter
from .models import Article
from .serializers import ArticleSerializer

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticatedOrReadOnly])
def article_list(request):
    if request.method == 'GET':
        # Apply filters
        article_filter = ArticleFilter(request.GET, queryset=Article.objects.all())
        filtered_queryset = article_filter.qs

        # Apply search
        search_query = request.query_params.get('search', None)
        if search_query:
            filtered_queryset = filtered_queryset.filter(
                models.Q(title__icontains=search_query) | models.Q(content__icontains=search_query)
            )

        # Serialize and return the filtered queryset
        serializer = ArticleSerializer(filtered_queryset, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        try:
            serializer = ArticleSerializer(data=request.data)
            if serializer.is_valid():
                # get category
                category = request.data.get('category')
                category.visit_count += 1
                category.save()
                serializer.save(author=request.user)
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response({"error": serializer.errors, "request": request.data}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticatedOrReadOnly])
def article_detail(request, slug):
    try:
        article = Article.objects.get(slug=slug)
        if article.is_published is False:
            return Response(
                status=status.HTTP_404_NOT_FOUND,
            )
    except Article.DoesNotExist:
        return Response(
            {"error": "This Article Does not exists!"},
            status=status.HTTP_404_NOT_FOUND
        )

    if request.method == 'GET':
        serializer = ArticleSerializer(article)
        return Response(serializer.data)

    elif request.method == 'PUT':
        if article.author != request.user:
            return Response(
                {"error": "You are not allowed to update this article"},
                status=status.HTTP_403_FORBIDDEN,
            )
        serializer = ArticleSerializer(article, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        if article.author != request.user:
            return Response(
                {"error": "You are not allowed to delete this article"},
                status=status.HTTP_403_FORBIDDEN,
            )
        article.delete()
        return Response(status=status.HTTP_200_OK)
    

@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly])
def latest_articles(request):
    articles = Article.objects.filter(is_published=True).order_by('-published_at')[:4]
    serializer = ArticleSerializer(articles, many=True)
    return Response(serializer.data)