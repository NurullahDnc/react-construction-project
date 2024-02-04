from django.http import HttpResponse
from django.shortcuts import render
from .models import Cars

def anasayfa(request):
    kurslar=Cars.objects.filter(isActive=1)
    return render(request,'pages/anasayfa.html',{
                  'kategoiler':kurslar,
                  })

def iletisim(request):
    data={
        'name':'isim',
        'surnama':'soyisim',
        'number':'sayı',
    }

    return render (request,'pages/iletisim.html',{
        'veri':data.keys(),
        'deger':data.values()
    })

def hakkimizda(request):
    return render(request,"pages/hakkimizda.html")