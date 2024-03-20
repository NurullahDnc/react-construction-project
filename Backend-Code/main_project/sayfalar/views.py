import os
import random
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, redirect, render

from .forms import HomeAddCreate, HomeUpdate, uploadForm
from .models import categories, project,categories, uploadModel
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
            form=HomeAddCreate(request.POST,request.FILES)
            if form.is_valid():
                form.save()
                
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
        form = HomeUpdate(request.POST,request.FILES, instance=projectValue)
        if form.is_valid():
            form.save()
            return redirect("/liste") 
    else:
        form = HomeUpdate(instance=projectValue)

    return render(request, "pages/projectUpdate.html", {"form": form })


def projectDelete(request,id):
    projectAll=get_object_or_404(project,pk=id)
    if request.method=="POST":
        projectAll.delete()
        return redirect("courseList")
    return render(request,"pages/projectDelete.html",{"project":projectAll})

from django.shortcuts import render
from .forms import uploadForm
from .models import uploadModel

def upload(request):
    if request.method == "POST":
        form = uploadForm(request.POST, request.FILES)
        if form.is_valid():
            model = uploadModel(image=request.FILES["img"])
            model.save()
            return render(request, "pages/succes.html")
    else:  # Handle GET request
        form = uploadForm()
    return render(request, "pages/uploadPage.html", {"form": form})
