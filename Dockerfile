# IMAGEM OFICIAL BY DOCKERHUB
# É BOM SEMPRE ESPECIFICAR A TAG DA IMAGEM QUE FICA APÓS :
# ASSIM EVITAMOS PROBLEMAS QUE AS ULTIMAS VERSÕES PODEM TER
# SE DEIXAR SOMENTE O NOME DA IMAGE, SEMPRE VAI SER USADO LATEST 
FROM node:16.15.1

# CAMINHO ONDE A IMAGEM VAI FICAR
WORKDIR /usr/app

# O * SERVE PARA, ALÉM DO PACKAGE.JSON PEGAR O PACKAGE-LOCK.JSON
# E O ./ INDICA O PATH
COPY package*.json ./

# INSTALA TODOS OS PACOTES E DEPENDÊNCIAS DE PACKAGE.JSON
RUN yarn

# COPIA OS DEMAIS ARQUIVOS
COPY . .

# EXPOE A PORTA UTILIZADA PELA APLICAÇÃO
EXPOSE 4545

# COMANDO DE INICIALIZAÇÃO DO CONTAINER
CMD ["yarn", "dev"]