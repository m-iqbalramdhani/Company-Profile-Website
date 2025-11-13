import React from 'react';
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import styles from './AhliK3Listrik.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const AhliK3Listrik = () => {
  return (
    <div className={styles.body}>
      <Navbar />
      
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>AHLI K3 SPESIALIS LISTRIK</h1>
          <p>Sertifikasi & Kompetensi K3 dalam bidang kelistrikan</p>
          <p><strong>Pelatihan:</strong> Durasi 18 hari (termasuk praktik lapangan)</p>
          <a href="brosur.pdf" download className={styles.btnRegister}>
            <i className="fa-solid fa-download text-dark me-2"></i>Download Brosur PDF
          </a>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Tentang Pelatihan</h2>
          <p>Pelatihan ini dirancang untuk mencetak tenaga ahli K3 yang memiliki kompetensi khusus di bidang kelistrikan sesuai regulasi Kemnaker RI.</p>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Fasilitas & Persyaratan</h2>
          <div className={styles.row}>
            <div className={styles.colMd6}>
              <h5 className={styles.textWarning}>Fasilitas</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat, SKP & Kartu Kewenangan dari Kemnaker RI</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> E‑Modul / Materi pelatihan</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Video PKL / Observasi & praktik lapangan</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Lunch & 2x Coffee Break</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Instruktur & Evaluator dari Kemnaker RI</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sarana & prasarana praktik kelistrikan</li>
              </ul>
            </div>
            <div className={styles.colMd6}>
              <h5 className={styles.textWarning}>Persyaratan Peserta</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sehat jasmani & rohani</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Minimal pendidikan D3 / S1 teknik / sejenis + pengalaman ≥ 2 tahun di bidang listrik</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sudah bekerja → lampirkan Surat Keterangan Kerja</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Email pribadi aktif (Google)</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Laptop / PC & kuota internet memadai</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Smartphone Android dengan aplikasi Teman K3 untuk presensi</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Bersedia tatap muka penuh selama 18 hari tanpa izin / absen</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Administrasi & Dokumen</h2>
          <p>Dokumen wajib dikumpulkan sebelum pelatihan (H‑10):</p>
          <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Ijazah asli D3 / S1 teknik (warna, bukan fotokopi) File jpg</li>
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
          <p><strong className={styles.textWarning}>Rp. 20.000.000,- / Peserta</strong> (tidak termasuk pajak, transportasi & akomodasi)</p>
          <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat, SKP & Kartu Kewenangan Kemnaker RI</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> E‑Modul / Materi & Video observasi</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sarana & prasarana praktik kelistrikan</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Lunch & 2x Coffee Break</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Instruktur & Evaluator dari Kemnaker RI</li>
          </ul>
          <a href="https://www.geomandiri.co.id/pendaftaran.html" className={`${styles.btnRegister} ${styles.btn}`}>
            <i className="fa-solid fa-pen-to-square text-dark me-2"></i>Daftar Sekarang
          </a>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Tempat Pelaksanaan</h2>
          <p>Training Center & lokasi praktik listrik disesuaikan dengan kuota peserta & fasilitas lapangan</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AhliK3Listrik;