from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('app_rest_api.urls')),
    path('auth/', include('app_auth.urls')),
]
