# Usamos Node 20 (versión ligera)
FROM node:20-alpine

WORKDIR /app

# Copiamos el archivo de "receta" de librerías desde la subcarpeta `zeroma`
COPY zeroma/package*.json ./

# Instalamos dependencias de forma reproducible (requiere lockfile sincronizado)
RUN npm ci --prefer-offline --no-audit --no-fund

# Copiamos el código fuente del frontend desde `zeroma`
COPY zeroma ./

# Exponemos el puerto de Vite
EXPOSE 5173

# Arrancamos el modo desarrollo
CMD ["npm", "run", "dev", "--", "--host"]