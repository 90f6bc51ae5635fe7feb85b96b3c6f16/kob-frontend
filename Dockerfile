# ใช้ Node base image
FROM node:16-alpine

# ตั้ง working directory
WORKDIR /app

# คัดลอกไฟล์ package
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์โปรเจกต์ทั้งหมด
COPY . .

# สร้าง production build
RUN npm run build

# Expose port 3000 (ค่าเริ่มต้นของ Nuxt)
EXPOSE 3000


# คำสั่งเริ่มต้น (รัน production server)
CMD ["npm",  "start"]
