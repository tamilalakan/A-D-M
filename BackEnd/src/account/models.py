from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser


class UserModel(models.Model):
	username = models.CharField(max_length=20, blank=True)
	email = models.EmailField(blank=True)
	password = models.CharField(max_length=20, blank=True)
	phone = models.CharField(max_length=10, blank=True)

	def __str__(self):
		return self.username
