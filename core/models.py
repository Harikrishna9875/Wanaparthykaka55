from django.db import models
from django.contrib.auth.models import User

class Restaurant(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=15)
    address = models.TextField()
    is_open = models.BooleanField(default=True)
    delivery_radius_km = models.FloatField(default=5.0)
    logo = models.ImageField(upload_to='logos/', blank=True)
    
    def __str__(self):
        return self.name

class MenuCategory(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)  # Biryani, Starters, Drinks
    
    def __str__(self):
        return f"{self.restaurant.name} - {self.name}"

class MenuItem(models.Model):
    category = models.ForeignKey(MenuCategory, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    is_available = models.BooleanField(default=True)
    is_veg = models.BooleanField(default=False)
    image = models.ImageField(upload_to='menu/', blank=True)
    
    def __str__(self):
        return f"{self.name} - ₹{self.price}"
