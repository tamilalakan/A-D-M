from django.contrib.auth.models import User, Group
from rest_framework import serializers
from rest_framework.authtoken.models import Token
from .models import UserModel

class UserSerializer(serializers.HyperlinkedModelSerializer):
	
	class Meta:
		model = UserModel
		fields = ('id', 'username','email', 'password', 'phone')
		extra_kwargs = {'password' : {'write_only':True,'required':True}}

	def create(self, validated_data):
		user = User.objects.create_user(username=validated_data['username'], email=validated_data['email'], password=validated_data['password'])
		user1 = UserModel.objects.create(username=validated_data['username'], email=validated_data['email'], password=validated_data['password'], phone=validated_data['phone'])
		user1.save()
		print(validated_data)
		token = Token.objects.create(user=user)
		print(token.key)
		return user
