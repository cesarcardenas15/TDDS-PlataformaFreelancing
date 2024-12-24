import pytest
from decimal import Decimal
from app_rest_api.models import Perfiles, Servicios
from app_rest_api.serializers import PerfilesSerializer, ServiciosSerializer

@pytest.mark.django_db
class TestPerfilesSerializer:
    def test_serialize_perfil(self, test_perfil):
        serializer = PerfilesSerializer(test_perfil)
        assert serializer.data['nombre'] == 'Test User'
        assert serializer.data['rol'] == Perfiles.Roles.FREELANCER
        assert 'id' in serializer.data
        assert serializer.data['telefono'] == '1234567890'

    def test_deserialize_perfil(self, test_user):
        data = {
            'rol': Perfiles.Roles.CLIENTE,
            'nombre': 'New User',
            'telefono': '1234567890',
            'biografia': 'New bio',
            'id_usuario': test_user.id
        }
        serializer = PerfilesSerializer(data=data)
        assert serializer.is_valid()
        perfil = serializer.save()
        assert perfil.nombre == 'New User'
        assert perfil.rol == Perfiles.Roles.CLIENTE

    def test_invalid_perfil_data(self, test_user):
        invalid_data = {
            'rol': 'invalid_rol',
            'nombre': 'Test User',
            'telefono': '1234567890',
            'id_usuario': test_user.id
        }
        serializer = PerfilesSerializer(data=invalid_data)
        assert not serializer.is_valid()
        assert 'rol' in serializer.errors


@pytest.mark.django_db
class TestServiciosSerializer:
    def test_serialize_servicio(self, test_servicio):
        serializer = ServiciosSerializer(test_servicio)
        assert serializer.data['titulo'] == 'Test Service'
        assert Decimal(serializer.data['precio']) == Decimal('99.99')
        assert 'id' in serializer.data

    def test_deserialize_servicio(self, test_perfil):
        data = {
            'titulo': 'New Service',
            'descripcion': 'New description',
            'precio': '149.99',
            'estado': Servicios.EstadoServicio.ACTIVO,
            'freelancer': test_perfil.id
        }
        serializer = ServiciosSerializer(data=data)
        assert serializer.is_valid()
        servicio = serializer.save()
        assert servicio.titulo == 'New Service'
        assert servicio.precio == Decimal('149.99')

    def test_invalid_servicio_data(self, test_perfil):
        invalid_data = {
            'titulo': '',  # Empty title should be invalid
            'descripcion': 'Test description',
            'precio': 'invalid_price',
            'estado': '3',  # Invalid estado
            'freelancer': test_perfil.id
        }
        serializer = ServiciosSerializer(data=invalid_data)
        assert not serializer.is_valid()
        assert 'titulo' in serializer.errors
        assert 'precio' in serializer.errors
        assert 'estado' in serializer.errors
