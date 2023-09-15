FROM node:14

# Crie um diretório para armazenar o código dentro do contêiner
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale todas as dependências
RUN npm install

# Copie o resto dos arquivos da aplicação
COPY . .

# Expõe a porta que a aplicação vai rodar
EXPOSE 4000

# Comando para rodar a aplicação
CMD ["npm", "start"]
