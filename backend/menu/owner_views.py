from django.contrib.auth import authenticate, login
from django.contrib.auth.models import Group
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(["POST"])
def owner_login(request):
    username = request.data.get("username")
    password = request.data.get("password")

    if not username or not password:
        return Response(
            {"error": "Username and password required"},
            status=status.HTTP_400_BAD_REQUEST,
        )

    user = authenticate(username=username, password=password)

    if user is None:
        return Response(
            {"error": "Invalid credentials"},
            status=status.HTTP_401_UNAUTHORIZED,
        )

    # Check OWNER group
    if not user.groups.filter(name="OWNER").exists():
        return Response(
            {"error": "Not authorized as owner"},
            status=status.HTTP_403_FORBIDDEN,
        )

    login(request, user)  # creates session
    return Response(
        {"message": "Owner login successful"},
        status=status.HTTP_200_OK,
    )
