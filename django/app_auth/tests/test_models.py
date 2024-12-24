import pytest
from app_auth.models import Usuario

@pytest.mark.django_db
def test_user_str_method():
    user = Usuario.objects.create_user(
        username="testuser",
        email="testuser@example.com",
        password="password123",
        name="Test User"
    )
    assert str(user) == "testuser@example.com"
