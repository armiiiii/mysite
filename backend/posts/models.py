from django.db import models

from rest_framework import serializers

class Post(models.Model):
    name = models.CharField(max_length=50)
    content = models.TextField()

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
