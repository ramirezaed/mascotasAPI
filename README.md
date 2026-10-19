# 🐾 API de Protección y Ayuda Animal

API REST desarrollada para facilitar la difusión de información sobre mascotas perdidas y encontradas, campañas de salud animal y alojamientos temporales para animales rescatados.

El proyecto permite que cualquier persona publique información sin necesidad de registrarse, promoviendo la colaboración comunitaria y ayudando a conectar a quienes necesitan asistencia con quienes pueden ofrecerla.

## 🚀 Tecnologías

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- Supabase
- dotenv

## ⚙️ Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar las variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
PORT=5000
HOST=localhost

DATABASE_URL="tu_url_de_conexion_postgresql"
SUPABASE_URL="tu_url_de_supabase"
SUPABASE_SERVICE_ROLE_KEY="tu_clave_de_servicio"
```

Reemplazar los valores de ejemplo por las credenciales correspondientes. No compartir ni subir el archivo `.env` al repositorio.

### 4. Ejecutar el proyecto

```bash
npm run server
```

La API utiliza el puerto `5000` por defecto, configurable mediante la variable de entorno `PORT`.

## ✨ Funcionalidades principales

### 🐶 Reportes de mascotas

- Publicación de reportes de mascotas perdidas.
- Publicación de reportes de mascotas encontradas.
- Consulta y filtrado de publicaciones según el estado de la mascota.
- Publicación de información sin necesidad de crear una cuenta.

### 🩺 Campañas veterinarias

Sección destinada a difundir campañas relacionadas con la salud y el bienestar animal, facilitando el acceso a información de interés para la comunidad.

### 🏠 Alojamientos temporales

Sección para publicar y consultar opciones de alojamiento temporal destinadas a mascotas rescatadas, promoviendo la colaboración en situaciones que requieren refugio transitorio.

## 🏗️ Base de datos

El proyecto utiliza **PostgreSQL** como sistema de gestión de bases de datos y **Prisma ORM** para interactuar con los datos desde Node.js.

Además, integra Supabase como servicio de infraestructura de datos.

## 🎯 Objetivo del proyecto

Desarrollar una herramienta que facilite la colaboración comunitaria en la protección animal, centralizando reportes de mascotas, campañas veterinarias y opciones de alojamiento temporal en una única API.
