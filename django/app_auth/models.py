from django.db import models
from django.contrib.auth.models import AbstractUser


class Usuario(AbstractUser):
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    username = models.CharField(max_length=255)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

