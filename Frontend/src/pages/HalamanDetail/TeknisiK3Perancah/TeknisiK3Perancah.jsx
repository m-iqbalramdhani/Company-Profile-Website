import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import styles from './TeknisiK3Perancah.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const TeknisiK3Perancah = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* HERO */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>TEKNISI K3 PERANCAH</h1>
          <p>Pelatihan Teknis K3 Perancah</p>
          <p><strong>Pelatihan:</strong> Online / Offline | Durasi ± 8 Hari</p>
          <a href="/brosur.pdf" download className={styles.btnRegister + " mt-3"}>
            <i className="fa-solid fa-download text-dark me-2"></i>Download Brosur PDF
          </a>
        </div>
      </div>

      <Container className="my-5">
        {/* Tentang Pelatihan */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Tentang Pelatihan</h2>
          <p>Program ini mempersiapkan teknisi K3 khusus perancah dengan kemampuan teknis serta pemahaman regulasi dan praktik lapangan.</p>
        </div>

        {/* Fasilitas & Persyaratan */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Persyaratan & Fasilitas</h2>
          <Row>
            <Col md={6}>
              <h5 className="text-warning fw-semibold mb-3">Fasilitas</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat & Lisensi dari Kemnaker RI</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat Kepesertaan</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> E‑Modul / Bahan Ajar</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Zoom / media daring untuk sesi teori</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Fasilitas praktik & observasi lapangan</li>
              </ul>
            </Col>
            <Col md={6}>
              <h5 className="text-warning fw-semibold mb-3">Persyaratan Peserta</h5>
              <ul className="list-unstyled">
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sehat jasmani & rohani</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Pendidikan minimal SMA / SMK + pengalaman teknis</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Sudah bekerja → lampirkan Surat Keterangan Kerja</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Smartphone Android dgn aplikasi Teman K3</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Laptop / PC dengan Zoom & internet memadai</li>
                <li><FontAwesomeIcon icon={faCheckCircle} /> Bersedia hadir tanpa izin / absen selama pelatihan</li>
              </ul>
            </Col>
          </Row>
        </div>

        {/* Dokumen */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Administrasi & Dokumen</h2>
          <p>Wajib dikumpulkan H‑10 sebelum pelatihan:</p>
          <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Form Biodata (Word)</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Ijazah asli minimal SMA/SMK (warna) File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> KTP warna File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Surat Keterangan Kerja File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Pas foto latar merah File jpg</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Surat Keterangan Sehat File jpg / pdf</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Pakta Integritas bermaterai 10000 File jpg</li>
          </ul>
        </div>

        {/* Biaya */}
        <div className={styles.sectionGlass}>
          <h2 className={styles.sectionTitle}>Biaya & Fasilitas</h2>
          <p><strong className="text-warning">Rp. 8.000.000,- / Peserta</strong> (tidak termasuk pajak)</p>
          <ul className="list-unstyled">
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat & Lisensi dari Kemnaker RI</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Sertifikat Kepesertaan penyelenggara</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> E‑Modul / Bahan Ajar & Training Kit</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Zoom / media daring & praktek lapangan</li>
            <li><FontAwesomeIcon icon={faCheckCircle} /> Instruktur & Evaluator kompeten</li>
          </ul>
          <a href="https://www.geomandiri.co.id/pendaftaran.html" className={styles.btnRegister + " mt-3"}>
            <i className="fa-solid fa-pen-to-square text-dark me-2"></i>Daftar Sekarang
          </a>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default TeknisiK3Perancah;
