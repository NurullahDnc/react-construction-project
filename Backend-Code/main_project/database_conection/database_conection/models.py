from django.db import models

class sql_connection(models.Model):
    title=models.CharField(max_length=50)
    description=models.CharField(max_length=50)
    imageUrl=models.TextField()
    date=models.DateField()
    isActive=models.BooleanField()