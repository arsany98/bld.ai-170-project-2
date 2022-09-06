import React from "react";
import styles from "./CourseHeader.module.css";
import withData from "../../contexts/WithData";
function CourseHeader({ id, courses }) {
  const course = courses.find((c) => c.id === id);
  return (
    <header className={styles.header}>
      <h1>{course.title}</h1>
    </header>
  );
}

export default withData(CourseHeader);
