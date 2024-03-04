from django.contrib import admin
from django.urls import path
from . import views
from .views import anasayfa, hakkimizda, project, details,getCourse

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.anasayfa),
    path('hakkimizda', views.hakkimizda),
    # path('project/', views.project_),  # Burada bir hata var
    path('categories', views.categories_),
    # path('project/<slug>', views.details),
    path('project/kategori', views.getCourse),
    path('anasayfa', views.anasayfa, name='mymodel-list'),
]
