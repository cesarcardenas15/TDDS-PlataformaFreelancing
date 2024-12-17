from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from .models import *
from .serializers import *


# Perfiles Views
class PerfilesListCreateView(ListCreateAPIView):
    queryset = Perfiles.objects.all()
    serializer_class = PerfilesSerializer

    # Autenticacion por JWT
    permission_classes = [IsAuthenticated]


class PerfilesRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Perfiles.objects.all()
    serializer_class = PerfilesSerializer

    # Autenticacion por JWT
    permission_classes = [IsAuthenticated]


# Servicios Views
class ServiciosListCreateView(ListCreateAPIView):
    queryset = Servicios.objects.all()
    serializer_class = ServiciosSerializer


class ServiciosRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Servicios.objects.all()
    serializer_class = ServiciosSerializer


# Ordenes Views
class OrdenesListCreateView(ListCreateAPIView):
    queryset = Ordenes.objects.all()
    serializer_class = OrdenesSerializer

    # Autenticacion por JWT
    permission_classes = [IsAuthenticated]


class OrdenesRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Ordenes.objects.all()
    serializer_class = OrdenesSerializer

    # Autenticacion por JWT
    permission_classes = [IsAuthenticated]


# Disputa Views
class DisputaListCreateView(ListCreateAPIView):
    queryset = Disputa.objects.all()
    serializer_class = DisputaSerializer

    # Autenticacion por JWT
    permission_classes = [IsAuthenticated]


class DisputaRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Disputa.objects.all()
    serializer_class = DisputaSerializer

    # Autenticacion por JWT
    permission_classes = [IsAuthenticated]


# Reviews Views
class ReviewsListCreateView(ListCreateAPIView):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer


class ReviewsRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer
