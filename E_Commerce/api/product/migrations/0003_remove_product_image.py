# Generated by Django 5.0.1 on 2024-03-13 10:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_product_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='image',
        ),
    ]
