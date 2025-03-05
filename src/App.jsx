import { Route, Routes, useLocation } from 'react-router-dom';
import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Body from './Components/Body'
import Movies from './Components/Movies'
import Form from './Components/Form';

function App() {
  const location = useLocation();

  const hideHeader = location.pathname.startsWith('/getmoviesbyid');

  return (
    <div>

      {!hideHeader && <Header />}

      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/getmoviesbyid/:id' element={<Movies />} />
        <Route path='/form' element={<Form />} />
      </Routes>

      <Footer />
      
    </div>
  )
}

export default App
