from rest_framework import generics
from .models import MenuItem
from .serializers import MenuItemSerializer

class MenuItemListView(generics.ListAPIView):
    queryset = MenuItem.objects.filter(is_available=True)
    serializer_class = MenuItemSerializer