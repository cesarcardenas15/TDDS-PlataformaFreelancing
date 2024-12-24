import pytest
from rest_framework.test import APIClient
from app_auth.models import Usuario

@pytest.fixture
def api_client():
    return APIClient()

@pytest.fixture
def user():
    return Usuario.objects.create_user(
        username="testuser",
        email="testuser@example.com",
        password="password123",
        name="Test User"
    )
