from rest_framework import generics
from .serializer import ExhibitsListSerializer, ExhibitDetailSerializer, CategorySerializer
from .models import Category, Exhibit
from .pagination import StandardResultsSetPagination
from rest_framework.filters import SearchFilter
from django_filters import rest_framework as filters


class CategoriesListAPIView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    pagination_class = None


class ExhibitsListAPIView(generics.ListAPIView):
    queryset = Exhibit.objects.all().order_by('-date_added')
    serializer_class = ExhibitsListSerializer
    pagination_class = StandardResultsSetPagination
    filter_backends = [SearchFilter, filters.DjangoFilterBackend]
    search_fields = ('name',)
    filterset_fields = ('category',)


class ExhibitsLastListAPIView(generics.ListAPIView):
    queryset = Exhibit.objects.all().order_by('-date_added')[:6]
    serializer_class = ExhibitsListSerializer
    pagination_class = None


class ExhibitRetrieveAPIView(generics.RetrieveAPIView):
    queryset = Exhibit.objects.all()
    serializer_class = ExhibitDetailSerializer
    lookup_field = 'pk'
