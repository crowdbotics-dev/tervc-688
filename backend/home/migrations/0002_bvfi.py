# Generated by Django 3.2.25 on 2024-09-16 07:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bvfi',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ytire', models.BigIntegerField()),
                ('bvbjd', models.BigIntegerField()),
                ('ytuei', models.BigIntegerField()),
            ],
        ),
    ]
