import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DbContextProvider from "./contexts/DbContextProvider";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div>
      <Navbar />
      <DbContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:courseId" element={<Course />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </DbContextProvider>
      <Footer />
    </div>
  );
}

export default App;
