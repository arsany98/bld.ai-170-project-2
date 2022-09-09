import React from "react";
import withData from "../../contexts/WithData";
import Instuctor from "./Instructor";
function CourseInstructors({ id, courses }) {
  const course = courses.find((c) => c.id === id);
  return (
    <div>
      <h2>
        <b>Instructors</b>
      </h2>
      <div>
        {course.instructors.map((i) => (
          <Instuctor key={i.url} instructor={i} />
        ))}
      </div>
    </div>
  );
}

export default withData(CourseInstructors);
