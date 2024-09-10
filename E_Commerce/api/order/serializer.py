from rest_framework import serializers

from .models import Order


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('user','transaction_id','product_names','total_products','total_amount','updated_at')