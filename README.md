# Chat Backend API

Backend desarrollado con Node.js, Express y PostgreSQL para la gestión de usuarios con autenticación mediante JWT.

## Tecnologías utilizadas

- Node.js
- Express
- PostgreSQL
- bcrypt
- JSON Web Token (JWT)
- CORS

---

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd chat-backend

Instalar dependencias:
npm install

Configuración de la base de datos
Crear base de datos en PostgreSQL:

CREATE DATABASE chatdb;

Ejecutar el script SQL (database.sql):

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password TEXT
);

Configuración del proyecto

Editar el archivo db.js con tus datos:

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "chatdb",
  password: "aqui la contraseña de Postgresql",
  port: 5432,
});

Ejecutar el servidor
node index.js

Servidor disponible en:
http://localhost:3000

ENDPOINTS
Registro

POST /api/auth/register

Body:

{
  "nombre": "string",
  "email": "string",
  "password": "string"
}
Login

POST /api/auth/login

Body:

{
  "email": "string",
  "password": "string"
}

Respuesta:

{
  "token": "JWT_TOKEN (suelen ser varios simbolos y es largo)"      
}

Perfil (protegido)

GET /api/auth/perfil

Header:

Authorization: TOKEN del login sin ("")

PRUEBAS

Usar Postman para probar los endpoints:

Registro de usuario
Login
Acceso a ruta protegida con token

