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
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }
  }, [progress]);

  return (
    <BrowserRouter>
      <div className="flex flex-col">
        {loading ? (
          <LinearLoading progress={progress} setProgress={setProgress} />
        ) : (
          <>
            <Navbar /><main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/redirect" element={<Redirecting />} />
              </Routes>
            </main>
          </>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;