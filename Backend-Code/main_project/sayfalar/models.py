from django.db import models
from django.utils.text import slugify

class categories(models.Model):
    name=models.CharField(max_length=40)
    slug=models.SlugField(default="",null=False,unique=True,db_index=True,max_length=50)

    def __str__(self) -> str:
        return f"{self.name}"

class project(models.Model):
    title=models.CharField(max_length=50)
    text=models.TextField()
    img=models.ImageField(upload_to="images",default="")
    date=models.DateField(auto_now=True)
    isActive=models.BooleanField(default=True)
    slug=models.SlugField(default="",null=False,unique=True,db_index=True)
    category=models.ForeignKey(categories,default=1, on_delete=models.CASCADE,related_name="evler")

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

class uploadModel(models.Model):
    image=models.ImageField(upload_to="img")
   

