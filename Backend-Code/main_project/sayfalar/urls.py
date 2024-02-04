
from django.contrib import admin
from django.urls import path
from . import wiews


urlpatterns = [
    path('admin/', admin.site.urls),
    path('',wiews.anasayfa),
    path('anasayfa',wiews.anasayfa),
    path('hakkimizda',wiews.hakkimizda),
    path('iletisim',wiews.iletisim),
    path('kategori/<slug>',wiews.details),
    # path('kategori/<int:category_id>',views.details),
    # path('kategori/<str:category_name>',views.),
]
