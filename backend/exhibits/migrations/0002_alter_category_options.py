# Generated by Django 3.2.8 on 2022-05-14 17:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('exhibits', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'verbose_name': 'Категория', 'verbose_name_plural': 'Категории'},
        ),
    ]