import React from 'react';
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import styles from './TeknisiListrik.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const TeknisiListrik = () => {
  return (
    <div className={styles.body}>
      <Navbar />
      
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>TEKNISI LISTRIK</h1>
          <p>Pelatihan teknisi listrik dengan pemahaman K3 & praktik kelistrikan</p>
          <p><strong>Pelatihan:</strong> Durasi ± 8 hari (termasuk praktik lapangan)</p>
          <a href="brosur.pdf" download className={styles.btnRegister}>
            <i className="fa-solid fa-download text-dark me-2"></i>Download Brosur PDF
          </a>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Tentang Pelatihan</h2>
          <p>Pelatihan ini bertujuan menghasilkan teknisi listrik yang mampu bekerja aman dan kompeten dalam aspek teknis dan K3.</p>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Fasilitas & Persyaratan</h2>
          <div className={styles.row}>
            <div className={styles.colMd6}>
              <h5 className={styles.textWarning}>Fasilitas</h5>
         <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat & Kartu Lisensi dari Kemnaker RI</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> E‑Modul / Bahan Ajar</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Ruang kelas & fasilitas praktik</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Lunch & Coffee Break (offline)</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Instruktur & Evaluator dari Kemnaker RI</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sarana & prasarana praktik kelistrikan</li>
              </ul>
            </div>
            <div className={styles.colMd6}>
              <h5 className={styles.textWarning}>Persyaratan Peserta</h5>
         <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sehat jasmani & rohani</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Pendidikan minimal STM / SMK jurusan teknik + pengalaman ≥ 2 tahun di bidang listrik</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sudah bekerja → lampirkan Surat Keterangan Kerja</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Email pribadi aktif (Google)</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Laptop / PC & kuota internet memadai</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Smartphone Android dengan aplikasi Teman K3 untuk presensi</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Bersedia hadir tatap muka penuh tanpa ijin / absen selama pelatihan</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Administrasi & Dokumen</h2>
          <p>Wajib dikumpulkan H‑10 sebelum pelatihan:</p>
     <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Form Biodata peserta (Word)</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Ijazah asli STM / SMK teknik (warna) File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> KTP warna (bukan fotokopi) File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> CV / Daftar Riwayat Hidup File pdf</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Pas foto latar merah File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Surat Keterangan Kerja File pdf</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Surat Keterangan Sehat dari dokter File jpg / pdf</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Pakta Integritas bermaterai 10000 File jpg</li>
          </ul>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Biaya & Fasilitas</h2>
          <p><strong className={styles.textWarning}>Rp. 8.000.000,- / Peserta</strong> (tidak termasuk pajak)</p>
    <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat & Lisensi Kemnaker RI</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> E‑Modul / Bahan Ajar & Training Kit</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Ruang kelas & sarana praktik kelistrikan</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Lunch & Coffee Break (offline)</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Instruktur & Evaluator dari Kemnaker RI</li>
          </ul>
          <a href="https://www.geomandiri.co.id/pendaftaran.html" className={`${styles.btnRegister} ${styles.btn}`}>
            <i className="fa-solid fa-pen-to-square text-dark me-2"></i>Daftar Sekarang
          </a>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Tempat Pelaksanaan</h2>
          <p>Lokasi pelatihan (kelas & praktik) disesuaikan dengan fasilitas dan kuota peserta</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TeknisiListrik;