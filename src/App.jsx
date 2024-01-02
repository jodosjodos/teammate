import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LinearLoading from "./components/LinearLoading";
import Home from "./pages/Home";
import About from "./components/home/About";
import Navbar from "./components/Navbar";
import FormPage from "./pages/Form";
import Booking from "./pages/Booking";
import Redirecting from "./pages/Redirecting";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Set the duration for your loading simulation

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <Navbar />
        <main>
          {loading ? (
            <LinearLoading />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/redirect" element={<Redirecting />} />
            </Routes>
          )}
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
