import React, { useState, useEffect } from 'react';
import { addMovies, allmovies } from '../services/Allapi';

const Form = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({
    title: '',
    rating: '',
    releaseDate: '',
    genre: '',
    director: '',
    producer: '',
    poster: null,
    trailerUrl: '',
    description: '',
    year: '',
    cast: []
  });

  // Fetch all movies when component mounts
  useEffect(() => {
    getAllMovies();
  }, []);

  // Function to fetch all movies
  const getAllMovies = async () => {
    try {
      const response = await allmovies();
      if (response.status === 200) {
        setMovies(response.data);
      }
    } catch (error) {
      console.log('Error fetching movies:', error);
      alert('Error fetching movies');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      poster: e.target.files[0]
    }));
  };

  const handleCastChange = (index, field, value) => {
    const updatedCast = [...movie.cast];
    updatedCast[index] = { ...updatedCast[index], [field]: value };
    setMovie((prevMovie) => ({ ...prevMovie, cast: updatedCast }));
  };

  const handleCastFileChange = (index, e) => {
    const updatedCast = [...movie.cast];
    updatedCast[index] = { ...updatedCast[index], photo: e.target.files[0] };
    setMovie((prevMovie) => ({ ...prevMovie, cast: updatedCast }));
  };

  const addCastMember = () => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      cast: [...prevMovie.cast, { name: '', photo: null }]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(movie).forEach(([key, value]) => {
      if (key !== "poster" && key !== "cast") {
        formData.append(key, value);
      }
    });

    if (movie.poster) {
      formData.append("poster", movie.poster);
    }

    const castData = movie.cast.map(({ name }) => ({ name }));
    formData.append("cast", JSON.stringify(castData));

    movie.cast.forEach(({ photo }) => {
      if (photo) {
        formData.append("castImages", photo);
      }
    });

    const reqHeader = {
      "Content-Type": "multipart/form-data"
    };

    try {
      const response = await addMovies(formData, reqHeader);

      if (response.status === 201) {
        alert("Movie added successfully!");
        // Refresh the movies list
        getAllMovies();
        
        // Reset the form
        setMovie({
          title: "",
          rating: "",
          releaseDate: "",
          genre: "",
          director: "",
          producer: "",
          poster: null,
          trailerUrl: "",
          description: "",
          year: "",
          cast: []
        });
      }
    } catch (error) {
      alert(error.response?.data?.message || "Server Error");
      console.log(error);
    }
  };

  const handleUpdate = (movieData) => {
    // Populate the form with the selected movie's data, including cast
    setMovie({
      title: movieData.title || '',
      genre: movieData.genre || '',
      rating: movieData.rating || '',
      releaseDate: movieData.releaseDate || '',
      director: movieData.director || '',
      producer: movieData.producer || '',
      trailerUrl: movieData.trailerUrl || '',
      description: movieData.description || '',
      year: movieData.year || '',
      cast: movieData.cast || [],
      poster: null // Reset poster since we can't retrieve the file
    });
  };

  return (
    <div className="container py-4">
     
      {/* Movie Form */}
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Movie Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {Object.keys(movie).map((key) => (
                key !== 'poster' && key !== 'description' && key !== 'cast' && (
                  <div className="col-md-6" key={key}>
                    <div className="form-group">
                      <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                      <input
                        type={key === 'releaseDate' ? 'date' : 'text'}
                        className="form-control"
                        name={key}
                        value={movie[key]}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )
              ))}

              <div className="col-md-6">
                <div className="form-group">
                  <label className="form-label">Movie Poster</label>
                  <input
                    type="file"
                    className="form-control"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    name="description"
                    value={movie.description}
                    onChange={handleChange}
                    rows="4"
                  />
                </div>
              </div>

              <div className="col-12">
                <h4>Movie Cast</h4>
                {movie.cast.map((actor, index) => (
                  <div className="row g-3 align-items-center mb-3" key={index}>
                    <div className="col-md-5">
                      <label className="form-label">Actor Name</label>
                      <input
                        type="text"
                        className="form-control"
                        value={actor.name}
                        onChange={(e) => handleCastChange(index, 'name', e.target.value)}
                      />
                    </div>
                    <div className="col-md-5">
                      <label className="form-label">Actor Photo</label>
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={(e) => handleCastFileChange(index, e)}
                      />
                    </div>
                    <div className="col-md-2">
                      <button 
                        type="button" 
                        className="btn btn-danger mt-4"
                        onClick={() => {
                          const updatedCast = movie.cast.filter((_, i) => i !== index);
                          setMovie(prev => ({ ...prev, cast: updatedCast }));
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <button type="button" className="btn btn-secondary mt-2" onClick={addCastMember}>
                  Add Cast Member
                </button>
              </div>

              <div className="col-12 text-center">
                <button type="submit" className="btn btn-primary px-4">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>


       {/* Movie Table */}
       <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title mb-4">Movies List</h2>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Rating</th>
                  <th>Cast</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie, index) => (
                  <tr key={movie._id || index}>
                    <td>{movie.title}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.rating}</td>
                    <td>
                      {movie.cast?.map(actor => actor.name).join(', ')}
                    </td>
                    <td>
                      <button 
                        className="btn btn-warning btn-sm"
                        onClick={() => handleUpdate(movie)}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Form;