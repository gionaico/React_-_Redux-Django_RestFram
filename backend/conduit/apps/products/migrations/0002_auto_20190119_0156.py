# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2019-01-19 01:56
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comentario',
            old_name='author',
            new_name='saler',
        ),
    ]