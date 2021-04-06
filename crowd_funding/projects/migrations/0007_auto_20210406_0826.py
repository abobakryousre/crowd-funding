# Generated by Django 3.1.7 on 2021-04-06 08:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20210331_1851'),
        ('projects', '0006_auto_20210406_0149'),
    ]

    operations = [
        migrations.AddField(
            model_name='rating',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='users.user'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='rating',
            name='project',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='projects.projects'),
        ),
    ]