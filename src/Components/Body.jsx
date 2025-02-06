import React, { useEffect, useState } from 'react';
import { Carousel, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import './Body.css';
import { allmovies } from '../services/Allapi';
import { baseURL } from '../services/BaseURL';

function Body() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await allmovies();
      setMovies(response.data);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container fluid>
      {/* Carousel Section */}
      <Row className="mb-4">
        <Col xs={12}>
          <Carousel controls={false} interval={2000} indicators={true} pause="hover" className="custom-carousel">
            <Carousel.Item>
              <img
                className="carousel-image"
                src="https://bhimamovieportal3.netlify.app/images/movies/Bhima%20Slide%205.jpeg"
                alt="Bhima Movie Poster 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Link to="/movies">
                <img
                  className="carousel-image"
                  src="https://bhimamovieportal3.netlify.app/images/movies/Bhima%20Slide%202.jpeg"
                  alt="Bhima Movie Poster 2"
                />
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="https://bhimamovieportal3.netlify.app/images/movies/Bhima4.jpeg"
                alt="Bhima Movie Poster 3"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="https://bhimamovieportal3.netlify.app/images/movies/Bhima%20Slide%202.jpeg"
                alt="Bhima Movie Poster 4"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-image"
                src="https://bhimamovieportal3.netlify.app/images/movies/Bhima%20Slide%203.jpeg"
                alt="Bhima Movie Poster 5"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Grid Section */}
      <Row className="px-3">
        {movies?.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <div className="image-container">
              <Link to="/movies">
                <img
                  className="grid-image"
                  src={`${baseURL}/uploads/${item.poster}`}
                  alt={item.title || "Movie Poster"} 
                />
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Body;