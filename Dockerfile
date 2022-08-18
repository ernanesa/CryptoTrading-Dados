FROM node:18-slim as BUILDER

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i

COPY . .
RUN npm run build

FROM node:18-alpine
ARG NODE_ENV=production
WORKDIR /usr/src/app
COPY --from=BUILDER /usr/src/app/ ./
EXPOSE 3000
CMD ["npm", "start"]