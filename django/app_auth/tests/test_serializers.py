import pytest
from app_auth.serializers import UsuarioSerializer

@pytest.mark.django_db
def test_serializer_valid_data():
    data = {
        "username": "testuser",
        "password": "password123",
        "email": "testuser@example.com",
        "name": "Test User"
    }
    serializer = UsuarioSerializer(data=data)
    assert serializer.is_valid()
    user = serializer.save()
    assert user.email == data["email"]
    assert user.check_password(data["password"])
