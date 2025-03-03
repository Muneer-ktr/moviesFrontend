import React, { useEffect, useState } from 'react';
import { getMoviedetails } from '../services/Allapi';
import { useParams } from 'react-router-dom';
import { baseURL } from '../services/BaseURL';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import ads from '../assets/joyalukkas.jpg';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

function Movies() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const { width } = useWindowSize();
  const isMobile = width <= 992; 

  const getmoviesbyid = async () => {
    try {
      const response = await getMoviedetails(id);
      setMovie(response.data);
    } catch (error) {
      console.error('Error fetching movie:', error);
    }
  };

  useEffect(() => {
    getmoviesbyid();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} color="#ffc107" />);
    }
    if (halfStar) {
      stars.push(<FaStarHalfAlt key="half" color="#ffc107" />);
    }
    while (stars.length < 5) {
      stars.push(<FaRegStar key={stars.length} color="#ffc107" />);
    }

    return stars;
  };

  const styles = {
    pageContainer: {
      display: 'flex',
      width: '100%',
      minHeight: '100vh',
      margin: '0 auto',
      boxSizing: 'border-box',
      flexDirection: isMobile ? 'column' : 'row',
      backgroundColor: 'black',
      color: 'white',  
      
    },
    sideAd: {
      display: isMobile ? 'none' : 'flex',
      width: isMobile ? '0' : '20%',
      position: 'sticky',
      top: '20px',
      flexDirection: 'column',
      gap: '0px',
      padding: isMobile ? '0' : '20px 10px',
      height: '100%',
    },
    adBox: {
      backgroundColor: '#f2f2f2',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      marginBottom: '20px',
      height: '480px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    verticalAdImage: {
      width: '100%',
      height: '100%',
      objectFit: 'fill',
      display: 'block',
    },
    container: {
      flex: '1',
      width: isMobile ? '100%' : '60%',
      padding: isMobile ? '10px' : '20px',
      boxSizing: 'border-box',
      overflow: 'auto',
    },
    moviePoster: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    movieInfo: {
      padding: '20px 0',
      borderBottom: '1px solid #eee',
    },
    infoText: {
      margin: '8px 0',
      color: 'white',  
      fontSize: isMobile ? '0.9rem' : '1rem',
    },
    playTrailer: {
      display: 'inline-block',
      padding: isMobile ? '10px 20px' : '12px 24px',
      backgroundColor: '#e50914',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '6px',
      marginTop: '20px',
      marginBottom: '30px',
      transition: 'background-color 0.3s ease',
    },
    castSection: {
      marginTop: '30px',
    },
    castTitle: {
      fontSize: isMobile ? '1.3rem' : '1.5rem',
      fontWeight: '600',
      marginBottom: '20px',
      color: 'white',  
      textTransform: 'capitalize',
      textAlign: 'center',
    },
    castGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile 
        ? 'repeat(auto-fill, minmax(100px, 1fr))'
        : 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: isMobile ? '15px' : '20px',
      marginBottom: '30px',
    },
    castItem: {
      textAlign: 'center',
    },
    castImage: {
      width: isMobile ? '100px' : '120px',
      height: isMobile ? '100px' : '120px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    castName: {
      fontWeight: '600',
      color: 'white',  
      marginTop: '8px',
      fontSize: isMobile ? '0.9rem' : '1rem',
    },
    newsContainer: {
      position: 'relative',
      background: 'rgba(255, 255, 255, 0.25)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      padding: isMobile ? '20px' : '30px',
      marginTop: '30px',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      maxWidth: '100%',
      overflow: 'hidden',
    },
    newsContent: {
      lineHeight: '1.8',
      color: 'white',  
      fontSize: isMobile ? '1rem' : '1.1rem',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
      wordWrap: 'break-word',
      whiteSpace: 'pre-wrap',
      overflowWrap: 'break-word',
      hyphens: 'auto',
    },
  };

  const AdSection = () => (
    <div style={styles.sideAd}>
      <div style={styles.adBox}>
        <img src={ads} alt="Ad 1" style={styles.verticalAdImage} />
      </div>
      <div style={styles.adBox}>
        <img src={ads} alt="Ad 2" style={styles.verticalAdImage} />
      </div>
    </div>
  );

  return (
    <div style={styles.pageContainer}>
      {!isMobile && <AdSection />}

      <div style={styles.container}>
        <div>
          <img
            src={`${baseURL}/uploads/${movie.poster}`}
            alt={movie.title}
            style={styles.moviePoster}
          />
        </div>

        <div style={styles.movieInfo}>
          <p><strong>Rating:</strong> {movie.rating}/5 {renderStars(movie.rating)}</p>
          <p style={styles.infoText}><strong>Year:</strong> {movie.year}</p>
          <p style={styles.infoText}><strong>Genre:</strong> {movie.genre}</p>
          <p style={styles.infoText}><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p style={styles.infoText}><strong>Director:</strong> {movie.director}</p>
          <p style={styles.infoText}><strong>Producers:</strong> {movie.producer}</p>
        </div>

        <a
          href={movie.trailerUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.playTrailer}
          onMouseOver={(e) => e.target.style.backgroundColor = '#f40612'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#e50914'}
        >
          Play Trailer
        </a>

        <div style={styles.castSection}>
          <h4 style={styles.castTitle}>Cast</h4>
          <div style={styles.castGrid}>
            {movie.cast && movie.cast.map((actor, index) => (
              <div key={index} style={styles.castItem}>
                <img
                  src={`${baseURL}/uploads/${actor.image}`}
                  alt={actor.name}
                  style={styles.castImage}
                />
                <p style={styles.castName}>{actor.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.newsContainer}>
          <div style={styles.newsContent}>
            <p>{movie.description}</p>
          </div>
        </div>
      </div>

      {!isMobile && <AdSection />}
    </div>
  );
}

export default Movies;