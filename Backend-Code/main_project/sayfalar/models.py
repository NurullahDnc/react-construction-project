from django.db import models
class Cars(models.Model):
    title=models.CharField(max_length=50)
    description=models.TextField()
    imageUrl=models.CharField(max_length=50,blank=False)
    date=models.DateField()
    isActive=models.BooleanField()


class kategoriler(models.Model):
    name=models.CharField(max_length=40)
    slug=models.CharField(max_length=50)
    