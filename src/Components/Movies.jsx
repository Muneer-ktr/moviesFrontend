// import React, { useEffect, useState } from 'react';
// import { getMoviedetails } from '../services/Allapi';
// import { useParams } from 'react-router-dom';

// function Movies() {

//     const [movies, setMovies] = useState([]);
//     const { id } = useParams();

  
//     const getmoviesbyid = async () => {
//       try {
//         const response = await getMoviedetails(id);
//         setMovies(response.data);
//         console.log(movies);
        
//       } catch (error) {
//         console.error('Error fetching movies:', error);
//       }
//     };
  
//     useEffect(() => {
//       getmoviesbyid();
//     }, [id]);
  
//   const styles = {
//     container: {
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '20px',
//     },
//     adContainer: {
//       padding: '0 10px',
//       marginBottom: '20px',
//       overflow: 'hidden',
//     },
//     adImage: {
//       width: '100%',
//       height: 'auto',
//       display: 'block',
//       borderRadius: '8px',
//     },
//     moviePoster: {
//       width: '100%',
//       height: 'auto',
//       borderRadius: '12px',
//       boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//     },
//     movieInfo: {
//       padding: '20px 0',
//       borderBottom: '1px solid #eee',
//     },
//     rating: {
//       fontSize: '1.2rem',
//       color: '#1a1a1a',
//       marginBottom: '10px',
//     },
//     infoText: {
//       margin: '8px 0',
//       color: '#4a4a4a',
//       fontSize: '1rem',
//     },
//     playTrailer: {
//       display: 'inline-block',
//       padding: '12px 24px',
//       backgroundColor: '#e50914',
//       color: 'white',
//       textDecoration: 'none',
//       borderRadius: '6px',
//       marginTop: '20px',
//       marginBottom: '30px',
//       transition: 'background-color 0.3s ease',
//     },
//     castSection: {
//       marginTop: '30px',
//     },
//     castTitle: {
//         fontSize: '1.5rem',
//         fontWeight: '600',
//         marginBottom: '20px',
//         color: '#1a1a1a',
//         textTransform: 'capitalize',
//         textAlign: 'center'
//       },
//     castGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
//       gap: '20px',
//       marginBottom: '30px',
//     },
//     castItem: {
//       textAlign: 'center',
//     },
//     castImage: {
//       width: '120px',
//       height: '120px',
//       borderRadius: '60px',
//       objectFit: 'cover',
//       marginBottom: '10px',
//       boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//     },
//     castName: {
//       fontWeight: '600',
//       color: '#2a2a2a',
//       marginTop: '8px',
//     },
//     newsContainer: {
//       backgroundColor: '#f8f9fa',
//       padding: '20px',
//       borderRadius: '8px',
//       marginTop: '30px',
//     },
//     newsContent: {
//       lineHeight: '1.6',
//       color: '#4a4a4a',
//     },
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.adContainer}>
//         <a>
//           <img 
//             src="https://static.vecteezy.com/system/resources/thumbnails/000/701/690/small_2x/abstract-polygonal-banner-background.jpg" 
//             alt="Advertisement Banner" 
//             style={styles.adImage}
//           />
//         </a>
//       </div>

//       <div style={styles.imageContainer}>
//         <img 
//           src="https://english.bigtvlive.com/wp-content/uploads/2025/01/Bazooka.png" 
//           alt="Bazooka Movie Poster" 
//           style={styles.moviePoster}
//         />
//       </div>

//       <div style={styles.movieInfo}>
//         <p style={styles.rating}>⭐⭐⭐⭐☆ 4.7/5 (Critics' Choice)</p>
//         <p style={styles.infoText}><strong>Year:</strong>2024</p>
//         <p style={styles.infoText}><strong>Jouner:</strong> Action Thriller</p>
//         <p style={styles.infoText}><strong>Release date:</strong> 2024 (India)</p>
//         <p style={styles.infoText}><strong>Director:</strong> Deeno Dennis</p>
//         <p style={styles.infoText}>
//           <strong>Producers:</strong> Dolwin Kuriakose, Vikram Mehra, Rohandeep Singh
//         </p>
//       </div>

//       <a 
//         href="https://www.youtube.com/watch?v=ru5Cku2t1JU" 
//         target="_blank" 
//         rel="noopener noreferrer"
//         style={styles.playTrailer}
//         onMouseOver={(e) => e.target.style.backgroundColor = '#f40612'}
//         onMouseOut={(e) => e.target.style.backgroundColor = '#e50914'}
//       >
//         Play Trailer
//       </a>

      // <div style={styles.castSection}>
      //   <h4 style={styles.castTitle}>Cast</h4>
      //   <div style={styles.castGrid}>
      //     <div style={styles.castItem}>
      //       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_e1PcQ3IkLPfURI-ir8u1f0aR2pXQf-I4g&s" alt="Mammootty" style={styles.castImage} />
      //       <p style={styles.castName}>Mammootty</p>
      //     </div>
      //     <div style={styles.castItem}>
      //       <img src="https://bhimamovieportal3.netlify.app/images/movies/gayu.jpg" alt="Gayathri" style={styles.castImage} />
      //       <p style={styles.castName}>Gayathri</p>
      //     </div>
      //     <div style={styles.castItem}>
      //       <img src="https://pbs.twimg.com/profile_images/1311755779456659456/F4fuC5Qu_400x400.jpg" alt="Gautham Menon" style={styles.castImage} />
      //       <p style={styles.castName}>Gautham Menon</p>
      //     </div>
      //     <div style={styles.castItem}>
      //       <img src="https://bhimamovieportal3.netlify.app/images/movies/bhama.jpg" alt="Bhama" style={styles.castImage} />
      //       <p style={styles.castName}>Bhama</p>
      //     </div>
      //     <div style={styles.castItem}>
      //       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2of-xtI1ewg3DGnH7VxJicXz2Kfg7txM3g&s" alt="Shine Tom Chacko" style={styles.castImage} />
      //       <p style={styles.castName}>Shine Tom Chacko</p>
      //     </div>
      //     <div style={styles.castItem}>
      //       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeHdpL2fh7S6GoQs1N1hg2MK1bj93gr9CZg&s" alt="Neeta Pillai" style={styles.castImage} />
      //       <p style={styles.castName}>Neeta Pillai</p>
      //     </div>
      //   </div>
      // </div>

