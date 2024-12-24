import pytest
from django.urls import reverse
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken

@pytest.mark.django_db
def test_register_user(api_client):
    url = reverse('register')  # Update with actual URL name
    data = {
        "username": "testuser",
        "password": "password123",
        "email": "testuser@example.com"
    }
    response = api_client.post(url, data)
    assert response.status_code == status.HTTP_201_CREATED
    assert response.data['email'] == data['email']
    assert 'password' not in response.data


@pytest.mark.django_db
def test_login_user(api_client, user):
    url = reverse('login')  # Update with actual URL name
    data = {"email": user.email, "password": "password123"}
    response = api_client.post(url, data)
    assert response.status_code == status.HTTP_200_OK
    assert 'access' in response.data
    assert 'refresh' in response.data


@pytest.mark.django_db
def test_invalid_login(api_client):
    url = reverse('login')
    data = {"email": "wronguser@example.com", "password": "wrongpassword"}
    response = api_client.post(url, data)
    assert response.status_code == status.HTTP_401_UNAUTHORIZED
    assert 'error' in response.data



@pytest.mark.django_db
def test_logout_user(api_client, user):
    refresh = RefreshToken.for_user(user)
    api_client.force_authenticate(user=user)

    url = reverse('logout')  # Update with actual URL name
    data = {"refresh": str(refresh)}
    response = api_client.post(url, data)
    assert response.status_code == status.HTTP_205_RESET_CONTENT
    assert response.data["message"] == "Logged out successfully"
