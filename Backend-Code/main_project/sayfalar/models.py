from django.db import models
from django.utils.text import slugify

class categories(models.Model):
    name=models.CharField(max_length=40)
    slug=models.SlugField(default="",max_length=50,null=False,unique=True,db_index=True)

    def __str__(self) -> str:
        return f"{self.name}".title()

class project(models.Model):
    title=models.CharField(max_length=50)
    text=models.TextField()
    img=models.CharField(max_length=50,blank=False)
    date=models.DateField()
    isActive=models.BooleanField()
    slug=models.SlugField(default="",null=False,unique=True,db_index=True,blank=True)
    category=models.ForeignKey(categories,default=1, on_delete=models.CASCADE,related_name="kurslar")

    # def save(self,*args,**kwargs):
    #     self.slug=slugify(self.title)
    #     super().save(args,kwargs)



class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()


class servicesProduct(models.Model):
   
    img=models.CharField(max_length=50,blank=False)
    icon=models.TextField()
    title=models.TextField()
    textone=models.TextField()
    texttwo=models.TextField()


class careerProduct(models.Model):
    title=models.CharField(max_length=50)
    text=models.TextField()
    url=models.CharField(max_length=50,blank=False)
    buttonText=models.DateField()
   

