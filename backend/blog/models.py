from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify
# Create your models here.

class MyBlog(models.Model):
    title = models.CharField(max_length=100)
    slug = models.SlugField(max_length=200)
    thumbnail = models.ImageField(upload_to='photos/%Y/%m/%d')
    month = models.CharField(max_length=10)
    day = models.CharField(max_length=2)
    content = models.TextField()
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = MyBlog.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug

        while(queryset):
            slug = original_slug + '-' + str(count)
            count+=1
            queryset = MyBlog.objects.all().filter(slug__iexact=slug).count()

        self.slug = slug

        super(MyBlog, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
    