# Nodejs Image
FROM node:20

# workspace from docker
WORKDIR /app

# Files to container
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Install dev dependencies (including nodemon)
RUN npm install --only=development

# Files to docker container after installation from lock.json
COPY . .

# Exponha a porta necessária para o aplicativo Node.js
EXPOSE 3000

# Comando para iniciar o aplicativo Node.js
CMD ["npm", "run", "start"]