from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from .models import MyBlog

class MyBlogAdmin(SummernoteModelAdmin):
    exclude = ('slug',)
    list_display = ('id', 'title', 'date_created')
    search_fields = ('title',)
    list_per_page = 40
    summernote_fields = ('content',)

admin.site.register(MyBlog, MyBlogAdmin)