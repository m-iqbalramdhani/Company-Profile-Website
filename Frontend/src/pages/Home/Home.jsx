import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  Accordion,
  Image,
  Carousel,
} from "react-bootstrap";
import { Briefcase, HardHat, Headset } from "lucide-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import ServiceCard from "../../components/ui/ServiceCard";
import ModalOption from "../../components/ui/ModalOption";
import "./Home.css";

const Home = () => {
  const [showK3Modal, setShowK3Modal] = useState(false);
  const [showElevatorModal, setShowElevatorModal] = useState(false);
  const [showKonstruksiModal, setShowKonstruksiModal] = useState(false);
  const [showListrikModal, setShowListrikModal] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // FAQ Items
  const faqItems = [
    {
      question: "Bagaimana PT. Geo Mandiri Group mendukung pembangunan nasional?",
      answer:
        "PT. Geo Mandiri Group mendukung pembangunan nasional melalui jasa konsultansi terintegrasi yang profesional dan berbasis analisis objektif. Kami membantu pemerintah, perusahaan, dan lembaga lainnya dalam merancang, mengawasi, dan mengelola proyek-proyek yang berkontribusi pada kemajuan sosial, ekonomi, dan infrastruktur Indonesia.",
    },
    {
      question: "Apakah layanan utama yang ditawarkan oleh PT. Geo Mandiri Group?",
      answer:
        "Kami menyediakan berbagai layanan profesional seperti konsultansi manajemen, pelatihan sumber daya manusia, dan penyelenggaraan event. Setiap layanan kami rancang untuk memberikan solusi strategis yang efektif bagi klien dalam mencapai tujuan pengembangan dan peningkatan kapasitas organisasi.",
    },
    {
      question: "Apa saja layanan yang ditawarkan oleh Geo Mandiri Group?",
      answer:
        "Kami menawarkan berbagai layanan konsultansi yang meliputi:\n- Perencanaan Proyek – Membantu merencanakan proyek dari awal hingga selesai dengan pendekatan yang terstruktur.\n- Studi dan Analisis – Melakukan studi kelayakan dan analisis risiko untuk memastikan proyek berjalan dengan lancar.\n- Pengawasan dan Manajemen Proyek – Mengawasi pelaksanaan proyek serta memastikan semua tahapan berjalan sesuai rencana.\n- Training Center – Memberikan pelatihan dan pengembangan keterampilan untuk profesional di bidangnya.\n- Event Management – Menyediakan jasa perencanaan dan pelaksanaan acara yang sukses.",
    },
    {
      question: "Bagaimana cara menghubungi Geo Mandiri Group?",
      answer:
        "Anda dapat menghubungi kami melalui halaman kontak di website kami atau langsung melalui email dan nomor telepon yang tercantum di bagian bawah halaman ini. Kami siap membantu Anda dengan pertanyaan lebih lanjut atau untuk memulai proyek bersama kami.",
    },
  ];

  // Client logos
  const clients = [
    "asw.png", "cikarang.png", "cogindo.png", "conch.png", "ecolab.png",
    "gunas.png", "inalum.png", "indofoodcbp.png", "indolakto.png",
    "japfa.png", "maju-bersama.png", "nok.png", "otsuka.png",
    "philips.png", "timas.png", "ultamilk.png", "yakult.png",
  ];

  return (
  <div className="content-wrapper">
    {/* Navbar */}
    <Navbar />

{/* Banner Carousel */}
 <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/assets/images/img1.png"
            className="d-block w-100 carousel-image"
            alt="Slide 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/images/img2.png"
            className="d-block w-100 carousel-image"
            alt="Slide 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/images/img3.png"
            className="d-block w-100 carousel-image"
            alt="Slide 3"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/images/img4.png"
            className="d-block w-100 carousel-image"
            alt="Slide 4"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    {/* Cards Section */}
    <div className="card-container">
      <h2 className="section-title">Bidang Keahlian</h2>
      
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6} lg={3} className="mb-4 text-center">
            <ServiceCard
              title="Bidang Keahlian K3 Umum"
              image="assets/images/k3umum.png"
              onClick={() => setShowK3Modal(true)}
            />
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-4 text-center">
            <ServiceCard
              title="Bidang Elevator Escalator"
              image="/assets/images/k3elevator.png"
              onClick={() => setShowElevatorModal(true)}
            />
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-4 text-center">
            <ServiceCard
              title="Bidang Konstruksi Bangunan"
              image="/assets/images/contruction.jpg"
              onClick={() => setShowKonstruksiModal(true)}
            />
          </Col>
          <Col xs={12} md={6} lg={3} className="mb-4 text-center">
            <ServiceCard
              title="Bidang Listrik"
              image="/assets/images/k3listrik.png"
              onClick={() => setShowListrikModal(true)}
            />
          </Col>
        </Row>
      </Container>
    </div>


      {/* Keunggulan Kami */}
      <section className="features-section">
        <Container className="my-5">
          <div className="text-center">
            <h2 className="features-title">Keunggulan Kami</h2>
          </div>
          <Row className="justify-content-center text-center mt-4">
            <Col md={3} className="feature-item">
              <Briefcase className="feature-icon" />
              <h5 className="feature-title">Kualitas Terjamin</h5>
              <p className="feature-description">
                Kami selalu mengutamakan standar tinggi pada setiap layanan yang
                diberikan.
              </p>
            </Col>
            <Col md={3} className="feature-item">
              <HardHat className="feature-icon" />
              <h5 className="feature-title">Berpengalaman</h5>
              <p className="feature-description">
                Didukung oleh tim profesional yang berpengalaman di bidangnya.
              </p>
            </Col>
            <Col md={3} className="feature-item">
              <Headset className="feature-icon" />
              <h5 className="feature-title">Layanan Responsif</h5>
              <p className="feature-description">
                Kepuasan pelanggan menjadi prioritas utama dengan pelayanan
                cepat dan tepat.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Hero Content Section */}
      {/* Hero Content Section */}
{/* Hero Content Section */}
<section className="hero-section" style={{ backgroundColor: 'var(--color-bg-light)' }}>
  <Container>
    <Row className="align-items-center g-4">
      {/* Teks */}
      <Col xs={12} md={6} className="hero__text-column text-center text-md-start">
        <h1 className="hero__title mb-4 text-main" style={{ fontWeight: 700 }}>
          Geo Mandiri Group
        </h1>
        <p className="subtext text-secondary mb-4">
          Tingkatkan Karier Anda dengan Sertifikasi K3 dan Raih Sertifikasi Profesional
        </p>
        <p className="text-secondary mb-5" style={{ fontWeight: 500, lineHeight: 1.6 }}>
          Dapatkan pelatihan berkualitas, sertifikasi resmi, dan dukungan karier dari ahli K3 terpercaya.<br />
          <strong>Tempat terbatas</strong> — mulai perjalanan profesional Anda hari ini!
        </p>
        <div className="d-grid gap-3 d-md-block">
          <button
            className="btn btn-lg hero-cta-button fw-bold rounded-pill shadow-sm"
            style={{
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))',
              border: 'none',
              color: '#FFFFFF',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 6px 16px rgba(0, 102, 204, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 2px 8px rgba(0, 102, 204, 0.2)';
            }}
          >
            Daftar Sekarang
          </button>
        </div>
      </Col>

      {/* Gambar - Responsif */}
      <Col xs={12} md={6} className="hero__pictures-column">
        <div className="hero-image-group">
          <div className="hero-image-stack">
            <Image
              src="/assets/images/k3listrik.png"
              className="hero-img tall"
              alt="Pelatihan K3 Listrik"
            />
            <Image
              src="/assets/images/k3elevator.png"
              className="hero-img medium"
              alt="Pelatihan K3 Elevator"
            />
          </div>
          <div className="hero-image-stack">
            <Image
              src="/assets/images/k3umum.png"
              className="hero-img medium"
              alt="Pelatihan K3 Umum"
            />
            <Image
              src="/assets/images/teknisielevator.png"
              className="hero-img tall"
              alt="Teknisi Elevator"
            />
          </div>
        </div>
      </Col>
    </Row>
  </Container>
