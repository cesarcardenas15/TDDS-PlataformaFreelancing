import pytest
from decimal import Decimal
from app_rest_api.models import Perfiles, Servicios

@pytest.mark.django_db
class TestPerfilesModel:
    def test_create_perfil(self, test_user):
        perfil = Perfiles.objects.create(
            rol=Perfiles.Roles.FREELANCER,
            nombre='Test User',
            telefono='1234567890',
            biografia='Test bio',
            id_usuario=test_user
        )
        assert perfil.nombre == 'Test User'
        assert perfil.rol == Perfiles.Roles.FREELANCER
        assert str(perfil) == 'Test User (Freelancer)'

    def test_perfil_roles(self, test_user):
        # Test CLIENTE role
        perfil_cliente = Perfiles.objects.create(
            rol=Perfiles.Roles.CLIENTE,
            nombre='Test Cliente',
            telefono='1234567890',
            id_usuario=test_user
        )
        assert perfil_cliente.rol == 'cliente'
        
        # Test ADMIN role
        perfil_admin = Perfiles.objects.create(
            rol=Perfiles.Roles.ADMIN,
            nombre='Test Admin',
            telefono='0987654321',
            id_usuario=test_user
        )
        assert perfil_admin.rol == 'admin'

    def test_perfil_str_representation(self, test_perfil):
        assert str(test_perfil) == f"{test_perfil.nombre} (Freelancer)"


@pytest.mark.django_db
class TestServiciosModel:
    def test_create_servicio(self, test_perfil):
        servicio = Servicios.objects.create(
            titulo='Test Service',
            descripcion='Test description',
            precio=Decimal('99.99'),
            estado=Servicios.EstadoServicio.ACTIVO,
            freelancer=test_perfil
        )
        assert servicio.titulo == 'Test Service'
        assert servicio.precio == Decimal('99.99')
        assert str(servicio) == 'Test Service'

    def test_servicio_estados(self, test_perfil):
        servicio_activo = Servicios.objects.create(
            titulo='Servicio Activo',
            descripcion='Test',
            precio=Decimal('99.99'),
            estado=Servicios.EstadoServicio.ACTIVO,
            freelancer=test_perfil
        )
        assert servicio_activo.estado == 1
        
        servicio_inactivo = Servicios.objects.create(
            titulo='Servicio Inactivo',
            descripcion='Test',
            precio=Decimal('99.99'),
            estado=Servicios.EstadoServicio.INACTIVO,
            freelancer=test_perfil
        )
        assert servicio_inactivo.estado == 0

    def test_servicio_str_representation(self, test_servicio):
        assert str(test_servicio) == test_servicio.titulo
