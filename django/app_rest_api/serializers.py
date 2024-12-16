from rest_framework import serializers
from .models import Perfiles, Servicios, Ordenes, Disputa, Reviews
from app_auth.models import Usuario


# Serializer for Perfiles
class PerfilesSerializer(serializers.ModelSerializer):
    id_usuario = serializers.PrimaryKeyRelatedField(queryset=Usuario.objects.all())

    class Meta:
        model = Perfiles
        fields = ['id', 'rol', 'nombre', 'telefono', 'biografia', 'id_usuario']

# Serializer for Servicios
class ServiciosSerializer(serializers.ModelSerializer):
    freelancer = serializers.PrimaryKeyRelatedField(queryset=Perfiles.objects.all())

    class Meta:
        model = Servicios
        fields = ['id', 'titulo', 'descripcion', 'precio', 'fecha_creacion', 'estado', 'freelancer']

# Serializer for Ordenes
class OrdenesSerializer(serializers.ModelSerializer):
    id_cliente = serializers.PrimaryKeyRelatedField(queryset=Perfiles.objects.all())
    id_servicio = serializers.PrimaryKeyRelatedField(queryset=Servicios.objects.all())
    id_freelancer = serializers.PrimaryKeyRelatedField(queryset=Perfiles.objects.all())

    class Meta:
        model = Ordenes
        fields = [
            'id', 'estado', 'fecha_creacion', 'fecha_termino',
            'id_cliente', 'id_servicio', 'id_freelancer'
        ]

# Serializer for Disputa
class DisputaSerializer(serializers.ModelSerializer):
    id_orden = serializers.PrimaryKeyRelatedField(queryset=Ordenes.objects.all())
    id_admin = serializers.PrimaryKeyRelatedField(queryset=Perfiles.objects.all())

    class Meta:
        model = Disputa
        fields = ['id', 'estado', 'descripcion', 'resolucion', 'id_orden', 'id_admin']

# Serializer for Reviews
class ReviewsSerializer(serializers.ModelSerializer):
    id_orden = serializers.PrimaryKeyRelatedField(queryset=Ordenes.objects.all())
    id_cliente = serializers.PrimaryKeyRelatedField(queryset=Perfiles.objects.all())
    id_freelancer = serializers.PrimaryKeyRelatedField(queryset=Perfiles.objects.all())

    class Meta:
        model = Reviews
        fields = ['id', 'rating', 'comentario', 'fecha_creacion', 'id_orden', 'id_cliente', 'id_freelancer']
