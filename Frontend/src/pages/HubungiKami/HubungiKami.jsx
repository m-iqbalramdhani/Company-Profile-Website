import React, { useState } from 'react';
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import styles from './HubungiKami.module.css';

const HubungiKami = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("http://pblweb01b01.cloud:3017/hubungi-kami", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Terima kasih! Pesan Anda telah dikirim.");
        setFormData({
          fullName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        alert("❌ Gagal mengirim pesan: " + (errorData.message || "Terjadi kesalahan."));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Gagal mengirim pesan. Pastikan server backend aktif di localhost:3000.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={styles.body}>
      <Navbar />

      <div className={styles.contactContainer}>
        <div className={styles.row}>
          {/* Info Card */}
          <div className={styles.colLg5}>
            <div className={styles.infoCard}>
              
              <h2 className={styles.sectionTitle}>Punya Pertanyaan Lebih Lanjut?</h2>
              <p>Hubungi kami dengan mengisi form di samping ini.</p>
              <p>
                Untuk layanan PTSA Daring (Online) bidang K3, silahkan mengirimkan email lengkap
                dengan lampiran dokumen ke:
              </p>
              <div className={`${styles.textCenter} ${styles.my4}`}>
                <a
                  href="mailto:layanank3@kemnaker.go.id"
                  className={`${styles.emailLink} ${styles.fs5}`}
                >
                  <i className="fas fa-envelope me-2"></i>layanank3@kemnaker.go.id
                </a>
              </div>
              <div className={styles.textCenter}>
                <p className={styles.mb0}>
                  <small>
                    <i className="fas fa-clock me-2"></i>Respon dalam 24 jam kerja
                  </small>
                </p>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className={styles.colLg7}>
            <div className={styles.formCard}>
              <h2 className={styles.sectionTitle}>Form Kirim Pesan</h2>
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className={styles.mb3}>
                  <label htmlFor="fullName" className={styles.formLabel}>Nama Lengkap</label>
                  <input
                    type="text"
                    className={styles.formControl}
                    id="fullName"
                    name="fullName"
                    placeholder="Masukkan nama lengkap Anda"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.mb3}>
                  <label htmlFor="email" className={styles.formLabel}>Email</label>
                  <input
                    type="email"
                    className={styles.formControl}
                    id="email"
                    name="email"
                    placeholder="Masukkan email Anda"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.mb3}>
                  <label htmlFor="subject" className={styles.formLabel}>Subjek</label>
                  <input
                    type="text"
                    className={styles.formControl}
                    id="subject"
                    name="subject"
                    placeholder="Masukkan subjek pesan"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className={styles.mb3}>
                  <label htmlFor="message" className={styles.formLabel}>Pesan</label>
                  <textarea
                    className={styles.formControl}
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tuliskan pesan Anda di sini..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div className={styles.dGrid}>
                  <button
                    type="submit"
                    className={styles.btnPrimary}
                    disabled={isSending}
                  >
                    {isSending ? "Mengirim..." : "Kirim Pesan"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className={styles.textCenter}>
          <a href="/" className={styles.homeBtn}>
            <i className="fas fa-home text-dark me-2"></i>Kembali ke Beranda
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HubungiKami;
