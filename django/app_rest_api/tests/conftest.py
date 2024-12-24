import pytest
from decimal import Decimal
from django.urls import reverse
from rest_framework.test import APIClient
from app_auth.models import Usuario
from ..models import Perfiles, Servicios

@pytest.fixture
def api_client():
    return APIClient()

@pytest.fixture
def test_user():
    return Usuario.objects.create_user(
        email='test@example.com',
        password='testpass123',
        username='testuser'
    )

@pytest.fixture
def authenticated_client(api_client, test_user):
    api_client.force_authenticate(user=test_user)
    return api_client

@pytest.fixture
def test_perfil(test_user):
    return Perfiles.objects.create(
        rol=Perfiles.Roles.FREELANCER,
        nombre='Test User',
        telefono='1234567890',
        biografia='Test bio',
        id_usuario=test_user
    )

@pytest.fixture
def test_perfil_cliente(test_user):
    return Perfiles.objects.create(
        rol=Perfiles.Roles.CLIENTE,
        nombre='Test Cliente',
        telefono='9876543210',
        biografia='Cliente bio',
        id_usuario=test_user
    )

@pytest.fixture
def test_servicio(test_perfil):
    return Servicios.objects.create(
        titulo='Test Service',
        descripcion='Test description',
        precio=Decimal('99.99'),
        estado=Servicios.EstadoServicio.ACTIVO,
        freelancer=test_perfil
    )
