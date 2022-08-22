import React from "react";
import styles from "./Course.module.css";
import { Rating } from "react-simple-star-rating";

function Course(props) {
  return (
    <article className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
      <a href={props.course.url}>
        <div className={styles.imgContainer}>
          <div className={styles.imgHover}></div>
          <img alt={props.course.title} src={props.course.image} />
        </div>
        <div>
          <h3>
            <b>{props.course.title}</b>
          </h3>
          <p className={styles.subtextFont}>{props.course.author}</p>
          <div className={styles.rating}>
            <span style={{ color: "#b4690e", fontSize: "14" }}>
              <b>{props.course.rating}</b>
            </span>
            <Rating
              style={{ margin: "0 4px", display: "flex" }}
              ratingValue={(props.course.rating / 5) * 100}
              size={14}
              fillColor={"#e59819"}
              readonly
              allowHalfIcon
            />
            <span className={styles.subtextFont}>
              ({props.course.rateCount.toLocaleString("en-US")})
            </span>
          </div>
          <div>
            <b>E£{props.course.price.toLocaleString("en-US")}</b>
          </div>

          {props.course.bestseller ? (
            <div className={styles.bestSeller}>
              <b>Bestseller</b>
            </div>
          ) : (
            <></>
          )}
        </div>
      </a>
    </article>
  );
}

export default Course;
