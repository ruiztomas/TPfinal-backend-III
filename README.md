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

---

## 📦 Imagen Docker

La aplicación está disponible como imagen pública en Docker Hub:

👉 https://hub.docker.com/r/ruiztomas29/adoptme-backend

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