from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, redirect, render

from .forms import HomeAddCreate, HomeUpdate
from .models import categories, project,categories
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


def project_(request,slug):
    db = project.objects.all()
    car_list = [{"id": db_.id, "title": db_.name, "slug": db_.slug} for db_ in db]
    return JsonResponse({"cars": car_list})

def categories_(request,slug):
    db = categories.objects.all()
    car_list = [{"id": db_.id, "title": db_.name, "slug": db_.slug} for db_ in db]
    return JsonResponse({"cars": car_list})

def getCourse(request,slug):
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

def homeList(request):
    project_=project.objects.all()
    return render(request,"pages/projectList.html",{
        "project":project_
    })

def projectUpdate(request, id):
    projectValue = get_object_or_404(project, pk=id)
    if request.method == "POST":
        form = HomeUpdate(request.POST, instance=projectValue)
        if form.is_valid():
            form.save()
            return redirect("/course_list")  # Doğru URL'yi belirtin
    else:
        form = HomeUpdate(instance=projectValue)

    return render(request, "pages/projectUpdate.html", {"form": form })
