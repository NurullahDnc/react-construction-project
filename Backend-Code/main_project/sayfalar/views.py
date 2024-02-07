from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render
from .models import Cars, Item
from .serializers import ItemSerializer
from rest_framework import generics

def anasayfa(request):
    kurslar = Cars.objects.filter(isActive=1).values('title')
    kategoriler = [{'title': kurs['title']} for kurs in kurslar]
    
    return render(request, 'pages/anasayfa.html', {
        'kategoiler': kategoriler
    })

def iletisim(request):
    data = {
        'name': 'isim',
        'surname': 'soyisim',
        'number': 'sayı',
    }
    return render(request, 'pages/iletisim.html', {
        'veri': data.keys(),
        'deger': data.values()
    })

def hakkimizda(request):
    return render(request, "pages/hakkimizda.html")

def details(request, slug):
    detay = get_object_or_404(Cars, slug=slug)
    context = {
        'detay': detay
    }
    return render(request, 'pages/details.html', context)

class ItemList(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
