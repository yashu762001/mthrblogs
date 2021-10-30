from rest_framework import serializers
from .models import MyBlog

class MyBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyBlog
        fields = '__all__'
        lookup_field = 'slug'