</section>
      {/* Video Gallery */}
<section className="video-gallery">
  <div className="container">
    <h2 className="section-title">Video Pelatihan Kami</h2>
    <div className="video-grid">
      {/* Top Row - 3 videos */}
      <div className="video-card">
        <iframe 
          src="https://www.youtube.com/embed/kZnc1AWg7lo?si=rADsCrRw51LSc_5" 
          title="Pelatihan K3 Umum - Batch Terbaru"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-card">
        <iframe 
          src="https://www.youtube.com/embed/RpOjR6cxYAA?si=VTevK_puSXXpbcLf" 
          title="Simulasi Praktek Lapangan"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-card">
        <iframe 
          src="https://www.youtube.com/embed/nOCrjoWghzg?si=KyRKUNVLcLPoIGbB" 
          title="Sertifikasi Internasional"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      
      {/* Bottom Row - 2 videos */}
      <div className="video-card">
        <iframe 
          src="https://www.youtube.com/embed/T1htnCX2WfQ?si=VtTiwqC-hK2-iS1d" 
          title="Video 4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-card">
        <iframe 
          src="https://www.youtube.com/embed/0ih4Ogqebe4?si=AtIq9k9OgrSUHRTV" 
          title="Video 5"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</section>
    
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Testimoni Alumni</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="testimonial-card">
                <img src="https://placehold.co/100x100/2D5016/FFFFFF?text=AP" alt="Andi Prasetyo" className="testimonial-avatar" />
                <p className="testimonial-text">"Pelatihan K3 dari Geo Mandiri Group meningkatkan kesadaran kita dan budaya kerja aman di perusahaan kami."</p>
                <div className="testimonial-name">Andi Prasetyo</div>
                <div className="testimonial-company">HR Manager, PT Energi Nusantara</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <img src="https://placehold.co/100x100/4A7C59/FFFFFF?text=DK" alt="Dewi Kartika" className="testimonial-avatar" />
                <p className="testimonial-text">"Kami mengikuti program pembinaan SMK3 dan hasilnya sangat positif dan seru. Proses kerja lebih tertata banget lagi"</p>
                <div className="testimonial-name">Dewi Kartika</div>
                <div className="testimonial-company">Project Coordinator, PT Cipta Konstruksi</div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <img src="https://placehold.co/100x100/8A9A5B/FFFFFF?text=RH" alt="Rudi Hartono" className="testimonial-avatar" />
                <p className="testimonial-text">"Layanan Geo Mandiri Group sangat responsif dan profesional. Mereka memahami kebutuhan perusahaan dengan baik."</p>
                <div className="testimonial-name">Rudi Hartono</div>
                <div className="testimonial-company">Safety Officer, PT Maju Bersama</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="clients-section">
        <Container className="featured-in">
          <h3 className="clients-title">
            Bekerja Sama Dengan lebih dari 50+ Perusahaan
          </h3>
          <div className="clients-wrapper">
            <div className="clients-logos">
              {clients.map((client, index) => (
                <div key={index} className="client-logo">
                  <Image
                    src={`/assets/images/perusahaan/${client}`}
                    alt={`Client ${index + 1}`}
                  />
                </div>
              ))}
              {clients.map((client, index) => (
                <div key={`duplicate-${index}`} className="client-logo">
                  <Image
                    src={`/assets/images/perusahaan/${client}`}
                    alt={`Client ${index + 1 + clients.length}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <Container>
          <Row className="justify-content-center text-center mb-3">
            <Col lg={8} xl={7}>
              <h1 className="faq-title">
                Temukan jawaban atas pertanyaan PT. Geo Mandiri Kreasi
                            </h1>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col md={5} className="faq-left">
              <h2 className="faq-title">Tentang Geo Mandiri Group</h2>
              <p className="text-dark">
                PT. Geo Mandiri Group merupakan perusahaan jasa konsultan yang
                berfokus pada berbagai aspek pembangunan nasional, termasuk
                perencanaan, studi, pengukuran, pengawasan, dan manajemen.
                Dengan pengalaman yang matang, kami siap memberikan layanan
                konsultansi yang profesional dan objektif untuk berbagai sektor.
              </p>
            </Col>
            <Col md={7} className="faq-right">
              <Accordion>
                {faqItems.map((item, index) => (
                  <Accordion.Item
                    eventKey={index.toString()}
                    key={index}
                    className="mb-2"
                  >
                    <Accordion.Header
                      onClick={() => toggleAccordion(index)}
                      style={{ backgroundColor: "#f8f9fa", color: "#212529" }}
                    >
                      <div className="text-muted me-3">
                        <svg
                          className="bi bi-question-circle-fill"
                          fill="currentColor"
                          height="24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247zm2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z"></path>
                        </svg>
                      </div>
                      {item.question}
                    </Accordion.Header>
                    <Accordion.Body>
                      {item.answer.split("\n").map((line, i) =>
                        line.startsWith("-") ? (
                          <div key={i} className="ms-4 mt-2">
                            <span className="text-warning">{line}</span>
                          </div>
                        ) : (
                          <p key={i} className="mb-2">
                            {line}
                          </p>
                        )
                      )}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      {/* card 1 */}
      <Modal
        show={showK3Modal}
        onHide={() => setShowK3Modal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Pilih Kategori</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row
            className="justify-content-center text-center g-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              rowGap: "30px",
            }}
          >
            <Col
              xs={12}
              sm={6}
              md={4}
              className="d-flex justify-content-center"
            >
              <ModalOption
                image="/assets/images/ahlik3-umum.png"
                title="Ahli K3 Umum"
                link="/ahli-k3-umum"
                style={{
                  width: "230px",
                  height: "260px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Col>

            <Col
              xs={12}
              sm={6}
              md={4}
              className="d-flex justify-content-center"
            >
              <ModalOption
                image="/assets/images/auditorsmk3.png"
                title="Auditor SMK3"
                link="/auditor-smk3"
                style={{
                  width: "230px",
                  height: "260px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/* card 2 */}

      <Modal
        show={showElevatorModal}
        onHide={() => setShowElevatorModal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Pilih Kategori</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row
            className="justify-content-center text-center g-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              rowGap: "30px",
            }}
          >
            <Col
              xs={12}
              sm={6}
              md={4}
              className="d-flex justify-content-center"
            >
              <ModalOption
                image="/assets/images/ahlik3_elevator-eskalator.png"
                title="Ahli K3 Elevator dan Eskalator"
                link="/ahli-k3-elevator"
                style={{
                  width: "230px",
                  height: "260px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Col>
            <Col
              xs={12}
              sm={6}
              md={4}
              className="d-flex justify-content-center"
            >
              <ModalOption
                image="/assets/images/operatoreskalator.png"
                title="Operator Elevator dan Eskalator"
                link="/operator-elevator"
                style={{
                  width: "230px",
                  height: "260px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Col>

            <Col
              xs={12}
              sm={6}
              md={4}
              className="d-flex justify-content-center"
            >
              <ModalOption
                image="/assets/images/teknisielevator.png"
                title="Teknisi Elevator dan Eskalator"
                link="/teknisi-elevator"
                style={{
                  width: "230px",
                  height: "260px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/* card 3 */}

      <Modal
        show={showKonstruksiModal}
        onHide={() => setShowKonstruksiModal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Pilih Kategori</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row
            className="justify-content-center text-center g-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              rowGap: "30px",
            }}
          >
            <Col
              xs={12}
              sm={6}
              md={4}
              className="d-flex justify-content-center"
            >
              <ModalOption
                image="/assets/images/ahlik3konstruksi.png"
                title="Ahli K3 Muda Konstruksi"
                link="/ahli-k3-konstruksi"
                style={{
                  width: "230px",
                  height: "260px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Col>
            <Col
              xs={12}
              sm={6}
              md={4}
              className="d-flex justify-content-center"
            >
              <ModalOption
                image="/assets/images/supervisikeperancangan.png"
                title="Supervisi K3 Perancangan"
                link="/supervisi-k3-perancangan"
                style={{
                  width: "230px",
                  height: "260px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Col>

            <Col
              xs={12}
              sm={6}
              md={4}
              className="d-flex justify-content-center"
            >
              <ModalOption
                image="/assets/images/teknisiK3Perancah.png"
                title="Teknisi K3 Perancah Implementasi "
                link="/teknisi-k3-perancah"
                style={{
                  width: "230px",
                  height: "260px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      {/* card 4 */}

      <Modal
        show={showListrikModal}
        onHide={() => setShowListrikModal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Pilih Kategori</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row
            className="justify-content-center text-center g-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              rowGap: "30px",
            }}
          >
            <Col
              xs={12}
              sm={6}
              md={4}
              className="d-flex justify-content-center"
            >
              <ModalOption
                image="/assets/images/contruction.jpg"
                title="Ahli K3 Spesialis Listrik"
                link="/ahlik3listrik"
                style={{
                  width: "230px",
                  height: "260px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Col>
            

            <Col
              xs={12}
              sm={6}
              md={4}
              className="d-flex justify-content-center"
            >
              <ModalOption
                image="/assets/images/contruction.jpg"
                title="Teknisi Listrik"
                link="/teknisi-listrik"
                style={{
                  width: "230px",
                  height: "260px",
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                  cursor: "pointer",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
