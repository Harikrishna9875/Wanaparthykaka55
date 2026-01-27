from django.db import models

class MenuItem(models.Model):
    SIZE_CHOICES = [
        ("HALF", "Half"),
        ("FULL", "Full"),
        ("REGULAR", "Regular"),
        ("LARGE", "Large"),
    ]

    name = models.CharField(max_length=150)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    size = models.CharField(max_length=20, choices=SIZE_CHOICES)
    image = models.ImageField(upload_to="menu/")
    is_available = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.size})"
