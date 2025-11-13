import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import styles from './OperatorElevator.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const OperatorElevatorEskalator = () => {
  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>OPERATOR ELEVATOR & ESKALATOR</h1>
          <p>Sertifikasi dari Kemnaker RI</p>
          <p><strong>Pelatihan:</strong> Offline | <strong>Durasi:</strong> 6 – 7 Hari (tergantung praktik lapangan)</p>
          <a href="/assets/brosur.pdf" download className={`${styles.btnRegister} mt-3`}>
            <i className="fa-solid fa-download text-black me-2"></i>Download Brosur PDF
          </a>
        </div>
      </div>

      <Container className="my-5">
        {/* Tentang */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Tentang Operator Elevator & Eskalator</h2>
          <p>Pelatihan ini ditujukan untuk operator elevator & eskalator agar memahami pengoperasian, prosedur keamanan dan aspek K3.</p>
        </div>

        {/* Fasilitas & Persyaratan */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Fasilitas & Persyaratan</h2>
          <Row>
            <Col md={6}>
              <h5 className="text-warning fw-semibold mb-3">Fasilitas</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat & Lisensi dari Kemnaker RI</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat Kepesertaan dari Penyelenggara</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> E‑Modul / Bahan Ajar</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Ruang kelas & perlengkapan</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Lunch & 2x Coffee Break</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Training Kit</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Instruktur & Evaluator Kemnaker RI</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sarana & prasarana praktik</li>
              </ul>
            </Col>
            <Col md={6}>
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
            </Col>
          </Row>
        </div>

        {/* Praktek & Peserta */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Praktek Lapangan & Peserta</h2>
          <Row>
            <Col md={6}>
              <h5 className="text-warning fw-semibold mb-3">Peserta</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Peserta yang lulus syarat</li>
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

        {/* Biaya & Fasilitas */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Biaya & Fasilitas</h2>
          <p><strong className="text-warning">Rp. 8.000.000,- / Peserta</strong> (tidak termasuk pajak & akomodasi)</p>
          <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat & Lisensi Kemnaker RI</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat Kepesertaan penyelenggara</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> E‑Modul / Bahan Ajar & Training Kit</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Lunch & Coffee Break</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Ruang kelas & sarana praktik</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Instruktur & Evaluator dari Kemnaker RI</li>
          </ul>
          <a href="https://www.geomandiri.co.id/pendaftaran.html" className={`${styles.btnRegister} mt-3`}>
            <i className="fa-solid fa-pen-to-square text-black me-2"></i>Daftar Sekarang
          </a>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Tempat Pelaksanaan</h2>
          <p>Training Center Jakarta / Bekasi – Jl. Raya Jatiwaringin No. 6C, Pangkalan Jati, Jakarta Timur (disesuaikan kuota peserta)</p>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default OperatorElevatorEskalator;