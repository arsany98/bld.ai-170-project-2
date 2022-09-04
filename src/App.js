import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CoursePage from "./components/CoursePage";
import DbContextProvider from "./contexts/DbContextProvider";

function App() {
  return (
    <div>
      <Navbar />
      <DbContextProvider>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route
            path="/courses/:courseId"
            element={<CoursePage></CoursePage>}
          ></Route>
          <Route path="*" element={<div>404 not found</div>}></Route>
        </Routes>
      </DbContextProvider>
      <Footer />
    </div>
  );
}

export default App;