//       <div style={styles.newsContainer}>
//         <div style={styles.newsContent}>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum earum 
//             porro iusto eligendi facere aliquid eius quidem quos architecto praesentium, 
//             dolor beatae fugit illum. Itaque recusandae quas debitis ipsam optio. 
//             Lorem ipsum dolor sit amet
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Movies;



























import React, { useEffect, useState } from 'react';
import { getMoviedetails } from '../services/Allapi';
import { useParams } from 'react-router-dom';
import { baseURL } from '../services/BaseURL';

function Movies() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  const getmoviesbyid = async () => {
    try {
      const response = await getMoviedetails(id);
      setMovie(response.data);
      console.log(response.data);  // Log the response data directly
    } catch (error) {
      console.error('Error fetching movie:', error);
    }
  };

  useEffect(() => {
    getmoviesbyid();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;  // Show loading until the movie is fetched
  }

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
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
      height: 'auto',
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
      backgroundColor: '#f8f9fa',
      padding: '20px',
      borderRadius: '8px',
      marginTop: '30px',
    },
    newsContent: {
      lineHeight: '1.6',
      color: '#4a4a4a',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.adContainer}>
        <a>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/000/701/690/small_2x/abstract-polygonal-banner-background.jpg"
            alt="Advertisement Banner"
            style={styles.adImage}
          />
        </a>
      </div>

      <div style={styles.imageContainer}>
        <img
          src={`${baseURL}/uploads/${movie.poster}`}  // Dynamically use movie poster from API
          alt={movie.title}  // Dynamically use movie title as alt text
          style={styles.moviePoster}
        />
      </div>

      <div style={styles.movieInfo}>
        <p style={styles.rating}><strong>Rating:-</strong>{movie.rating}/5</p>  {/* Dynamically show rating */}
        <p style={styles.infoText}><strong>Year:</strong>{movie.year}</p>  {/* Dynamically show year */}
        <p style={styles.infoText}><strong>Genre:</strong> {movie.genre}</p>  {/* Dynamically show genre */}
        <p style={styles.infoText}><strong>Release Date:</strong> {movie.releaseDate}</p>  {/* Dynamically show release date */}
        <p style={styles.infoText}><strong>Director:</strong> {movie.director}</p>  {/* Dynamically show director */}
        <p style={styles.infoText}><strong>Producers:</strong> {movie.producer}</p>  {/* Dynamically show producers */}
      </div>

      <a
        href={movie.trailerUrl}  // Dynamically link to trailer URL
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
          <div style={styles.castItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp_e1PcQ3IkLPfURI-ir8u1f0aR2pXQf-I4g&s" alt="Mammootty" style={styles.castImage} />
            <p style={styles.castName}>Mammootty</p>
          </div>
          <div style={styles.castItem}>
            <img src="https://bhimamovieportal3.netlify.app/images/movies/gayu.jpg" alt="Gayathri" style={styles.castImage} />
            <p style={styles.castName}>Gayathri</p>
          </div>
          <div style={styles.castItem}>
            <img src="https://pbs.twimg.com/profile_images/1311755779456659456/F4fuC5Qu_400x400.jpg" alt="Gautham Menon" style={styles.castImage} />
            <p style={styles.castName}>Gautham Menon</p>
          </div>
          <div style={styles.castItem}>
            <img src="https://bhimamovieportal3.netlify.app/images/movies/bhama.jpg" alt="Bhama" style={styles.castImage} />
            <p style={styles.castName}>Bhama</p>
          </div>
          <div style={styles.castItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY2of-xtI1ewg3DGnH7VxJicXz2Kfg7txM3g&s" alt="Shine Tom Chacko" style={styles.castImage} />
            <p style={styles.castName}>Shine Tom Chacko</p>
          </div>
          <div style={styles.castItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSeHdpL2fh7S6GoQs1N1hg2MK1bj93gr9CZg&s" alt="Neeta Pillai" style={styles.castImage} />
            <p style={styles.castName}>Neeta Pillai</p>
          </div>
        </div>
      </div>

      <div style={styles.castSection}>
        <h4 style={styles.castTitle}>Cast</h4>
        <div style={styles.castGrid}>
          {movie.cast && movie.cast.map((actor, index) => (
            <div key={index} style={styles.castItem}>
              <img
                src={actor.image}  // Dynamically display actor's image
                alt={actor.name}  // Dynamically display actor's name as alt text
                style={styles.castImage}
              />
              <p style={styles.castName}>{actor.name}</p>  {/* Dynamically show actor's name */}
            </div>
          ))}
        </div>
      </div>

      <div style={styles.newsContainer}>
        <div style={styles.newsContent}>
          <p>{movie.description}</p>  {/* Dynamically show news or description */}
        </div>
      </div>
    </div>
  );
}

export default Movies;
