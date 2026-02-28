from django.urls import path
from .views import MenuItemListView, OrderCreateView

urlpatterns = [
    path('', MenuItemListView.as_view(), name='menu-list'),
    path('order/', OrderCreateView.as_view(), name='create-order'),
]