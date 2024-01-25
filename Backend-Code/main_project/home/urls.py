
from django.http import HttpResponse
from django.urls import path
def home(req):
    return HttpResponse("Anasayfa")

def iletisim(req):
    return HttpResponse("iletisim")

def hakkimizda(req):
    return HttpResponse("hakkimizda sayfası")


urlpatterns = [
    path('',home),
    path('anasayfa',home),
    path('iletisim',iletisim),
    path('hakkimizda',hakkimizda)
]
