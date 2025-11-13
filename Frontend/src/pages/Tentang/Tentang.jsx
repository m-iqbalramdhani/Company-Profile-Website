import React, { useRef, useState } from 'react';
import styles from './Tentang.module.css';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

function App() {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handlePlayPauseClick = (e) => {
    e.preventDefault();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        // Remove muted attribute to enable sound
        videoRef.current.muted = false;
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.divider}></div>
            <span>Tentang Kami</span>
            <div className={styles.divider}></div>
          </div>
          
          <div className={styles.contentWrapper}>
            <div 
              className={styles.imageContainer}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <video
                ref={videoRef}
                className={styles.architectureVideo}
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="./assets/images/Compro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {isHovered && !isPlaying && (
                <div className={styles.playOverlay} onClick={handlePlayPauseClick}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              )}
              
              {isPlaying && isHovered && (
                <div className={styles.pauseOverlay} onClick={handlePlayPauseClick}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="white">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                  </svg>
                </div>
              )}
            </div>
            
            <div className={styles.textContent}>
              <h1 className={styles.highlight}>GEO MANDIRI KREASI</h1>
              
              <p className={styles.paragraph}>
PT. Geo Mandiri Kreasi dan PT. Geo Mandiri Utama adalah mitra terpercaya dalam menyediakan solusi terpadu di bidang pelatihan keselamatan, inspeksi teknis, dan manajemen acara profesional di seluruh Indonesia.

 
              </p>
              
              <p className={styles.paragraph}>
               Berlandaskan profesionalisme dan didorong oleh inovasi, kami menjunjung tinggi standar tertinggi dalam kualitas, kejelasan, dan keandalan. Misi kami sederhana namun kuat: mendukung keberhasilan Anda melalui layanan yang tidak hanya memenuhi aspek kepatuhan dan kompetensi—tetapi juga mudah dipahami, intuitif, dan disesuaikan dengan kebutuhan unik Anda.
              </p>
              
 
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;