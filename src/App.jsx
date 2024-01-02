import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <div className='flex flex-col'>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App