Desarrollo prueba técnica para la empresa Propulsa LLC
Este proyecto consiste en una aplicación web desarrollada con Django para el backend y Angular para el frontend.

Especificaciones del Proyecto
Backend
El backend ha sido implementado utilizando Django, Django-Rest-Framework. La estructura del proyecto incluye un modelo Task con sus respectivos serializers, vistas y también se incluye en el modulo administrador. Además, se han incluido pruebas unitarias para validar el funcionamiento del modelo y los serializers.

Estructura del Proyecto
Proyecto Django: to_do
Aplicación: tasks
Modelos: Define el modelo Task con campos name, description y priority.
Serializers: Incluye TaskSerializer para la serialización y deserialización de datos.
Vistas: Implementa vistas para las operaciones CRUD utilizando Django REST Framework.
Pruebas Unitarias: Se han creado pruebas unitarias para el modelo y los serializers.

Para ejecutar el backend, usa los siguientes comandos:

bash
Copiar código
python manage.py runserver

Ejecución de Pruebas
Para ejecutar las pruebas unitarias, usa el siguiente comando:

bash
Copiar código
python manage.py test

Frontend
El frontend ha sido desarrollado con Angular, asegurando que la interfaz sea intuitiva y amigable para el usuario. Se ha utilizado Bootstrap para el CSS.

Estructura del Proyecto
Proyecto Angular: to_do_frontend
Componentes: Se han creado componentes para listar, crear, editar y eliminar tareas.
Servicios: Implementa servicios para interactuar con el API de Django.
Estilos: Utiliza Bootstrap para la maquetación y estilos de la interfaz de usuario.
Ejecución del Proyecto
Para ejecutar el frontend, usa los siguientes comandos:

bash
Copiar código
ng serve
Esto levantará el servidor de desarrollo en http://localhost:4200/.
