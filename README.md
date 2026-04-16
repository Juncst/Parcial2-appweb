# Parcial 2 - Aplicaciones Web

Proyecto full stack desarrollado para el curso de Aplicaciones Web.  

La aplicación permite autenticación de usuarios, gestión de perfiles y conexión completa entre frontend, backend y base de datos PostgreSQL.

---

## Tecnologías utilizadas

Frontend:
- Angular 17
- TypeScript
- CSS

Backend:
- Node.js
- Express
- PostgreSQL
- pg
- cors
- nodemon

---

## Estructura del proyecto

```text
Parcial2-appweb/
├── frontend/
├── backend/
└── database/
    └── parcial2_appweb.sql


``` 
## Funcionalidades implementadas

- Login de usuario
- Registro de usuario y perfil
- Visualización de perfil
- Edición de perfil
- Integración entre frontend, backend y PostgreSQL

---

## Endpoints principales

| Método | Endpoint             | Descripción              |
|--------|---------------------|--------------------------|
| POST   | /auth/login         | Login de usuario         |
| POST   | /registro           | Registro de usuario      |
| GET    | /perfil/:usuario_id | Obtener perfil           |
| PUT    | /perfil/:usuario_id | Actualizar perfil        |

---

## Flujo del sistema

1. El usuario ingresa sus credenciales.
2. El frontend envía los datos al backend.
3. El backend valida contra PostgreSQL.
4. Si es correcto, se permite el acceso.
5. El usuario visualiza su perfil.
6. Puede editar su información.
7. Los cambios se guardan en la base de datos.

---

## Base de datos

Script incluido:
database/parcial2_appweb.sql

Tablas:
- usuarios
- perfil

---

## Cómo ejecutar el proyecto

Backend:

cd backend  
npm install  
npm run dev  

Frontend:

cd frontend  
npm install  
ng serve -o  


## Mejoras futuras

- Validaciones más robustas
- Contraseñas cifradas con bcrypt
- Implementar JWT o sesiones
- Control de acceso real a perfiles
- Mejor manejo de errores y seguridad