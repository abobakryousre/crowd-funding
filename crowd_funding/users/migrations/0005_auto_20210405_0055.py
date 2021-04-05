# Generated by Django 3.1.7 on 2021-04-05 00:55

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_auto_20210404_2355'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='phone_number',
            field=models.CharField(blank=True, max_length=16, null=True, validators=[django.core.validators.RegexValidator(message='Phone number must be entered in the egyption format', regex='(01)[0-9]{9}$')]),
        ),
    ]