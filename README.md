# Adoptme Backend 🐶🐱

Backend API para la gestión de usuarios, mascotas y adopciones.
Proyecto desarrollado con Node.js, Express, MongoDB y Docker.

---

## 🚀 Tecnologías usadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Docker
- Swagger (Documentación API)
- Mocha + Chai (Test funcionales)

---

## 📦 Imagen Docker

La aplicación está disponible como imagen pública en Docker Hub:

👉 [ruiztomas/adoptme-backend](https://hub.docker.com/r/ruiztomas/adoptme-backend)

---

## ▶️ Ejecutar con Docker

### 1️⃣ Requisitos
- Docker instalado
- Cuenta en MongoDB Atlas

### 2️⃣ Comando de ejecución

```bash
docker run -p 8080:8080 \
-e MONGO_URL=mongodb+srv://ruiztomas29:123456tar@cluster.mongodb.net/adoptme \
ruiztomas/adoptme-backend

#### Endpoints principales

POST   /api/users               → Crear usuario
POST   /api/pets                → Crear mascota
POST   /api/adoptions/:uid/:pid → Crear adopción
GET    /api/adoptions           → Listar adopciones
GET    /api/adoptions/:id       → Obtener adopción por ID
DELETE /api/adoptions/:id       → Eliminar adopción