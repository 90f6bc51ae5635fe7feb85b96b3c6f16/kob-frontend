# ---------- Stage 1: Build ----------
FROM node:16-alpine AS builder

# ตั้ง working directory
WORKDIR /app

# คัดลอกไฟล์ package.json และ package-lock.json ก่อน (เพื่อแคช dependency)
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอก source code ทั้งหมด
COPY . .

# สร้างโปรเจกต์ (build)
RUN npm run build

# ---------- Stage 2: Production ----------
FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/static ./static
COPY --from=builder /app/store ./store
COPY --from=builder /app/content ./content
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/nuxt.config.js ./

RUN npm install --only=production

ENV NITRO_PORT=3000
ENV HOST=0.0.0.0
EXPOSE 3000

CMD ["npm", "run", "start"]
