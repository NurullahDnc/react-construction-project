# Generated by Django 4.2.9 on 2024-02-11 18:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sayfalar', '0007_rename_kategoriler_categories_cars_home_categori'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cars',
            name='home_categori',
        ),
        migrations.AlterField(
            model_name='cars',
            name='slug',
            field=models.SlugField(blank=True, default='', unique=True),
        ),
        migrations.AlterField(
            model_name='categories',
            name='slug',
            field=models.CharField(db_index=True, default='', max_length=50, unique=True),
        ),
        migrations.AddField(
            model_name='cars',
            name='Home_Categori',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='kurslar', to='sayfalar.categories'),
        ),
    ]
