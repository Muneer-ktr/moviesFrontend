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

// ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg

// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';

// function Form() {
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

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setMovie((prevMovie) => ({
//       ...prevMovie,
//       [name]: value
//     }));
//   };

//   const handleFileChange = (e) => {
//     setMovie((prevMovie) => ({
//       ...prevMovie,
//       poster: e.target.files[0]
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Check if all fields are filled
//     const { title, rating, releaseDate, genre, director, producer, poster, trailerUrl, description, year } = movie;
//     if (!title || !rating || !releaseDate || !genre || !director || !producer || !poster || !trailerUrl || !description || !year) {
//       alert('Please fill in all fields.');
//       return;
//     }

//     // Create FormData for file upload
//     const formData = new FormData();
//     Object.entries(movie).forEach(([key, value]) => {
//       formData.append(key, value);
//     });

//     try {
//       const response = await axios.post('http://localhost:5000/movies/addmovies', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });

//       if (response.status === 201) {
//         alert('Movie added successfully!');
//         setMovie({ title: '', rating: '', releaseDate: '', genre: '', director: '', producer: '', poster: null, trailerUrl: '', description: '', year: '' });
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
//                 key !== 'poster' && key !== 'description' && (
//                   <div className="col-md-6" key={key}>
//                     <div className="form-group">
//                       <label className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
//                       <input
//                         type={key === 'releaseDate'}
//                         className="form-control"
//                         name={key}
//                         value={movie[key]}
//                         onChange={handleChange}
//                       />
//                     </div>
//                   </div>
//                 )
//               ))}

//               {/* File Input for Poster */}
//               <div className="col-md-6">
//                 <div className="form-group">
//                   <label className="form-label">Movie Poster</label>
//                   <input
//                     type="file"
//                     className="form-control"
//                     accept="image/*"
//                     onChange={handleFileChange}
//                   />
//                 </div>
//               </div>

//               {/* Textarea for Description */}
//               <div className="col-12">
//                 <div className="form-group">
//                   <label className="form-label">Description</label>
//                   <textarea
//                     className="form-control"
//                     name="description"
//                     value={movie.description}
//                     onChange={handleChange}
//                     rows="4"
//                   />
//                 </div>
//               </div>

//               {/* Submit Button */}
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



// gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg
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
    year: '',
    cast: [] // Added cast field
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

  // Handle cast changes
  const handleCastChange = (index, field, value) => {
    const updatedCast = [...movie.cast];
    updatedCast[index] = { ...updatedCast[index], [field]: value };
    setMovie((prevMovie) => ({ ...prevMovie, cast: updatedCast }));
  };

  // Handle cast file (actor image)
  const handleCastFileChange = (index, e) => {
    const updatedCast = [...movie.cast];
    updatedCast[index] = { ...updatedCast[index], photo: e.target.files[0] };
    setMovie((prevMovie) => ({ ...prevMovie, cast: updatedCast }));
  };

  // Add new cast member
  const addCastMember = () => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      cast: [...prevMovie.cast, { name: '', photo: null }]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Append movie details (except poster & cast)
    Object.entries(movie).forEach(([key, value]) => {
      if (key !== "poster" && key !== "cast") {
        formData.append(key, value);
      }
    });

    // Append poster file
    if (movie.poster) {
      formData.append("poster", movie.poster);
    }

    // Convert cast array to JSON string (only names)
    const castData = movie.cast.map(({ name }) => ({ name }));
    formData.append("cast", JSON.stringify(castData));

    // Append cast images
    movie.cast.forEach(({ photo }) => {
      if (photo) {
        formData.append("castImages", photo);
      }
    });

    try {
      const response = await axios.post("http://localhost:5000/movies/addmovies", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });

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

              {/* Cast Section */}
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

