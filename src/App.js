import "./App.css";
import CoursesList from "./components/CoursesList";
import db from "./courses_db.json";

function App() {
  return (
    <div className="App">
      <CoursesList track={db.tracks[0]}></CoursesList>
    </div>
  );
}

export default App;
