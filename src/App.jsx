import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./components/home/About";
import Navbar from "./components/Navbar";
import FormPage from "./pages/Form";
import Booking from "./pages/Booking";
import Redirecting from "./pages/Redirecting";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<FormPage />}/>
            <Route path="/booking" element={<Booking/>}/>
            <Route path="/redirect" element={<Redirecting/>}/>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
