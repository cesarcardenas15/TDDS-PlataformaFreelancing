from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from .models import *
from .serializers import *


# Perfiles Views
class PerfilesListCreateView(ListCreateAPIView):
    # Autenticacon por JWT
    permission_classes = [IsAuthenticated]

    queryset = Perfiles.objects.all()
    serializer_class = PerfilesSerializer


class PerfilesRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    # Autenticacon por JWT
    permission_classes = [IsAuthenticated]

    queryset = Perfiles.objects.all()
    serializer_class = PerfilesSerializer


# Servicios Views
class ServiciosListCreateView(ListCreateAPIView):
    queryset = Servicios.objects.all()
    serializer_class = ServiciosSerializer


class ServiciosRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Servicios.objects.all()
    serializer_class = ServiciosSerializer


# Ordenes Views
class OrdenesListCreateView(ListCreateAPIView):
    # Autenticacon por JWT
    permission_classes = [IsAuthenticated]

    queryset = Ordenes.objects.all()
    serializer_class = OrdenesSerializer


class OrdenesRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    # Autenticacon por JWT
    permission_classes = [IsAuthenticated]

    queryset = Ordenes.objects.all()
    serializer_class = OrdenesSerializer


# Disputa Views
class DisputaListCreateView(ListCreateAPIView):
    # Autenticacon por JWT
    permission_classes = [IsAuthenticated]

    queryset = Disputa.objects.all()
    serializer_class = DisputaSerializer


class DisputaRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    # Autenticacon por JWT
    permission_classes = [IsAuthenticated]

    queryset = Disputa.objects.all()
    serializer_class = DisputaSerializer


# Reviews Views
class ReviewsListCreateView(ListCreateAPIView):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer


class ReviewsRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Reviews.objects.all()
    serializer_class = ReviewsSerializer
