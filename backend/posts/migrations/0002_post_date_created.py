# Generated by Django 5.0.1 on 2024-01-11 23:12

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2024, 1, 11, 23, 12, 59, 643418, tzinfo=datetime.timezone.utc)),
        ),
    ]
