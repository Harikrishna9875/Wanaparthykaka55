from rest_framework import generics
from .models import MenuItem, Order
from .serializers import MenuItemSerializer
from .order_serializers import OrderSerializer

class MenuItemListView(generics.ListAPIView):
    queryset = MenuItem.objects.filter(is_available=True)
    serializer_class = MenuItemSerializer


class OrderCreateView(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer