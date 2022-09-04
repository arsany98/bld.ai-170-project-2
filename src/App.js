import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import TracksTabs from "./components/TracksTabs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CoursePage from "./components/CoursePage";
import DbContextProvider from "./contexts/DbContextProvider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <DbContextProvider>
        <Routes>
          <Route path="/" element={<TracksTabs></TracksTabs>}></Route>
          <Route
            path="/courses/:courseId"
            element={<CoursePage></CoursePage>}
          ></Route>
        </Routes>
      </DbContextProvider>
      <Footer />
    </div>
  );
}

export default App;
