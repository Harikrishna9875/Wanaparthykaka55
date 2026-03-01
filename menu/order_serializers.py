from rest_framework import serializers
from .models import Order, OrderItem, MenuItem


class OrderItemWriteSerializer(serializers.Serializer):
    menu_item = serializers.IntegerField()
    quantity = serializers.IntegerField()


class OrderItemReadSerializer(serializers.ModelSerializer):
    menu_item = serializers.StringRelatedField()

    class Meta:
        model = OrderItem
        fields = ["menu_item", "quantity"]


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemWriteSerializer(many=True, write_only=True)
    order_items = OrderItemReadSerializer(source="items", many=True, read_only=True)

    class Meta:
        model = Order
        fields = [
            "id",
            "created_at",
            "total_amount",
            "is_free_delivery",
            "payment_method",
            "items",
            "order_items",
        ]
        read_only_fields = ["total_amount", "is_free_delivery", "payment_method"]

    def create(self, validated_data):
        items_data = validated_data.pop("items")

        order = Order.objects.create(
            total_amount=0,
            is_free_delivery=False,
            payment_method="COD"
        )

        total = 0

        for item in items_data:
            menu_item = MenuItem.objects.get(id=item["menu_item"])
            quantity = item["quantity"]

            total += float(menu_item.price) * quantity

            OrderItem.objects.create(
                order=order,
                menu_item=menu_item,
                quantity=quantity
            )

        order.total_amount = total
        order.is_free_delivery = total >= 200
        order.save()

        return order