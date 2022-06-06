from django.urls.conf import path
from . import views

urlpatterns = [
    path('exhibits/', views.ExhibitsListAPIView.as_view()),
    path('exhibits/last/', views.ExhibitsLastListAPIView.as_view()),
    path('exhibits/categories/', views.CategoriesListAPIView.as_view()),
    path('exhibit/<int:pk>/', views.ExhibitRetrieveAPIView.as_view()),
]
