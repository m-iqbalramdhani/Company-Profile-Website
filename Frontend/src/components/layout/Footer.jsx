import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white py-5" style={{ fontFamily: 'system-ui, sans-serif',backgroundColor: '#1C352D' }}>
      <Container >
        <Row className="g-4 align-items-start">

     
          <Col md={4}>
            <div className="d-flex align-items-center mb-3">
               
              <h5 className="fw-bold mb-0 ms-2" style={{ color: '#fff' }}>
                GEO MANDIRI KREASI
              </h5>
            </div>

            <p className="mb-3" style={{ fontSize: '0.9rem', color: '#fff' }}>
              Memberdayakan profesional dengan konsultasi dan pelatihan K3 berkualitas untuk meningkatkan pertumbuhan bisnis dan kompetensi.
            </p>

            <div>
              <img
                src="/assets/images/logofooter1.png"
                alt="Logo Tambahan"
                className="img-fluid"
                style={{ maxWidth: '350px' }}
              />
            </div>
          </Col>

          {/* Kolom 2: Kontak Kami — digeser ke kanan */}
          <Col md={3} className="ms-md-auto">
            <div className="mb-3">
              <h6 className="fw-bold" style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '6px' }}>
                Kontak Kami
              </h6>
              <div style={{ height: '2px', width: '40px', backgroundColor: '#fbbf24' }}></div>
            </div>
            <div>
              <div className="d-flex align-items-center mb-2">
                <MapPin size={16} className="me-2" style={{ color: '#fff' }} />
                <span >Jakarta, Indonesia</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <Phone size={16} className="me-2" style={{ color: '#fff' }} />
                <span >(021) 1234-5678</span>
              </div>
              <div className="d-flex align-items-center">
                <Mail size={16} className="me-2" style={{ color: '#fff' }} />
                <span >info@geomandiri.com</span>
              </div>
            </div>
          </Col>

          {/* Kolom 3: Lokasi Kami — digeser ke kanan & maps diperbesar */}
          <Col md={4} className="d-flex flex-column align-items-start ms-md-4">
            <div className="mb-3">
              <h6 className="fw-bold" style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '6px' }}>
                Lokasi Kami
              </h6>
              <div style={{ height: '2px', width: '40px', backgroundColor: '#fbbf24' }}></div>
            </div>
            <div
              className="rounded overflow-hidden border"
              style={{
                width: '100%',
                maxWidth: '280px', // diperbesar dari 220px → 280px
                height: '180px',   // diperbesar dari 160px → 180px
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1237449347673!2d106.90418650856078!3d-6.247419961141666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f32b83252e77%3A0xd4495dbdb34e3f71!2sGeo%20Mandiri%20Kreasi.%20PT!5e0!3m2!1sid!2sid!4v1759558839954!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Geo Mandiri Location"
              ></iframe>
            </div>
          </Col>

        </Row>

        {/* Copyright */}
        <div className="text-center mt-5 pt-3 border-top border-light-subtle">
          <small className="text-white">
            © {new Date().getFullYear()} Geo Mandiri Group. All rights reserved.
          </small>
        </div>
      </Container>

      <style>{`
        .border-light-subtle {
          border-color: #e2e8f0 !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;