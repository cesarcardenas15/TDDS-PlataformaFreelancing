from django.db import models

from app_auth.models import Usuario

class Perfiles(models.Model):
    class Roles(models.TextChoices):
        CLIENTE = 'cliente', 'Cliente'
        FREELANCER = 'freelancer', 'Freelancer'
        ADMIN = 'admin', 'Admin'
    
    rol = models.CharField(max_length=20, choices=Roles.choices)
    nombre = models.CharField(max_length=255)
    telefono = models.CharField(max_length=15)
    biografia = models.TextField(blank=True, null=True)
    id_usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='perfiles')

    def __str__(self):
        return f"{self.nombre} ({self.get_rol_display()})"


class Servicios(models.Model):
    class EstadoServicio(models.IntegerChoices):
        ACTIVO = 1, 'Activo'
        INACTIVO = 0, 'Inactivo'

    titulo = models.CharField(max_length=255)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    estado = models.CharField(max_length=15, choices=EstadoServicio.choices)
    freelancer = models.ForeignKey(Perfiles, on_delete=models.CASCADE, related_name='servicios')

    def __str__(self):
        return self.titulo


class Ordenes(models.Model):
    class EstadoOrden(models.TextChoices):
        COMPLETADA = 'completada', 'Completada'
        CANCELADA = 'cancelada', 'Cancelada'
        PENDIENTE = 'pendiente', 'Pendiente'

    estado = models.CharField(max_length=20, choices=EstadoOrden.choices)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_termino = models.DateTimeField(blank=True, null=True)
    id_cliente = models.ForeignKey(Perfiles, on_delete=models.CASCADE, related_name='orden')
    id_servicio = models.ForeignKey(Servicios, on_delete=models.CASCADE, related_name='orden')
    id_freelancer = models.ForeignKey(Perfiles, on_delete=models.CASCADE, related_name='orden_freelancer')

    def __str__(self):
        return f"Orden: {self.id} - {self.get_estado_display()}"


class Disputa(models.Model):
    class EstadoDisputa(models.TextChoices):
        ABIERTA = 'abierta', 'Abierta'
        RESUELTA = 'resuelta', 'Resuelta'

    estado = models.CharField(max_length=10, choices=EstadoDisputa.choices)
    descripcion = models.TextField()
    resolucion = models.TextField(blank=True, null=True)
    id_orden = models.ForeignKey(Ordenes, on_delete=models.CASCADE, related_name='disputa')
    id_admin = models.ForeignKey(Perfiles, on_delete=models.CASCADE, related_name='disputa_resuelta')

    def __str__(self):
        return f"Disputa: {self.id} - {self.get_estado_display()}"

class Reviews(models.Model):
    class Calificacion(models.IntegerChoices):
        PESIMO = 1, 'Pesimo'
        MALO = 2, 'Mala'
        REGULAR = 3, 'Regular'
        BUENO = 4, 'Bueno'
        EXCELENTE = 5, 'Excelente'

    rating = models.IntegerField()
    comentario = models.TextField(blank=True, null=True)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    orden = models.OneToOneField(Ordenes, on_delete=models.CASCADE, related_name='review')
    cliente = models.ForeignKey(Perfiles, on_delete=models.CASCADE, related_name='crea_review')
    freelancer = models.ForeignKey(Perfiles, on_delete=models.CASCADE, related_name='recibe_review')

    def __str__(self):
        return f"Review: {self.id} - Calificacion: {self.rating} stars"


