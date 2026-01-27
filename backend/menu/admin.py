from django.contrib import admin
from .models import MenuItem

@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ("name", "size", "price", "is_available")
    list_filter = ("is_available", "size")
    search_fields = ("name",)
