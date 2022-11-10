FROM node:alpine

WORKDIR /app

COPY package*.json ./
COPY bin/ ./bin/
COPY dist/ ./dist/

RUN npm ci --only=production

CMD [ "/app/bin/tutornode" ]