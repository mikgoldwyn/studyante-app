# Generated by Django 2.2.7 on 2019-11-19 09:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Requirement',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
                ('subject', models.CharField(choices=[('math', 'Math'), ('filipino', 'filipino'), ('english', 'english'), ('science', 'science'), ('ap', 'ap'), ('tle', 'tle'), ('ce', 'ce'), ('computer', 'computer'), ('mapeh', 'mapeh')], max_length=32)),
                ('status', models.CharField(choices=[('pending', 'Pending'), ('completed', 'Completed')], max_length=32)),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='requirements', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
