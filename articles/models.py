from django.db import models
from django.utils import timezone
from django.utils.text import slugify

# Create your models here.
class Article(models.Model):
    title = models.CharField(max_length=100)
    slug= models.SlugField(max_length=100, unique=True, default='')
    content = models.TextField()
    published_at = models.DateTimeField(default=timezone.now)
    is_published = models.BooleanField(default=False)
    tags = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-published_at']
    

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)