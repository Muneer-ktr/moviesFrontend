// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';

// function Form() {
//   const [casts, setCasts] = useState([{ id: 1, name: '', file: null }]);
//   const [movie, setMovie] = useState({
//     title: '',
//     rating: '',
//     releaseDate: '',
//     genre: '',
//     director: '',
//     producer: '',
//     poster: null,
//     trailerUrl: '',
//     description: '',
//     year: ''
//   });

//   const addCastField = () => {
//     setCasts([...casts, { id: casts.length + 1, name: '', file: null }]);
//   };

//   const handleCastChange = (index, field, value) => {
//     const updatedCasts = [...casts];
//     updatedCasts[index][field] = value;
//     setCasts(updatedCasts);
//   };

//   const removeCast = (index) => {
//     const updatedCasts = casts.filter((_, i) => i !== index);
//     setCasts(updatedCasts);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { title, rating, releaseDate, genre, director, producer, poster, trailerUrl, description, year } = movie;

//     if (!title || !rating || !releaseDate || !genre || !director || !producer || !poster || !trailerUrl || !description || !year) {
//       alert('Please add all fields');
//       return;
//     }

//     const reqBody = new FormData();
//     reqBody.append('title', title);
//     reqBody.append('rating', rating);
//     reqBody.append('releaseDate', releaseDate);
//     reqBody.append('genre', genre);
//     reqBody.append('director', director);
//     reqBody.append('producer', producer);
//     reqBody.append('poster', poster);
//     reqBody.append('trailerUrl', trailerUrl);
//     reqBody.append('description', description);
//     reqBody.append('year', year);

//     casts.forEach((cast, index) => {
//       reqBody.append(`casts[${index}][name]`, cast.name);
//       reqBody.append(`casts[${index}][file]`, cast.file);
//     });

//     try {
//       const response = await axios.post('your_api_endpoint', reqBody);
//       if (response.status === 200) {
//         setMovie({ title: '', rating: '', releaseDate: '', genre: '', director: '', producer: '', poster: null, trailerUrl: '', description: '', year: '' });
//         setCasts([{ id: 1, name: '', file: null }]);
//         alert('Movie added successfully');
//       }
//     } catch (error) {
//       alert(error.response?.data?.message || 'Server Error');
//     }
//   };

//   return (
//     <div className="container py-4">
//       <div className="card">
//         <div className="card-body">
//           <h2 className="card-title mb-4">Movie Details</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="row g-3">
//               {Object.keys(movie).map((key) => (
//                 key !== 'poster' && (
//                   <div className="col-md-6" key={key}>
//                     <div className="form-group">
//                       <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
//                       <input
//                         type={key === 'releaseDate' ? 'date' : 'text'}
//                         className="form-control"
//                         value={movie[key]}
//                         onChange={(e) => setMovie({ ...movie, [key]: e.target.value })}
//                       />
//                     </div>
//                   </div>
//                 )
//               ))}
//               <div className="col-md-6">
//                 <div className="form-group">
//                   <label className="form-label">Movie Poster</label>
//                   <input
//                     type="file"
//                     className="form-control"
//                     onChange={(e) => setMovie({ ...movie, poster: e.target.files[0] })}
//                   />
//                 </div>
//               </div>
//               <div className="col-12">
//                 <label className="form-label">Cast</label>
//                 {casts.map((cast, index) => (
//                   <div key={cast.id} className="row g-2 mb-3 align-items-end">
//                     <div className="col-md-5">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Cast Name"
//                         value={cast.name}
//                         onChange={(e) => handleCastChange(index, 'name', e.target.value)}
//                       />
//                     </div>
//                     <div className="col-md-5">
//                       <input
//                         type="file"
//                         className="form-control"
//                         onChange={(e) => handleCastChange(index, 'file', e.target.files[0])}
//                       />
//                     </div>
//                     <div className="col-md-2">
//                       {casts.length > 1 && (
//                         <button type="button" className="btn btn-danger w-100" onClick={() => removeCast(index)}>
//                           Remove
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//                 <button type="button" className="btn btn-secondary mb-3" onClick={addCastField}>
//                   Add Cast
//                 </button>
//               </div>
//               <div className="col-12 text-center">
//                 <button type="submit" className="btn btn-primary px-4">
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Form;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

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
    year: ''
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const { title, rating, releaseDate, genre, director, producer, poster, trailerUrl, description, year } = movie;
    if (!title || !rating || !releaseDate || !genre || !director || !producer || !poster || !trailerUrl || !description || !year) {
      alert('Please fill in all fields.');
      return;
    }

    // Create FormData for file upload
    const formData = new FormData();
    Object.entries(movie).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await axios.post('http://localhost:5000/movies/addmovies', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response.status === 201) {
        alert('Movie added successfully!');
        setMovie({ title: '', rating: '', releaseDate: '', genre: '', director: '', producer: '', poster: null, trailerUrl: '', description: '', year: '' });
      }
    } catch (error) {
      alert(error.response?.data?.message || 'Server Error');
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
                key !== 'poster' && key !== 'description' && (
                  <div className="col-md-6" key={key}>
                    <div className="form-group">
                      <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                      <input
                        type={key === 'releaseDate'}
                        className="form-control"
                        name={key}
                        value={movie[key]}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )
              ))}

              {/* File Input for Poster */}
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

              {/* Textarea for Description */}
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

              {/* Submit Button */}
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
