import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/home_page_components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CoursePage from "./components/course_page_components/CoursePage";
import DbContextProvider from "./contexts/DbContextProvider";

function App() {
  return (
    <div>
      <Navbar />
      <DbContextProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/courses/:courseId" element={<CoursePage />} />
          <Route path="*" element={<div>404 not found</div>} />
        </Routes>
      </DbContextProvider>
      <Footer />
    </div>
  );
}

export default App;
