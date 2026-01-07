FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

# Usamos 'node --watch' para que se reinicie solo al editar
CMD ["node", "--watch", "index.js"]