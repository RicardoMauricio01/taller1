# Taller 1

Monorepo que contiene el backend y frontend de una aplicación de chat.

## Estructura

- `backend/` - API REST en Node.js/Express con PostgreSQL
- `frontend/` - Aplicación en Angular
- `postman/` - Colecciones y entornos de Postman para pruebas de la API

## Requisitos

- Node.js 20.6+
- Angular CLI 14.2.7
- PostgreSQL

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd taller1
```

2. Instalar dependencias:
```bash
# Frontend
cd frontend
npm install

# Backend
cd backend
npm install
```

---

# Backend

API desarrollada con Node.js, Express y PostgreSQL para la gestión de usuarios con autenticación mediante JWT.

## Tecnologías

- Node.js
- Express
- PostgreSQL
- bcrypt
- JSON Web Token (JWT)
- CORS

## Estructura
```
backend/
├── src/
│   ├── config/       # Configuración (DB, entorno)
│   ├── middleware/   # Auth y otros middlewares
│   └── routes/       # Rutas de la API
├── index.js          # Punto de entrada
└── package.json
```

## Configuración de la base de datos

1. Crear la base de datos en PostgreSQL:
```sql
CREATE DATABASE chatdb;
```

2. Ejecutar el script del esquema:
```sql
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password TEXT
);
```

3. Editar `backend/src/config/db.js` con tus credenciales:
```js
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "chatdb",
  password: "tu_contraseña",
  port: 5432,
});
```

## Ejecutar el servidor
```bash
node index.js
```

Servidor disponible en `http://localhost:3000`.

## Endpoints

### Registro

`POST /api/auth/register`
```json
{
  "nombre": "string",
  "email": "string",
  "password": "string"
}
```

### Login

`POST /api/auth/login`
```json
{
  "email": "string",
  "password": "string"
}
```

Respuesta:
```json
{
  "token": "string"
}
```

### Perfil (protegido)

`GET /api/auth/perfil`

Header requerido:
```
Authorization: <token>
```

## Pruebas con Postman

Las colecciones están disponibles en la carpeta `postman/`.

1. Registro de usuario
2. Login
3. Acceso a ruta protegida con token

---

# Frontend (Angular)

Generado con [Angular CLI](https://github.com/angular/angular-cli) version 14.2.7.

## Servidor de desarrollo

Ejecuta `ng serve` para iniciar el servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si modificas algún archivo fuente.

## Generar componentes
```bash
ng generate component nombre-componente
ng generate directive|pipe|service|class|guard|interface|enum|module
```

## Build
```bash
ng build
```

Los archivos generados se guardan en `frontend/dist/`.

## Pruebas unitarias

Ejecuta `ng test` para correr las pruebas unitarias usando [Karma](https://karma-runner.github.io).

## Pruebas end-to-end

Ejecuta `ng e2e` para correr las pruebas e2e con la plataforma de tu elección. Necesitas primero agregar un paquete que implemente las capacidades de testing e2e.

---

## Más ayuda

- [Angular CLI Overview and Command Reference](https://angular.io/cli)
- [Node.js](https://nodejs.org)