# Nuxt用Dockerfile（開発用最適化）
FROM node:22.17.1-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm install

COPY . .
EXPOSE 3000
CMD ["pnpm", "run", "dev", "--host"]
