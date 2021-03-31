from django.db import models

from .projects import Project


class Raiting(models.Model):
    one_star = models.IntegerField(default=0)
    two_star = models.IntegerField(default=0)
    three_star = models.IntegerField(default=0)
    four_star = models.IntegerField(default=0)
    five_star = models.IntegerField(default=0)
    project = models.ForeignKey(Projects, on_delete=models.CASCADE)

    def getAvarageStar(self):
        return (self.one_star + self.two_star + self.three_star + self.four_star + self.five_star ) / 5