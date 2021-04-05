# Generated by Django 3.1.7 on 2021-04-04 23:30

from django.db import migrations
import django_countries.fields


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20210404_2324'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='country',
            field=django_countries.fields.CountryField(blank=True, max_length=2, null=True),
        ),
    ]