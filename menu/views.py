from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.authentication import SessionAuthentication

from .models import MenuItem, Order
from .serializers import MenuItemSerializer
from .order_serializers import OrderSerializer


# Custom class to disable CSRF enforcement
class CsrfExemptSessionAuthentication(SessionAuthentication):
    def enforce_csrf(self, request):
        return


class MenuItemListView(generics.ListAPIView):
    queryset = MenuItem.objects.filter(is_available=True)
    serializer_class = MenuItemSerializer
    permission_classes = [AllowAny]
    authentication_classes = []


class OrderCreateView(generics.CreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [AllowAny]
    authentication_classes = [CsrfExemptSessionAuthentication]