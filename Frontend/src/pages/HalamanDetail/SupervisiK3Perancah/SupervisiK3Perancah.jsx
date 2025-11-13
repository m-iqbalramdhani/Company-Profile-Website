import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import styles from './SupervisiK3Perancah.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const SupervisiK3Perancah = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>SUPERVISI K3 PERANCAH</h1>
          <p>Pelatihan Supervisi K3 Perancah bersertifikasi</p>
          <p><strong>Pelatihan:</strong> Offline | Durasi ± 6 Hari (termasuk praktik lapangan)</p>
          <a href="/assets/brosur.pdf" download className={`${styles.btnRegister} mt-3`}>
            <i className="fa-solid fa-download text-black me-2"></i>Download Brosur PDF
          </a>
        </div>
      </div>

      <Container className="my-5">
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Tentang Pelatihan</h2>
          <p>Pelatihan ini mempersiapkan peserta menjadi supervisor K3 khusus perancah, berfokus pada keamanan dan regulasi perancah lapangan.</p>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Fasilitas & Persyaratan</h2>
          <Row>
            <Col md={6}>
              <h5 className="text-warning fw-semibold mb-3">Fasilitas</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat & Lisensi dari Kemnaker RI</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat Kepesertaan</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> E‑Modul / Bahan Ajar</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Ruang kelas & perlengkapan</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Lunch & Coffee Break (Offline)</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Instruktur & Evaluator Kemnaker RI</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sarana & prasarana praktek perancah</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5 className="text-warning fw-semibold mb-3">Persyaratan Peserta</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sehat jasmani & rohani</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Pendidikan minimal STM/SMK Teknik + pengalaman 3 tahun</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Surat Keterangan Kerja dari perusahaan</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Email pribadi aktif (Google)</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Laptop / PC & kuota internet memadai</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Bersedia tatap muka penuh selama pelatihan</li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Praktek & Peserta</h2>
          <Row>
            <Col md={6}>
              <h5 className="text-warning fw-semibold mb-3">Peserta</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Peserta yang memenuhi syarat</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5 className="text-warning fw-semibold mb-3">Perlengkapan Praktek</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Safety shoes (dipakai dari rumah)</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Helmet</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Warepack / kemeja safety lengan panjang</li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Administrasi & Dokumen</h2>
          <p>Dokumen wajib dikumpulkan H‑10:</p>
          <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Form Biodata (Word)</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Ijazah asli SMK/STM (warna) File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> KTP warna File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> CV / Daftar Riwayat Hidup File pdf</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Pas foto latar merah File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Surat Keterangan Kerja File pdf</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Surat Keterangan Sehat File jpg / pdf</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Pakta Integritas bermaterai 10000 File jpg</li>
          </ul>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Biaya & Fasilitas</h2>
          <p><strong className="text-warning">Rp. 8.000.000,- / Peserta</strong> (tidak termasuk pajak)</p>
          <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat & Lisensi Kemnaker RI</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat Kepesertaan</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> E‑Modul / Bahan Ajar</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Instruktur & Evaluator Kemnaker RI</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Ruang kelas & fasilitas praktek perancah</li>
          </ul>
          <a href="https://www.geomandiri.co.id/pendaftaran.html" className={`${styles.btnRegister} mt-3`}>
            <i className="fa-solid fa-pen-to-square text-black me-2"></i>Daftar Sekarang
          </a>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default SupervisiK3Perancah;
