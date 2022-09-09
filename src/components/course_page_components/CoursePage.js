import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseSideBar from "./CourseSideBar";
import CourseHeader from "./CourseHeader";
import CourseContent from "./CourseContent";
import CourseDescription from "./CourseDescription";
import CourseInstructors from "./CourseInstructors";
import CourseReviews from "./CourseReviews";
import styles from "./CoursePage.module.css";
function CoursePage() {
  const { courseId } = useParams();
  const id = parseInt(courseId);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.page}>
      <CourseSideBar id={id} />
      <CourseHeader id={id} />
      <main>
        <div className={styles.mainContainer}>
          <div className={styles.main}>
            <CourseContent id={id} />
            <CourseDescription id={id} />
            <CourseInstructors id={id} />
            <CourseReviews id={id} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default CoursePage;
