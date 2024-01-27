from django.http import HttpResponse


def anasayfa(request):
    return HttpResponse("Anasayfa")


def iletisim(request):
    return HttpResponse('iletisim')

def hakkimizda(request):
    return HttpResponse("hakkimizda")