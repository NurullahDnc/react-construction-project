from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, render
from .models import categories, project, Item
from .serializers import ItemSerializer
from rest_framework import generics
from . import models

def anasayfa(request):
    kurslar = project.objects.filter(isActive=1).values('title')
    kategoriler = [{'title': kurs['title']} for kurs in kurslar]
    
    return render(request, 'pages/anasayfa.html', {
        'kategoiler': kategoriler
    })

def project_(request):
    cars = project.objects.all()
    car_list = [{"id": car.id, "title": car.title, "text": car.text,"slug":car.slug,"model2": car.date,"model2": car.date,"categories":car.category_id} for car in cars]
    return JsonResponse({"cars": car_list})

def categories_(request):
    db = categories.objects.all()
    car_list = [{"id": db_.id, "title": db_.name, "sulug": db_.slug} for db_ in db]
    return JsonResponse({"cars": car_list})




def hakkimizda(request):
    return render(request, "pages/hakkimizda.html")

def details(request, slug):
    detay = get_object_or_404(project, slug=slug)
    context = {
        'detay': detay
    }
    return render(request, 'pages/details.html', context)

