from django.contrib import admin
from django.urls import path
from . import views
from .views import anasayfa, hakkimizda, iletisim, details, ItemList

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.anasayfa),
    # path('anasayfa', views.anasayfa),
    path('hakkimizda', views.hakkimizda),
    path('iletisim', views.iletisim),
    path('kategori/<slug>', views.details),
    path('anasayfa', views.anasayfa, name='mymodel-list'),
]

