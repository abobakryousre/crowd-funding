# Generated by Django 3.1.7 on 2021-04-04 23:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20210404_2330'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_picutre',
            field=models.ImageField(blank=True, default='users_images/1.png', null=True, upload_to='users_images/'),
        ),
    ]