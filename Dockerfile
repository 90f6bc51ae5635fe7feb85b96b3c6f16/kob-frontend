# 1. ใช้ Node.js image ที่เป็น base image
FROM node:16-alpine AS build

# 2. ตั้ง working directory
WORKDIR /usr/src/app

# 3. คัดลอก package.json และ package-lock.json
COPY package*.json ./

# 4. ติดตั้ง dependencies
RUN npm install

# RUN npm install vue-i18n --legacy-peer-deps
# 5. คัดลอกไฟล์ทั้งหมดไปยัง container
COPY . .

# 6. Build แอป Nuxt 3
RUN npm run build

# 7. ใช้ Node.js Image สำหรับ Production
FROM node:16-alpine AS production

# 8. ตั้ง working directory
WORKDIR /usr/src/app

# 9. คัดลอก dependencies ที่จำเป็นสำหรับ Production
COPY package*.json ./
RUN npm install

# RUN npm install vue-i18n --legacy-peer-deps
# 10. คัดลอกไฟล์ build ไปยัง Production Image
COPY --from=build /usr/src/app/.output ./.output

# 11. เปิด port 3000
EXPOSE 3000

# 12. คำสั่งเริ่มต้นสำหรับ Container
CMD ["node", ".output/server/index.mjs"]
