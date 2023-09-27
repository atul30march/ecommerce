from django.urls import path
from . import views
urlpatterns = [
    path('', views.getRoutes, name ='router'),
    path('products/', views.getProducts, name ='products'),
    path('products/<str:pk>/', views.getProduct, name ='product'),
]
