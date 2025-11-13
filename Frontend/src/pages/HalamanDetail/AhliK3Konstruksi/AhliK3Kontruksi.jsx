import React from "react";
import styles from "./AhliK3Konstruksi.module.css";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const AhliK3Konstruksi = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>AHLI K3 MUDA KONSTRUKSI</h1>
          <p>Pelatihan Ahli K3 Konstruksi bersertifikat</p>
          <p>
            <strong>Pelatihan:</strong> Offline / Kombinasi | Durasi ± 6 – 7 Hari + observasi
          </p>
          <a href="brosur.pdf" download className={`${styles.btnRegister} mt-3`}>
            <i className="fa-solid fa-download me-2"></i>Download Brosur PDF
          </a>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="container my-5">
        {/* Tentang Pelatihan */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Tentang Pelatihan</h2>
          <p className="text-black">
            Program ini mempersiapkan tenaga Ahli K3 khusus di sektor konstruksi,
            dengan kompetensi observasi lapangan dan teori K3 konstruksi.
          </p>
        </div>

        {/* Fasilitas & Persyaratan */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Fasilitas & Persyaratan</h2>
          <div className="row">
            <div className="col-md-6">
              <h5 className="text-warning fw-semibold mb-3">Fasilitas</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat & Kartu Kewenangan dari Kemnaker RI</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat Kepesertaan</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> E-Modul / Bahan Ajar</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Instruktur & Evaluator kompeten</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Lokasi proyek observasi / praktek</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Lunch & Coffee Break (jika offline)</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5 className="text-warning fw-semibold mb-3">Persyaratan Peserta</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sehat jasmani & rohani</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Pendidikan minimal SLTA / SMK + pengalaman ≥ 5 tahun di bidang konstruksi, atau D3 teknik + pengalaman 4 tahun, atau S1 teknik / SKM + pengalaman 2 tahun (atau 2 tahun sebagai Petugas K3 Konstruksi)</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Laptop / PC berkamera untuk ujian daring & presentasi laporan</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Smartphone Android terinstal Teman K3 untuk presensi</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Praktek & Peserta */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Praktek / Observasi & Peserta</h2>
          <div className="row">
            <div className="col-md-6">
              <h5 className="text-warning fw-semibold mb-3">Peserta</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Peserta yang memenuhi persyaratan di atas</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5 className="text-warning fw-semibold mb-3">Perlengkapan Praktek</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Safety shoes (dipakai dari rumah)</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Helmet (untuk observasi)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Administrasi */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Administrasi & Dokumen</h2>
          <p className="text-black">Dokumen wajib dikumpulkan H-10 sebelum pelatihan:</p>
          <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Form Biodata (Word)</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Ijazah asli minimal SMA/SMK (warna) File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> KTP warna File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> CV / Daftar Riwayat Hidup File pdf</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Pas foto latar merah File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Surat Keterangan Kerja File pdf</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Surat Keterangan Sehat File jpg / pdf</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Pakta Integritas bermaterai 10000 File jpg</li>
          </ul>
        </div>

        {/* Biaya */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Biaya & Fasilitas</h2>
          <p className="text-black"><strong className="text-warning">Rp. 8.500.000,- / Peserta</strong> (tidak termasuk pajak)</p>
          <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat & Kartu Kewenangan Kemnaker RI</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat Kepesertaan penyelenggara</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> E-Modul / Bahan Ajar</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Instruktur & Evaluator kompeten dan pengawas lapangan</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Observasi lokasi proyek / praktek lapangan</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Lunch & Coffee Break (jika offline)</li>
          </ul>
          <a href="https://www.geomandiri.co.id/pendaftaran.html" className={`${styles.btnRegister} mt-3 btn`}>
            <i className="fa-solid fa-pen-to-square me-2"></i>Daftar Sekarang
          </a>
        </div>

        {/* Tempat Pelaksanaan */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Tempat Pelaksanaan</h2>
          <p className="text-black">Training Center & lokasi proyek sesuai kuota & ketersediaan peserta.</p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AhliK3Konstruksi;
