from django.urls import path
from .views import menu_list
from .owner_views import owner_login

urlpatterns = [
    path("menu/", menu_list),
    path("owner/login/", owner_login),
]
