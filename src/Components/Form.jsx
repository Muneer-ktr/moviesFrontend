import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addMovies } from '../services/Allapi';

function Form() {
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

  return (
    <div className="container py-4">
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
    </div>
  );
}

export default Form;