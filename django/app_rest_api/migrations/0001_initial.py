# Generated by Django 5.1.3 on 2024-12-04 02:16

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Perfiles',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rol', models.CharField(choices=[('cliente', 'Cliente'), ('freelancer', 'Freelancer'), ('admin', 'Admin')], max_length=20)),
                ('nombre', models.CharField(max_length=255)),
                ('telefono', models.CharField(max_length=15)),
                ('biografia', models.TextField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Usuarios',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_usuario', models.CharField(max_length=150)),
                ('email', models.CharField(max_length=255)),
                ('password_hash', models.CharField(max_length=255)),
                ('fecha_registro', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Ordenes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('estado', models.CharField(choices=[('completada', 'Completada'), ('cancelada', 'Cancelada'), ('pendiente', 'Pendiente')], max_length=20)),
                ('fecha_creacion', models.DateTimeField(auto_now_add=True)),
                ('fecha_termino', models.DateTimeField(blank=True, null=True)),
                ('id_cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orden', to='app_rest_api.perfiles')),
                ('id_freelancer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orden_freelancer', to='app_rest_api.perfiles')),
            ],
        ),
        migrations.CreateModel(
            name='Disputa',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('estado', models.CharField(choices=[('abierta', 'Abierta'), ('resuelta', 'Resuelta')], max_length=10)),
                ('descripcion', models.TextField()),
                ('resolucion', models.TextField(blank=True, null=True)),
                ('id_orden', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='disputa', to='app_rest_api.ordenes')),
                ('id_admin', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='disputa_resuelta', to='app_rest_api.perfiles')),
            ],
        ),
        migrations.CreateModel(
            name='Reviews',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rating', models.IntegerField()),
                ('comentario', models.TextField(blank=True, null=True)),
                ('fecha_creacion', models.DateTimeField(auto_now_add=True)),
                ('cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='crea_review', to='app_rest_api.perfiles')),
                ('freelancer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='recibe_review', to='app_rest_api.perfiles')),
                ('orden', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='review', to='app_rest_api.ordenes')),
            ],
        ),
        migrations.CreateModel(
            name='Servicios',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('titulo', models.CharField(max_length=255)),
                ('descripcion', models.TextField()),
                ('precio', models.DecimalField(decimal_places=2, max_digits=10)),
                ('fecha_creacion', models.DateTimeField(auto_now_add=True)),
                ('estado', models.CharField(choices=[(1, 'Activo'), (0, 'Inactivo')], max_length=15)),
                ('freelancer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='servicios', to='app_rest_api.perfiles')),
            ],
        ),
        migrations.AddField(
            model_name='ordenes',
            name='id_servicio',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='orden', to='app_rest_api.servicios'),
        ),
        migrations.AddField(
            model_name='perfiles',
            name='user_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='perfiles', to='app_rest_api.usuarios'),
        ),
    ]