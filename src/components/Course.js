import React, { useContext } from "react";
import styles from "./Course.module.css";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import DbContext from "../contexts/DbContext";

function render(instructors) {
  let str = "";
  if (instructors)
    instructors.forEach((i, idx) => {
      if (idx < instructors.length - 1) str += i.display_name + ", ";
      else str += i.display_name;
    });
  return str;
}
function Course(props) {
  let db = useContext(DbContext);
  let course = db.Data.courses.find((c) => c.id === props.id);
  return (
    <article>
      <Link to={`/courses/${props.id}`}>
        <div className={styles.imgContainer}>
          <div className={styles.imgHover}></div>
          <img alt={course.title} src={course.image} />
        </div>
        <div>
          <h3>
            <b>{course.title}</b>
          </h3>
          <p className={styles.subtextFont}>{render(course.instructors)}</p>
          <div className={styles.rating}>
            <span style={{ color: "#b4690e", fontSize: "14" }}>
              <b>{Math.round(course.rating * 10) / 10}</b>
            </span>
            <Rating
              style={{ margin: "0 4px", display: "flex" }}
              ratingValue={(course.rating / 5) * 100}
              size={14}
              fillColor={"#e59819"}
              readonly
              allowHalfIcon
            />
            <span className={styles.subtextFont}>
              ({course.rateCount.toLocaleString("en-US")})
            </span>
          </div>
          <div>
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

export default Course;
