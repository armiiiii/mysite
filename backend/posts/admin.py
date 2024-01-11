from django.contrib import admin

from .models import Post


class PostAdmin(admin.ModelAdmin):
    list_display = ("name", "date_created")
    search_fields = ("name", "id")

admin.site.register(Post, PostAdmin)
