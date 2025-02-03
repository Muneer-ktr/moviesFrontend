import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      if (scrolled > 100 || (windowHeight + scrolled) >= documentHeight - 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Container styles
  const containerStyle = {
    position: 'fixed',
    bottom: visible ? '0' : '-100px',
    left: '0',
    right: '0',
    transition: 'bottom 0.3s ease-in-out',
    zIndex: 1000,
    padding: '1rem 0',
  };

  // Inner container styles
  const innerContainerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 15px'
  };

  // Button row styles
  const buttonRowStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '16px'
  };

  // Base button styles
  const baseButtonStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    outline: 'none',
    padding: 0,
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
  };

  // Button color styles
  const buttonStyles = {
    home: { ...baseButtonStyle, backgroundColor: '#3b5998' },
    whatsapp: { ...baseButtonStyle, backgroundColor: '#25d366' },
    facebook: { ...baseButtonStyle, backgroundColor: '#1877f2' },
    instagram: { ...baseButtonStyle, backgroundColor: '#e4405f' },
    twitter: { ...baseButtonStyle, backgroundColor: '#000000' }
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.1)';
    e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
  };

  return (
    <>
      <div style={{ height: '80px' }} />
      <footer style={containerStyle}>
        <div style={innerContainerStyle}>
          <div style={buttonRowStyle}>
            <button 
              style={buttonStyles.home}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              aria-label="Home"
            >
              <i className="fa-solid fa-house"></i>
            </button>
            
            <button 
              style={buttonStyles.whatsapp}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </button>
            
            <button 
              style={buttonStyles.facebook}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </button>
            
            <button 
              style={buttonStyles.instagram}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </button>
            
            <button 
              style={buttonStyles.twitter}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              aria-label="Twitter"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;