from django.contrib import admin
from rest_framework.authtoken.admin import TokenAdmin
from .models import UserModel

admin.site.register(UserModel)
TokenAdmin.raw_id_fields = ['user']