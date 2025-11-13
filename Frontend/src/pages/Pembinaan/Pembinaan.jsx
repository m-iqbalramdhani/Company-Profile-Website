import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge } from 'react-bootstrap';
import axios from 'axios';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import './Pembinaan.css'; // pastikan import CSS di sini

const Pembinaan = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterYear, setFilterYear] = useState('all');
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [showEmptySearchError, setShowEmptySearchError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://pblweb01b01.cloud:3017/api/riwayat');
        setAllData(response.data);
      } catch (error) {
        console.error('Gagal mengambil data:', error);
      }
    };
    fetchData();
  }, []);

  const yearOptions = [
    { value: 'all', label: 'Semua Tahun' },
    { value: '2025', label: '2025' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setShowEmptySearchError(true);
      setHasSearched(false);
      setFilteredData([]);
      setShowLoadMore(false);
      return;
    }

    setShowEmptySearchError(false);
    setHasSearched(true);

    const filtered = allData.filter((item) => {
      const matchesQuery =
        (item.nama?.toUpperCase() || '').includes(searchQuery.toUpperCase()) ||
        (item.perusahaan?.toUpperCase() || '').includes(searchQuery.toUpperCase()) ||
        (item.alamat?.toUpperCase() || '').includes(searchQuery.toUpperCase());

      if (filterYear === 'all') return matchesQuery;
      const yearMatch = String(item.tahun) === filterYear;

      return matchesQuery && yearMatch;
    });

    setFilteredData(filtered);
    setShowLoadMore(filtered.length > 15);
  };

  const handleLoadMore = () => {
    setFilteredData(allData);
    setShowLoadMore(false);
  };

  return (
    <>
      <Navbar />
      <div className="pembinaan-page">

      {/* Hero Section */}
      <section className="hero-card">
        <Container>
          <h1 className="hero-title">Data Pembinaan K3</h1>
          <p className="hero-subtitle">
            Telusuri data pembinaan dengan cepat berdasarkan nama atau perusahaan.
          </p>

          <Card className="search-card">
            <Card.Body>
              <Form onSubmit={handleSearch} className="row g-3 align-items-center">
                <Col xs={12} md={7}>
                  <Form.Control
                    type="text"
                    placeholder="Ketik nama atau perusahaan"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setShowEmptySearchError(false);
                    }}
                    className="search-input"
                  />
                  {showEmptySearchError && (
                    <div className="text-danger  ">
                      ⚠️ Kolom pencarian harus diisi terlebih dahulu
                    </div>
                  )}
                </Col>
                <Col xs={12} md={3}>
                  <Form.Select
                    value={filterYear}
                    onChange={(e) => setFilterYear(e.target.value)}
                    className="year-select"
                  >
                    {yearOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Form.Select>
                </Col>
                <Col xs={12} md={2} className="d-grid">
                 <Button 
            type="submit" 
          variant="link" 
          className="btn-search"
          >
          Cari
          </Button>
                </Col>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </section>

      {/* Results Section */}
      <section className="results-section">
        <Container>
          {!hasSearched && !showEmptySearchError && (
            <p className="hint-text text-center">
              Ketikkan nama atau perusahaan untuk mulai mencari data pembinaan 
            </p>
          )}

          {hasSearched && filteredData.length === 0 && (
            <p className="text-center text-danger mt-4">
              Tidak ditemukan hasil untuk pencarian "<strong>{searchQuery}</strong>".
            </p>
          )}

          {hasSearched && filteredData.length > 0 && (
            <>
              <Row className="g-4">
                {filteredData.map((item) => (
                  <Col key={item.id_riwayat} xs={12} md={6} lg={4}>
                    <Card className="result-card">
                      <Card.Body>
                        <Card.Title className="fw-bold text-dark mb-2">
                          {item.nama}
                        </Card.Title>
                        <Badge className="badge-type mb-2">{item.jenis_personil}</Badge>
                        <p className="small mb-1">
                          <strong>🏢 Perusahaan:</strong> {item.perusahaan}
                        </p>
                        {item.tahun && (
                          <p className="small mb-1">
                            <strong>📅 Tahun:</strong> {item.tahun}
                          </p>
                        )}
                      </Card.Body>
                  
                    </Card>
                  </Col>
                ))}
              </Row>

              {showLoadMore && (
                <div className="text-center mt-4">
                  <Button onClick={handleLoadMore} className="btn-load-more">
                    Muat Lebih Banyak
                  </Button>
                </div>
              )}
            </>
          )}
        </Container>
      </section>

   
      
    </div>
        <Footer />
    </>
  );
};

export default Pembinaan;
