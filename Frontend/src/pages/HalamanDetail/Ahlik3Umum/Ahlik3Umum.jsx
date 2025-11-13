import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import styles from './AhliK3Umum.module.css';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
  

const AhliK3Umum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Navbar />

   {/* HERO */}
<div className={styles.hero}>
  <div className={styles.heroContent}>
    <h1>AHLI K3 ELEVATOR & ESKALATOR</h1>
    <p>Sertifikasi Kementerian Ketenagakerjaan Republik Indonesia</p>
    <p><strong>Pelatihan:</strong> Offline | <strong>Durasi:</strong> 12 Hari (120 JP)</p>
    <a href="/assets/brosur.pdf" download className={`${styles.btnRegister} mt-3`}>
      <i className="fa-solid fa-download text-black me-2"></i>Download Brosur PDF
    </a>
  </div>
</div>

      <Container className="my-5">
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Tentang Ahli K3 Umum</h2>
          <p>Pelatihan ini mempersiapkan peserta menjadi Ahli K3 Umum dengan kompetensi dasar K3 secara menyeluruh untuk berbagai sektor industri.</p>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Fasilitas & Persyaratan</h2>
          <Row>
            <Col md={6}>
              <h5 className="text-warning fw-semibold mb-3">Fasilitas</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat, SKP & Kartu Kewenangan dari Kemnaker RI</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat Kepesertaan dari Penyelenggara</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> E‑Modul / Bahan Ajar</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Akses Zoom / media daring</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Video observasi / dokumentasi lapangan</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5 className="text-warning fw-semibold mb-3">Persyaratan Peserta</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sehat jasmani & rohani</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Minimal pendidikan D3 / S1</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Memiliki pengalaman 3 tahun di bidang terkait</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sudah bekerja → lampirkan Surat Keterangan Kerja</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Smartphone Android dgn aplikasi Teman K3 untuk presensi</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Laptop / PC dengan aplikasi Zoom</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Kuota & jaringan internet memadai</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Bersedia hadir secara daring / tatap muka sesuai ketentuan</li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Administrasi & Pengumpulan Dokumen</h2>
          <p>Peserta wajib menyerahkan dokumen administrasi selambat‑lambatnya H‑10 sebelum pelatihan:</p>
          <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Form Biodata (Word)</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Ijazah asli D3/S1 (warna, bukan fotokopi) File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> KTP warna (bukan fotokopi) File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> CV / Daftar Riwayat Hidup File pdf</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Pas foto latar merah File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Surat Keterangan Kerja File pdf</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Surat Keterangan Sehat File jpg / pdf</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Pakta Integritas bermaterai 10000 File jpg</li>
          </ul>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Biaya & Fasilitas</h2>
          <p><strong className="text-warning">Rp. 8.500.000,- / Peserta</strong> (tidak termasuk pajak)</p>
          <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat, SKP & Kartu Kewenangan dari Kemnaker RI</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat Kepesertaan dari Penyelenggara</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> E‑Modul / Bahan Ajar</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Instruktur & Evaluator Kemnaker RI</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Video PKL / Observasi sebagai pengganti tatap muka</li>
          </ul>
          <a href="https://www.geomandiri.co.id/pendaftaran.html" className={styles.btnRegister + " mt-3"}>
            <i className="fa-solid fa-pen-to-square text-black me-2"></i>Daftar Sekarang
          </a>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default AhliK3Umum;