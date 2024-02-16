from django.contrib import admin
from .models import project,categories


@admin.register(project)
class Home_Admin(admin.ModelAdmin):
    list_display = ("title", "isActive", "slug", "category")
    list_display_links = ("title", "slug",)
    prepopulated_fields = {"slug": ("title",)}
    list_filter = ("title", "isActive", "category")
    list_editable = ("isActive",)
    search_fields = ("title", "text")

@admin.register(categories)
class CategoriesAdmin(admin.ModelAdmin):
    list_display=("name","slug")
    prepopulated_fields={"slug":("name",),}
