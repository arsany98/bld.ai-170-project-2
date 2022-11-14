import { Skeleton } from "@mui/material";
import React from "react";
import Instuctor from "../../components/Instructor";
function CourseInstructors({ course }) {
  return (
    <div>
      <h2>
        <b>Instructors</b>
      </h2>
      <div>
        {course.instructors?.map((i) => (
          <Instuctor key={i.url} instructor={i} />
        )) || <Skeleton />}
      </div>
    </div>
  );
}

export default CourseInstructors;
