import pytest
from decimal import Decimal
from rest_framework import status
from django.urls import reverse
from app_rest_api.models import Perfiles, Servicios

@pytest.mark.django_db
class TestPerfilesViews:
    def test_list_perfiles(self, authenticated_client, test_perfil):
        url = reverse('perfiles-list')
        response = authenticated_client.get(url)
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data) == 1
        assert response.data[0]['nombre'] == test_perfil.nombre

    def test_create_perfil(self, authenticated_client, test_user):
        url = reverse('perfiles-list')
        data = {
            'rol': Perfiles.Roles.CLIENTE,
            'nombre': 'New Test User',
            'telefono': '1234567890',
            'biografia': 'New test bio',
            'id_usuario': test_user.id
        }
        response = authenticated_client.post(url, data)
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['nombre'] == 'New Test User'

    def test_retrieve_perfil(self, authenticated_client, test_perfil):
        url = reverse('perfiles-detail', kwargs={'pk': test_perfil.id})
        response = authenticated_client.get(url)
        assert response.status_code == status.HTTP_200_OK
        assert response.data['nombre'] == test_perfil.nombre

    def test_update_perfil(self, authenticated_client, test_perfil):
        url = reverse('perfiles-detail', kwargs={'pk': test_perfil.id})
        data = {
            'rol': test_perfil.rol,
            'nombre': 'Updated Name',
            'telefono': test_perfil.telefono,
            'biografia': test_perfil.biografia,
            'id_usuario': test_perfil.id_usuario.id
        }
        response = authenticated_client.put(url, data)
        assert response.status_code == status.HTTP_200_OK
        assert response.data['nombre'] == 'Updated Name'


@pytest.mark.django_db
class TestServiciosViews:
    def test_list_servicios(self, authenticated_client, test_servicio):
        url = reverse('servicios-list')
        response = authenticated_client.get(url)
        assert response.status_code == status.HTTP_200_OK
        assert len(response.data) == 1
        assert response.data[0]['titulo'] == test_servicio.titulo

    def test_create_servicio(self, authenticated_client, test_perfil):
        url = reverse('servicios-list')
        data = {
            'titulo': 'New Test Service',
            'descripcion': 'New test description',
            'precio': '199.99',
            'estado': Servicios.EstadoServicio.ACTIVO,
            'freelancer': test_perfil.id
        }
        response = authenticated_client.post(url, data)
        assert response.status_code == status.HTTP_201_CREATED
        assert response.data['titulo'] == 'New Test Service'

    def test_retrieve_servicio(self, authenticated_client, test_servicio):
        url = reverse('servicios-detail', kwargs={'pk': test_servicio.id})
        response = authenticated_client.get(url)
        assert response.status_code == status.HTTP_200_OK
        assert response.data['titulo'] == test_servicio.titulo

    def test_update_servicio(self, authenticated_client, test_servicio):
        url = reverse('servicios-detail', kwargs={'pk': test_servicio.id})
        data = {
            'titulo': 'Updated Service',
            'descripcion': test_servicio.descripcion,
            'precio': '299.99',
            'estado': test_servicio.estado,
            'freelancer': test_servicio.freelancer.id
        }
        response = authenticated_client.put(url, data)
        assert response.status_code == status.HTTP_200_OK
        assert response.data['titulo'] == 'Updated Service'
        assert Decimal(response.data['precio']) == Decimal('299.99')
