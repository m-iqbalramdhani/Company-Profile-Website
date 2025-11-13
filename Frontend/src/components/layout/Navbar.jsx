import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const currentPath = window.location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const isActive = (path) => {
    return path === '/' ? currentPath === '/' : currentPath.startsWith(path);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(10px)'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontWeight: '700',
              color: '#1C352D',
              textDecoration: 'none',
              fontSize: '1.3rem',
              fontFamily: "'Space Grotesk', sans-serif"
            }}
          >
            <img
              src="/assets/images/Logo.png"
              alt="Geo Mandiri Kreasi"
              style={{ height: '50px', objectFit: 'contain' }}
            />
            Geo Mandiri Kreasi
          </a>

          {/* Hamburger (mobile only) */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                fontSize: '1.8rem',
                background: 'none',
                border: 'none',
                color: '#1C352D',
                cursor: 'pointer'
              }}
            >
              ☰
            </button>
          )}

          {/* Nav Links */}
          <div
            style={{
              display: isMobile ? (menuOpen ? 'flex' : 'none') : 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: isMobile ? 'flex-start' : 'center',
              gap: isMobile ? '1rem' : '32px',
              position: isMobile ? 'absolute' : 'static',
              top: '100%',
              left: 0,
              backgroundColor: '#ffffff',
              width: isMobile ? '100%' : 'auto',
              padding: isMobile ? '1rem' : 0,
              boxShadow: isMobile ? '0 2px 8px rgba(0, 0, 0, 0.1)' : 'none',
              marginLeft: isMobile ? 0 : 'auto', // ini penting: dorong ke kanan di desktop
              zIndex: 1000
            }}
          >
            {[
              { label: 'Beranda', path: '/' },
              { label: 'Pembinaan', path: '/pembinaan' },
              { label: 'Tentang Kami', path: '/tentang' },
              { label: 'Hubungi Kami', path: '/hubungi' },
            ].map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`nav-link ${isActive(item.path) ? 'nav-link--active' : ''}`}
                style={{
                  fontWeight: '600',
                  fontSize: '1rem',
                  textDecoration: 'none',
                  color: '#1C352D',
                  position: 'relative',
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for underline effect */}
      <style>{`
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: #1C352D;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

       

        .nav-link--active::after {
          width: 0 !important;
        }

        @media (max-width: 768px) {
          .nav-link {
            padding: 0.5rem 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
