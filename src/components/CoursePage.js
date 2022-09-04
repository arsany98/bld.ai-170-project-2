import React from "react";
import { useParams } from "react-router-dom";

function CoursePage() {
  const { courseId } = useParams();
  return <div>Course {courseId} Page</div>;
}

export default CoursePage;
