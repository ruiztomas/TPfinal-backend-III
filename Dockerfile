# Imagen base
FROM node:20

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del proyecto
COPY . .

# Exponemos el puerto (el mismo que usa app.js)
EXPOSE 8080

# Comando para iniciar la app
CMD ["npm", "start"]