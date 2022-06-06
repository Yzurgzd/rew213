FROM node:14-alpine
WORKDIR /frontend
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build
# CMD [ "npm", "run", "dev"]
CMD [ "npm", "start"]