from rest_framework import serializers
from .models import Exhibit, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'slug']

class ExhibitsListSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Exhibit
        fields = ['id', 'photo', 'name', 'category']


class ExhibitDetailSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Exhibit
        fields = ['id', 'photo', 'name', 'description', 'category']
