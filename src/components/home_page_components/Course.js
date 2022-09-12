import React from "react";
import styles from "./Course.module.css";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import withData from "../../contexts/WithData";
import { StarBorder } from "@mui/icons-material";

function renderInstructors(instructors) {
  let str = "";
  if (instructors)
    instructors.forEach((i, idx) => {
      if (idx < instructors.length - 1) str += i.display_name + ", ";
      else str += i.display_name;
    });
  return str;
}
function Course({ id, courses }) {
  let course = courses.find((c) => c.id === id);
  return (
    <article>
      <Link to={`/courses/${id}`}>
        <div className={styles.imgContainer}>
          <div className={styles.imgHover}></div>
          <img alt={course.title} src={course.image} />
        </div>
        <div>
          <h3>
            <b>{course.title}</b>
          </h3>
          <p className={styles.subtextFont}>
            {renderInstructors(course.instructors)}
          </p>
          <div className={styles.rating}>
            <span style={{ color: "var(--dark-yellow)", fontSize: "14" }}>
              <b>{Math.round(course.rating * 10) / 10}</b>
            </span>

            <Rating
              emptyIcon={
                <StarBorder
                  fontSize="inherit"
                  style={{ color: "var(--yellow)" }}
                />
              }
              value={course.rating}
              sx={{ fontSize: 16, color: "var(--yellow)" }}
              readOnly
              precision={0.5}
            />
            <span className={styles.subtextFont}>
              ({course.rateCount.toLocaleString("en-US")})
            </span>
          </div>
          <div className={styles.price}>
            <b>E£{course.price.toLocaleString("en-US")}</b>
          </div>

          {course.bestseller ? (
            <div className={styles.bestSeller}>
              <b>Bestseller</b>
            </div>
          ) : (
            <></>
          )}
        </div>
      </Link>
    </article>
  );
}

export default withData(Course);
