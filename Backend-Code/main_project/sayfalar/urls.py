from django.contrib import admin
from django.urls import path
from . import views
from .views import anasayfa, hakkimizda, project, details,getCourse,search,homeadd
from django.conf.urls.static import static
from django.conf import settings
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
    path("upload",views.upload,name="uploadimage"),
    path("liste",views.homeList,name="courseList"),
    path("homeupdate/<int:id>",views.projectUpdate,name='projectUpdate'),
    path("HomeDelete/<int:id>",views.projectDelete,name="projectDelete"),
]
