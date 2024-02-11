from django.contrib import admin
from .models import Cars,categories


@admin.register(Cars)
class Home_Admin(admin.ModelAdmin):
    list_display = ("title", "isActive", "slug", "Home_Categori")
    list_display_links = ("title", "slug",)
    prepopulated_fields = {"slug": ("title",)}
    list_filter = ("title", "isActive", "Home_Categori")
    list_editable = ("isActive",)
    search_fields = ("title", "description")

@admin.register(categories)
class CategoriesAdmin(admin.ModelAdmin):
    list_display=("name","slug")
    prepopulated_fields={"slug":("name",),}
