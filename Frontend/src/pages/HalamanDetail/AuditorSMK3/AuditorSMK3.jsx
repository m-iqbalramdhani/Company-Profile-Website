import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import styles from './AuditorSMK3.module.css';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const AuditorSMK3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>AUDITOR SMK3</h1>
          <p>Pelatihan Auditor SMK3 Bersertifikasi</p>
          <p><strong>Pelatihan:</strong> Online / Hybrid | Durasi ± (tergantung materi & evaluasi)</p>
          <a href="/assets/brosur.pdf" download className={styles.btnRegister + " mt-3"}>
            <i className="fa-solid fa-download text-black me-2"></i>Download Brosur PDF
          </a>
        </div>
      </div>

      <Container className="my-5">
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Tentang Pelatihan Auditor SMK3</h2>
          <p>Pelatihan ini mempersiapkan peserta sebagai auditor internal SMK3 dalam organisasi/industri, sesuai regulasi dan standar audit K3.</p>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Fasilitas & Persyaratan</h2>
          <Row>
            <Col md={6}>
              <h5 className="text-warning fw-semibold mb-3">Fasilitas</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat dari Kemnaker RI</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat Kepesertaan</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> E‑Modul / Bahan Ajar</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Zoom / media daring & evaluasi</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5 className="text-warning fw-semibold mb-3">Persyaratan Peserta</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sehat jasmani & rohani</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Pendidikan minimal D3 / S1 + pengalaman 2 tahun di bidang terkait</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sudah memiliki sertifikasi Ahli K3 Umum</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Email pribadi aktif (Google)</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Laptop / PC dengan Zoom & akses internet memadai</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Smartphone Android untuk presensi Teman K3</li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Administrasi & Dokumen</h2>
          <p>Dokumen wajib dikumpulkan H‑10 sebelum pelatihan:</p>
          <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Form Biodata (Word)</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Ijazah asli D3/S1 (warna) File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat & SKP & Kartu Kewenangan Ahli K3 Umum File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> KTP warna File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> CV File pdf</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Pas foto latar merah File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Surat Keterangan Kerja File pdf</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Surat Keterangan Sehat File jpg / pdf</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Pakta Integritas bermaterai 10000 File jpg</li>
          </ul>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Biaya & Fasilitas</h2>
          <p><strong className="text-warning">Rp. 7.500.000,- / Peserta</strong> (tidak termasuk pajak)</p>
          <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat Kemnaker RI</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat Kepesertaan penyelenggara</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> E‑Modul / Bahan Ajar</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Instruktur & Evaluator dari Kemnaker RI</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Zoom / media daring & evaluasi</li>
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

export default AuditorSMK3;