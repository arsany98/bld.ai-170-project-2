import React from "react";
import { useParams } from "react-router-dom";
import CourseHeader from "./course_page_components/CourseHeader";
import CourseContent from "./course_page_components/CourseContent";
import CourseRequirements from "./course_page_components/CourseRequirements";
import CourseDescription from "./course_page_components/CourseDescription";
import CourseInstructor from "./course_page_components/CourseInstructor";
import CourseReviews from "./course_page_components/CourseReviews";

function CoursePage() {
  const { courseId } = useParams();
  const id = parseInt(courseId);
  return (
    <>
      <div>Course {courseId} Page</div>
      <CourseHeader id={id} />
      <CourseContent id={id} />
      <CourseRequirements id={id} />
      <CourseDescription id={id} />
      <CourseInstructor id={id} />
      <CourseReviews id={id} />
    </>
  );
}

export default CoursePage;
