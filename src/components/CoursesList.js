import React from "react";
import Course from "./Course";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./CoursesList.module.css";
import "./CarouselStyles.css";

function CoursesList(props) {
  return (
    <>
      <div className={styles.trackContainer}>
        <div className={styles.trackHead}>
          <h2>
            <b>{props.track.header}</b>
          </h2>
          <p>{props.track.description}</p>
          <button className="mybtn whiteBg box">
            <b>Explore {props.track.name}</b>
          </button>
        </div>

        <Carousel
          itemClass={styles.courseItem}
          responsive={{
            xs: {
              breakpoint: { min: 0, max: 576 },
              items: 1,
              slidesToSlide: 1,
            },
            sm: {
              breakpoint: { min: 576, max: 768 },
              items: 2,
              slidesToSlide: 2,
            },
            md: {
              breakpoint: { min: 768, max: 992 },
              items: 3,
              slidesToSlide: 3,
            },
            lg: {
              breakpoint: { min: 992, max: 1200 },
              items: 4,
              slidesToSlide: 4,
            },
            xl: {
              breakpoint: { min: 1200, max: 10000 },
              items: 6,
              slidesToSlide: 6,
            },
          }}
        >
          {props.track.courses.map((c) => (
            <Course key={c.id} course={c}></Course>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default CoursesList;
