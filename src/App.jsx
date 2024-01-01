import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';

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