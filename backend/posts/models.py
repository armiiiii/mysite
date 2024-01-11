from django.db import models

from django.utils.timezone import now

from rest_framework import serializers

class Post(models.Model):
    date_created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=50)
    content = models.TextField()
    

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'
