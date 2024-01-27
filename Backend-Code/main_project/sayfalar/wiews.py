from django.http import HttpResponse
from django.shortcuts import render


def anasayfa(request):
    return render(request,'pages/anasayfa.html')

def iletisim(request):
    return render (request,'pages/iletisim.html')

def hakkimizda(request):
    return render(request,"pages/hakkimizda.html")