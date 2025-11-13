import React from "react";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import styles from "./TeknisiElevator.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const TeknisiElevator = () => {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>TEKNISI ELEVATOR & ESKALATOR</h1>
          <p>Sertifikasi dari Kemnaker RI</p>
          <p>
            <strong>Pelatihan:</strong> Offline | <strong>Durasi:</strong> ± 6 –
            7 Hari (termasuk praktek)
          </p>
          <a href="brosur.pdf" download className={styles.btnRegister}>
            <i className="fa-solid fa-download me-2"></i>Download Brosur PDF
          </a>
        </div>
      </section>

      {/* Main Content */}
      <div className="container my-5">
        {/* Tentang Pelatihan */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Tentang Pelatihan</h2>
          <p>
            Pelatihan untuk teknisi yang akan bertugas merawat, memperbaiki, dan
            memastikan keamanan elevator & eskalator sesuai standar K3.
          </p>
        </div>

        {/* Fasilitas & Persyaratan */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Fasilitas & Persyaratan</h2>
          <div className="row">
            <div className="col-md-6">
              <h5 className="text-warning fw-semibold mb-3">Fasilitas</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat & Lisensi dari Kemnaker RI</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat Kepesertaan</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> E-Modul / Bahan Ajar</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Ruang kelas & perlengkapan</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Lunch & Coffee Break</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Training Kit</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Instruktur & Evaluator Kemnaker RI</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sarana & prasarana praktek</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5 className="text-warning fw-semibold mb-3">Persyaratan Peserta</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sehat jasmani & rohani</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Minimal pendidikan STM/SMK Teknik + pengalaman 3 tahun di bidang Elevator / Eskalator</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Surat Keterangan Kerja dari perusahaan</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Email pribadi aktif (Google)</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Bisa menggunakan Laptop / PC</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Kuota internet & jaringan memadai</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Bersedia tatap muka penuh selama pelatihan</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Praktek Lapangan */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Praktek Lapangan & Peserta</h2>
          <div className="row">
            <div className="col-md-6">
              <h5 className="text-warning fw-semibold mb-3">Peserta</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Peserta yang lolos seleksi persyaratan</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5 className="text-warning fw-semibold mb-3">Perlengkapan Praktek</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Safety shoes (dipakai dari rumah)</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Helmet</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Warepack / kemeja safety lengan panjang</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Biaya */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Biaya & Fasilitas</h2>
          <p>
            <strong className="text-warning">Rp. 8.500.000,- / Peserta</strong> (tidak termasuk pajak)
          </p>
          <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat & Lisensi dari Kemnaker RI</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat Kepesertaan penyelenggara</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> E-Modul / Bahan Ajar & Training Kit</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Lunch & Coffee Break</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Ruang kelas & sarana praktik</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Instruktur & Evaluator dari Kemnaker RI</li>
          </ul>
          <a href="https://www.geomandiri.co.id/pendaftaran.html" className={`${styles.btnRegister} btn mt-3`}>
            <i className="fa-solid fa-pen-to-square me-2"></i>Daftar Sekarang
          </a>
        </div>

        {/* Lokasi */}
        <div className={`${styles.sectionGlass} text-center`}>
          <h2 className={styles.sectionTitle}>Lokasi Pelaksanaan</h2>
          <p>
            Training Center Jakarta / Bekasi (lokasi disesuaikan berdasarkan kuota)
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TeknisiElevator;
