# Usar uma imagem base de Node.js
FROM node:14

# Definir o diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o código do aplicativo
COPY . .

# Definir a porta que o aplicativo usará
EXPOSE 3000

# Comando para executar o aplicativo
CMD ["node", "index.js"]
