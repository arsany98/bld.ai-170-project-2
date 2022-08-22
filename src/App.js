import "./App.css";
import Course from "./Course";
import db from "./courses_db.json";

function App() {
  return (
    <div className="App">
      <Course course={db.tracks[0].courses[0]}></Course>
    </div>
  );
}

export default App;
