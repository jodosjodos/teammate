<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Home from './pages/Home';
import Navbar from './components/Navbar';
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./components/home/About";
import Navbar from "./components/Navbar";
import FormPage from "./pages/Form";
import Booking from "./pages/Booking";
import Redirecting from "./pages/Redirecting";
>>>>>>> main

const App = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <div className='flex flex-col'>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
=======
      <div className="flex flex-col">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<FormPage />}/>
            <Route path="/booking" element={<Booking/>}/>
            <Route path="/redirect" element={<Redirecting/>}/>
>>>>>>> main
          </Routes>
        </main>
      </div>
    </BrowserRouter>
<<<<<<< HEAD
  )
}

export default App
=======
  );
};

export default App;
>>>>>>> main
