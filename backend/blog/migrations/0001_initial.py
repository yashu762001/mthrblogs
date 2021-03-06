# Generated by Django 2.2.12 on 2021-10-27 21:32

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MyBlog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('slug', models.SlugField(max_length=200)),
                ('thumbnail', models.ImageField(upload_to='photos/%Y/%m/%d')),
                ('month', models.CharField(max_length=10)),
                ('day', models.CharField(max_length=2)),
                ('content', models.TextField()),
                ('date_created', models.DateTimeField(blank=True, default=datetime.datetime.now)),
            ],
        ),
    ]
