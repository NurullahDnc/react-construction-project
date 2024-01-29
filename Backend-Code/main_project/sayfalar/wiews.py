from django.http import HttpResponse
from django.shortcuts import render


def anasayfa(request):
    return render(request,'pages/anasayfa.html',{
                  'name':'erkut',
                  'surname':'elik'})

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