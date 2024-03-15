from django.http import HttpResponse, JsonResponse
<<<<<<< HEAD
from django.shortcuts import get_object_or_404, render
<<<<<<< HEAD
from .models import categories, project, Item
=======
=======
from django.shortcuts import get_object_or_404, redirect, render

from .forms import HomeAddCreate
>>>>>>> master
from .models import categories, project, Item,categories
>>>>>>> 2fb21b6e57745a81e3b028eb5341fbbb4b6c71bd
from .serializers import ItemSerializer
from rest_framework import generics
from . import models

def anasayfa(request):
    project_ = project.objects.filter(isActive=True)
    kategoriler = categories.objects.all()
    return render(request,'pages/anasayfa.html',{'project':project_,'kategoriler':kategoriler})
    
def search(request):
    if "q" in request.GET and request.GET["q"]!="":
        q=request.GET["q"]
        project_ = project.objects.filter(isActive=True,title__contains=q).order_by("date")
        kategoriler = categories.objects.all()
    else:
        return redirect("/kusrlar")
    
    return render(request,'pages/anasayfa.html',
                  {'project':project_,
                   'kategoriler':kategoriler})

<<<<<<< HEAD
def project_(request):
<<<<<<< HEAD
    cars = project.objects.all()
    car_list = [{"id": car.id, "title": car.title, "text": car.text,"slug":car.slug,"model2": car.date,"model2": car.date,"categories":car.category_id} for car in cars]
=======
=======

def project_(request,slug):
>>>>>>> master
    db = project.objects.all()
    car_list = [{"id": db_.id, "title": db_.name, "slug": db_.slug} for db_ in db]
>>>>>>> 2fb21b6e57745a81e3b028eb5341fbbb4b6c71bd
    return JsonResponse({"cars": car_list})

def categories_(request,slug):
    db = categories.objects.all()
<<<<<<< HEAD
    car_list = [{"id": db_.id, "title": db_.name, "sulug": db_.slug} for db_ in db]
    return JsonResponse({"cars": car_list})


=======
    car_list = [{"id": db_.id, "title": db_.name, "slug": db_.slug} for db_ in db]
    return JsonResponse({"cars": car_list})

def getCourse(request,slug):
    kategoriler_database=categories.objects.all()
    kategoriler=[{"id": db_.id, "slug": db_.slug, "name": db_.name} for db_ in kategoriler_database]
    return JsonResponse({'kategoriler':kategoriler})
>>>>>>> 2fb21b6e57745a81e3b028eb5341fbbb4b6c71bd


def hakkimizda(request):
    return render(request, "pages/hakkimizda.html")

def details(request, slug):
    detay = get_object_or_404(project, slug=slug)
    context = {
        'details': detay
    }
    return render(request, 'pages/details.html', context)


def homeadd(request):
        if request.method=="POST":
            form=HomeAddCreate(request.POST)
            if form.is_valid():
                kurs=project(title=form.cleaned_data["title"],
                            text=form.cleaned_data["text"],
                            img=form.cleaned_data["img"],
                            slug=form.cleaned_data["slug"])
                kurs.save()
                return redirect("/anasayfa")
        else:
            form=HomeAddCreate()#Eğer veriler gelmyorsa yeni bir form uygulaması göndermek için kullanılır
        return render(request,"pages/homeAdd.html",{"form":form})

    # if request.method == "POST":
    #     title = request.POST["title"]
    #     text = request.POST["text"]
    #     slug = request.POST["slug"]
    #     isActive = request.POST.get("isActive", False)  # Parantez kullanılmalıdır
    #     if isActive == "on":
    #         isActive = True  # Doğru atama operatörü kullanılmalıdır
    #     ekle = project(title=title, text=text, slug=slug, isActive=isActive)
    #     ekle.save()
    #     return redirect("/anasayfa")
    # return render(request, "pages/homeAdd.html")

def HomeCreate(request):
    form=HomeAddCreate()
    return render(request,"courses/create-course.html",{"form":form})