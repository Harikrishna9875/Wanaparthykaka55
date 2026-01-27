from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import MenuItem
from .serializers import MenuItemSerializer

@api_view(["GET"])
def menu_list(request):
    items = MenuItem.objects.filter(is_available=True)
    serializer = MenuItemSerializer(
        items, many=True, context={"request": request}
    )
    return Response(serializer.data)
