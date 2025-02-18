import React, { useEffect, useState } from 'react';
import { getMoviedetails } from '../services/Allapi';
import { useParams } from 'react-router-dom';
import { baseURL } from '../services/BaseURL';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

function Movies() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

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
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      boxSizing: 'border-box',
    },
    adContainer: {
      padding: '0 10px',
      marginBottom: '20px',
      overflow: 'hidden',
    },
    adImage: {
      width: '100%',
      height: 'auto',
      display: 'block',
      borderRadius: '8px',
    },
    moviePoster: {
      width: '100%',
      maxWidth: '1200px',
      height: 'auto',
      objectFit: 'cover',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    },
    movieInfo: {
      padding: '20px 0',
      borderBottom: '1px solid #eee',
    },
    rating: {
      fontSize: '1.2rem',
      color: '#1a1a1a',
      marginBottom: '10px',
    },
    infoText: {
      margin: '8px 0',
      color: '#4a4a4a',
      fontSize: '1rem',
    },
    playTrailer: {
      display: 'inline-block',
      padding: '12px 24px',
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
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '20px',
      color: '#1a1a1a',
      textTransform: 'capitalize',
      textAlign: 'center',
    },
    castGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '20px',
      marginBottom: '30px',
    },
    castItem: {
      textAlign: 'center',
    },
    castImage: {
      width: '120px',
      height: '120px',
      borderRadius: '60px',
      objectFit: 'cover',
      marginBottom: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    castName: {
      fontWeight: '600',
      color: '#2a2a2a',
      marginTop: '8px',
    },
    newsContainer: {
      position: 'relative',
      background: 'rgba(255, 255, 255, 0.25)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderRadius: '16px',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      padding: '30px',
      marginTop: '30px',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      maxWidth: '100%',
      overflow: 'hidden',
    },
    newsContent: {
      lineHeight: '1.8',
      color: '#2a2a2a',
      fontSize: '1.1rem',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
      wordWrap: 'break-word',
      whiteSpace: 'pre-wrap',
      overflowWrap: 'break-word',
      hyphens: 'auto',
    },
    // Styling for ad sections
    adSection: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '30px',
      gap: '20px',
    },
    adBox: {
      width: '48%', // Takes up almost half of the container
      backgroundColor: '#f2f2f2',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    adText: {
      padding: '10px',
      textAlign: 'center',
      color: '#333',
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    adImageSection: {
      width: '100%',
      height: 'auto',
      display: 'block',
      borderRadius: '8px',
    },
    // Media Queries for responsiveness
    '@media (max-width: 768px)': {
      container: {
        padding: '10px',
      },
      adSection: {
        flexDirection: 'column', // Stack ads vertically on smaller screens
        gap: '10px',
      },
      adBox: {
        width: '100%', // Ad boxes take full width on mobile
      },
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
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
      <div style={styles.adBox}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/000/701/690/small_2x/abstract-polygonal-banner-background.jpg"
            alt="Ad 1"
            style={styles.adImageSection}
          />
          <div style={styles.adText}>Advertisement 1</div>
        </div>
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

      {/* Ad Sections */}
      <div style={styles.adSection}>
        <div style={styles.adBox}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/000/701/690/small_2x/abstract-polygonal-banner-background.jpg"
            alt="Ad 2"
            style={styles.adImageSection}
          />
          <div style={styles.adText}>Advertisement 2</div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
