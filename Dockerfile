
FROM node:22

RUN npm install -g pnpm

WORKDIR /code

COPY package*.json ./

# Verificar si el archivo pnpm-lock.yaml existe
RUN test -f pnpm-lock.yaml && \
  COPY pnpm-lock.yaml ./ || \
  echo "pnpm-lock.yaml no encontrado, omitiendo su copia"

RUN pnpm install

COPY . .

EXPOSE 9000

CMD ["pnpm", "dev"]