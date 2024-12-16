from django.urls import path
from .views import *

urlpatterns = [
    path('perfiles', PerfilesListCreateView.as_view(), name='perfiles-list-create'),
    path('perfiles/<int:pk>', PerfilesRetrieveUpdateDestroyView.as_view(), name='perfiles-detail'),
    path('servicios', ServiciosListCreateView.as_view(), name='servicios-list-create'),
    path('servicios/<int:pk>', ServiciosRetrieveUpdateDestroyView.as_view(), name='servicios-detail'),
    path('ordenes', OrdenesListCreateView.as_view(), name='ordenes-list-create'),
    path('ordenes/<int:pk>', OrdenesRetrieveUpdateDestroyView.as_view(), name='ordenes-detail'),
    path('disputas', DisputaListCreateView.as_view(), name='disputas-list-create'),
    path('disputas/<int:pk>', DisputaRetrieveUpdateDestroyView.as_view(), name='disputas-detail'),
    path('reviews', ReviewsListCreateView.as_view(), name='reviews-list-create'),
    path('reviews/<int:pk>', ReviewsRetrieveUpdateDestroyView.as_view(), name='reviews-detail'),
]
