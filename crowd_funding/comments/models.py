from django.db import models


# Create your models here.
class Comments(models.Model):
    message = models.CharField()

    def __str__(self):
        return self.message
