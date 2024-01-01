import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';


import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <div className='flex flex-col'>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App