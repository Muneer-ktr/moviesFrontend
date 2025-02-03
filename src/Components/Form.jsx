import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
  const [casts, setCasts] = useState([{ id: 1, name: '', file: null }]);

  const addCastField = () => {
    setCasts([...casts, { id: casts.length + 1, name: '', file: null }]);
  };

  const handleCastChange = (index, field, value) => {
    const updatedCasts = [...casts];
    updatedCasts[index][field] = value;
    setCasts(updatedCasts);
  };

  const removeCast = (index) => {
    const updatedCasts = casts.filter((_, i) => i !== index);
    setCasts(updatedCasts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="container py-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title mb-4">Movie Details</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* Basic Info Section */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="title" 
                    name="title"
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="news" className="form-label">News</label>
                  <textarea 
                    className="form-control" 
                    id="news" 
                    name="news" 
                    rows="4"
                  ></textarea>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="rating" className="form-label">Rating</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="rating" 
                    name="rating"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="journer" className="form-label">Genre</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="journer" 
                    name="journer"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="releasedate" className="form-label">Release Date</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    id="releasedate" 
                    name="releasedate"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="director" className="form-label">Director</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="director" 
                    name="director"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="producer" className="form-label">Producer</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="producer" 
                    name="producer"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="movieyear" className="form-label">Year</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="movieyear" 
                    name="movieyear"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="trailerlink" className="form-label">Trailer Link</label>
                  <input 
                    type="url" 
                    className="form-control" 
                    id="trailerlink" 
                    name="trailerlink"
                  />
                </div>
              </div>

              {/* Movie Poster Section */}
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="movieposter" className="form-label">Movie Poster</label>
                  <input 
                    type="file" 
                    className="form-control" 
                    id="movieposter" 
                    name="movieposter"
                  />
                </div>
              </div>

              {/* Cast Section */}
              <div className="col-12">
                <label className="form-label">Cast</label>
                {casts.map((cast, index) => (
                  <div key={cast.id} className="row g-2 mb-3 align-items-end">
                    <div className="col-md-5">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Cast Name"
                        value={cast.name}
                        onChange={(e) => handleCastChange(index, 'name', e.target.value)}
                      />
                    </div>
                    <div className="col-md-5">
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => handleCastChange(index, 'file', e.target.files[0])}
                      />
                    </div>
                    <div className="col-md-2">
                      {casts.length > 1 && (
                        <button
                          type="button"
                          className="btn btn-danger w-100"
                          onClick={() => removeCast(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-secondary mb-3"
                  onClick={addCastField}
                >
                  Add Cast
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
