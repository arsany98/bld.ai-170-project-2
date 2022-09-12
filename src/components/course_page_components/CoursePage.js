import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseSideBar from "./CourseSideBar";
import CourseHeader from "./CourseHeader";
import CourseContent from "./CourseContent";
import CourseDescription from "./CourseDescription";
import CourseInstructors from "./CourseInstructors";
import CourseReviews from "./CourseReviews";
import styles from "./CoursePage.module.css";
import withData from "../../contexts/WithData";
import PageNotFound from "../PageNotFound";
function CoursePage({ courses }) {
  const { courseId } = useParams();
  const id = parseInt(courseId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const course = courses.find((c) => c.id === id);

  if (course)
    return (
      <div className={styles.page}>
        <CourseSideBar course={course} />
        <CourseHeader course={course} />
        <main>
          <div className={styles.mainContainer}>
            <div className={styles.main}>
              <CourseContent course={course} />
              <CourseDescription course={course} />
              <CourseInstructors course={course} />
              <CourseReviews course={course} />
            </div>
          </div>
        </main>
      </div>
    );
  else return <PageNotFound />;
}

export default withData(CoursePage);
