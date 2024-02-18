from django.contrib import admin
from django.urls import path
from . import views
from .views import anasayfa, hakkimizda, project, details,categories_

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.anasayfa),
    # path('anasayfa', views.anasayfa),
    path('hakkimizda', views.hakkimizda),
    path('project', views.project_),
    path('categories', views.categories_),
    path('kategori/<slug>', views.details),
    path('anasayfa', views.anasayfa, name='mymodel-list'),
]

