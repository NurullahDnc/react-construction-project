from django.contrib import admin
from django.urls import path
from . import views
<<<<<<< HEAD
from .views import anasayfa, hakkimizda, project, details,categories_
=======
from .views import anasayfa, hakkimizda, project, details,getCourse
>>>>>>> 2fb21b6e57745a81e3b028eb5341fbbb4b6c71bd

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.anasayfa),
    path('hakkimizda', views.hakkimizda),
<<<<<<< HEAD
    path('project', views.project_),
    path('categories', views.categories_),
    path('kategori/<slug>', views.details),
=======
    # path('project/', views.project_),  # Burada bir hata var
    path('categories', views.categories_),
    # path('project/<slug>', views.details),
    path('project/kategori', views.getCourse),
>>>>>>> 2fb21b6e57745a81e3b028eb5341fbbb4b6c71bd
    path('anasayfa', views.anasayfa, name='mymodel-list'),
]
