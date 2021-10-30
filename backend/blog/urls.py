from django.urls import path
from .views import MyBlogListView, MyBlogDetailView

urlpatterns = [
    path('', MyBlogListView.as_view()),
    path('<slug>', MyBlogDetailView.as_view())
]