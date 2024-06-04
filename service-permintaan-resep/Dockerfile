# Menggunakan image node versi 16 sebagai base image
FROM node:16

# Mengatur direktori kerja di dalam container
WORKDIR /app

# Menyalin seluruh kode proyek
COPY . .

# Menginstall dependencies
RUN npm install

# Menghasilkan Prisma Client
RUN npx prisma generate

# Expose port yang digunakan oleh aplikasi Express.js
EXPOSE 3001

# Perintah yang akan dijalankan saat container dijalankan
CMD  npm run start
