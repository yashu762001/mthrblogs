from rest_framework.response import Response
from rest_framework import permissions, serializers
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from blog.models import MyBlog
from blog.serializers import MyBlogSerializer

class MyBlogListView(ListAPIView):
    queryset = MyBlog.objects.order_by('-date_created')
    serializer_class = MyBlogSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)

class MyBlogDetailView(RetrieveAPIView):
    queryset = MyBlog.objects.order_by('-date_created')
    serializer_class = MyBlogSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny,)

