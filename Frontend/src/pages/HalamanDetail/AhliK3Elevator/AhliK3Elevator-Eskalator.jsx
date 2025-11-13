import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from 'react';
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import styles from './AhliK3Elevator.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const AhliK3Elevator = () => {
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
          <h2 className={styles.sectionTitle}>Tentang Pembinaan</h2>
          <p>Pelatihan ini dirancang untuk menghasilkan tenaga Ahli K3 yang kompeten di bidang Elevator & Eskalator sesuai standar Kemnaker RI.</p>
          <p><strong>Jadwal Terdekat:</strong> 10 – 22 November 2025 & 5 – 17 Desember 2025</p>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Fasilitas & Persyaratan</h2>
          <Row>
            <Col md={6}>
              <h5 className="text-warning fw-semibold mb-3">Fasilitas</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat, SKP & Kartu Kewenangan dari Kemnaker RI</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat Kepesertaan dari Penyelenggara</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> E-Modul / Bahan Ajar</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Ruang Kelas & perlengkapannya</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Lunch & Coffee Break</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Training Kit</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5 className="text-warning fw-semibold mb-3">Persyaratan Peserta</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sehat Jasmani & Rohani</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Pendidikan minimal D3/S1 Teknik + pengalaman 3 tahun</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Surat Keterangan Kerja</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Email pribadi aktif (Google)</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Laptop / PC</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Bersedia hadir penuh selama pelatihan</li>
              </ul>
            </Col>
          </Row>
        </div>

        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Biaya & Fasilitas</h2>
          <p><strong className="text-warning">Rp. 15.000.000,- / Peserta</strong> (tidak termasuk pajak, akomodasi & penginapan)</p>
          <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat & SKP Kemnaker RI</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> E-Modul & Training Kit</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Lunch & Coffee Break</li>
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

export default AhliK3Elevator;
