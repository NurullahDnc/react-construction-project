from django.http import HttpResponse
from django.shortcuts import get_object_or_404, render
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

def details(request,slug):
    detay_=get_object_or_404(Cars,slug=slug)
    context={
        'detay':detay_
    }
    return render(request,'pages/details.html',context)