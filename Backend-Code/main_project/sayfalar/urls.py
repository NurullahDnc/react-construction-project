from django.contrib import admin
from django.urls import path
from . import views
from .views import anasayfa, hakkimizda, project, details,getCourse,search,homeadd

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.anasayfa),
    path('hakkimizda', views.hakkimizda),
    # path('project/', views.project_),  # Burada bir hata var
    path('categories', views.categories_),
    path("search",views.search,name='search'),
    path('project/<slug>', views.details),
    path('project/kategori/<slug>', views.getCourse),
    path('anasayfa', views.anasayfa, name='mymodel-list'),
    path('kursekle',views.homeadd, name="home_ekle"),
    path("liste",views.homeList,name="courseList"),
    path("HomeUpdate/<int:id>",views.projectUpdate,name="projectUpdate")
]
