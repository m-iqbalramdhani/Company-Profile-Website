// Gunakan salah satu sistem import, jangan campur import/export dengan require
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

import personilRoutes from './src/routes/personilRoutes.js';
import riwayatRoutes from './src/routes/riwayatRoutes.js';
import databaseRoutes from './src/routes/databaseRoutes.js';

// Load environment variables (.env)
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// ===============================
// 📩 Endpoint Hubungi Kami
// ===============================
app.post("/hubungi-kami", async (req, res) => {
  const { fullName, email, subject, message } = req.body;

  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ message: "Semua field wajib diisi!" });
  }

  console.log("📩 Pesan baru diterima:");
  console.log({ fullName, email, subject, message });

  try {
    // Konfigurasi pengirim Gmail (gunakan App Password)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // email pengirim
        pass: process.env.EMAIL_PASS, // sandi aplikasi Gmail
      },
    });

    // Detail email yang dikirim ke penerima
    const mailOptions = {
      from: `"Geo Web" <${process.env.EMAIL_USER}>`,
      to: "chandraca81@gmail.com", // email penerima
      subject: `Pesan Baru dari ${fullName} - ${subject}`,
      text: `
Nama: ${fullName}
Email: ${email}
Subjek: ${subject}

Pesan:
${message}
      `,
    };

    // Kirim email
    await transporter.sendMail(mailOptions);

    console.log("✅ Email berhasil dikirim ke admin.");
    res.status(200).json({ message: "Pesan berhasil dikirim ke admin!" });

  } catch (error) {
    console.error("❌ Gagal mengirim email:", error);
    res.status(500).json({ message: "Gagal mengirim pesan ke email admin.", error: error.message });
  }
});

// ===============================
// 📦 Routes Lain
// ===============================
app.use('/api/personil', personilRoutes);
app.use('/api/riwayat', riwayatRoutes);
app.use('/api/database', databaseRoutes);

// Root route
app.get('/', (req, res) => res.json({ message: 'API Database Geo aktif 🚀' }));

// Error handler global
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Terjadi kesalahan server', error: err.message });
});

app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
