from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, render
from .models import categories, project, Item
from .models import categories, project, Item,categories
from .serializers import ItemSerializer
from rest_framework import generics
from . import models

def anasayfa(request):
    project_ = project.objects.filter(isActive=True)
    kategoriler = categories.objects.all()
    return render(request,'pages/anasayfa.html',{'project':project_,'kategoriler':kategoriler})
    

def project_(request):
     cars = project.objects.all()
     car_list = [{"id": car.id, "title": car.title, "text": car.text,"slug":car.slug,"model2": car.date,"model2": car.date,"categories":car.category_id} for car in cars]
     db = project.objects.all()
     car_list = [{"id": db_.id, "title": db_.name, "slug": db_.slug} for db_ in db]
     return JsonResponse({"cars": car_list})

def categories_(request):
    db = categories.objects.all()
    car_list = [{"id": db_.id, "title": db_.name, "sulug": db_.slug} for db_ in db]
    return JsonResponse({"cars": car_list})


    car_list = [{"id": db_.id, "title": db_.name, "slug": db_.slug} for db_ in db]
    return JsonResponse({"cars": car_list})

def getCourse(request):
    kategoriler_database=categories.objects.all()
    kategoriler=[{"id": db_.id, "slug": db_.slug, "name": db_.name} for db_ in kategoriler_database]
    return JsonResponse({'kategoriler':kategoriler})
 

def hakkimizda(request):
    return render(request, "pages/hakkimizda.html")

def details(request, slug):
    detay = get_object_or_404(project, slug=slug)
    context = {
        'details': detay
    }
    return render(request, 'pages/details.html', context)


