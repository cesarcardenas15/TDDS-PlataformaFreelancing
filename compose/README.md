# Despliegue con Docker

Se presentan instrucciones para el despliegue de este proyecto dentro de un contenedor.

## Servicios de Compose

### django-gunicorn

Contenedor basado en la imagen de Python `python:3.13.1-bookworm` desde Docker Hub, este servicio se encarga de correr el proyecto `django` y un servidor web `gunicorn`. Este servicio expone un puerto 8000 solo dentro de la red de este proyecto `compose`.

El archivo Dockerfile de este servicio corresponde al que se encuentra en la raíz de este directorio `compose`.

### nginx

Contenedor de `nginx` desde Docker Hub que es usado como proxy y servidor web para reenviar el trafico del servidor `gunicorn` del servicio `django-gunicorn` por el puerto **8000**.

Este servicio también se encarga de servir el Front-End React del proyecto en el puerto **8080**

Las configuraciones del proxy y del servidor web se encuentran en `nginx/default.conf` y el archivo Dockerfile de este servicio en `nginx/Dockerfile`.

## Requisitos

Motor de contenedores, como `docker` o `podman`.

## Despliegue

```
cd frontend
npm run build
cd ../compose
docker compose up -d
```

Se entra en la carpeta `frontend` para crear una versión de producción del Front-End.

Una vez que haya una versión de producción de Front-End, volvemos a la raíz del proyecto y nos dirigimos a la carpeta `compose`, donde ejecutamos `docker compose` para hacer el despliegue.

El despliegue inicial tomará más tiempo que los demás al tener que preparar más archivos.
