import React, { useContext } from "react";
import Course from "./Course";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./CoursesList.module.css";
import "./CarouselStyles.css";
import DbContext from "../contexts/DbContext";
import { useSearchParams } from "react-router-dom";
function CoursesList(props) {
  const [searchParams] = useSearchParams();
  let db = useContext(DbContext);
  let search = searchParams.get("search");
  let filteredCourses = props.track.courses.filter((cId) => {
    if (!search) return true;
    let course = db.Data.courses.find((course) => course.id === cId);
    return course.title.toLowerCase().includes(search.toLowerCase());
  });

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
        {filteredCourses.length === 0 ? (
          <div className={styles.noCourses}>No Results Found.</div>
        ) : (
          <Carousel
            itemClass={styles.courseItem}
            responsive={{
              xs: {
                breakpoint: { min: 0, max: 600 },
                items: 1,
                slidesToSlide: 1,
              },
              sm: {
                breakpoint: { min: 601, max: 700 },
                items: 2,
                slidesToSlide: 2,
              },
              md: {
                breakpoint: { min: 701, max: 980 },
                items: 3,
                slidesToSlide: 2,
              },
              lg: {
                breakpoint: { min: 981, max: 1200 },
                items: 4,
                slidesToSlide: 3,
              },
              xl: {
                breakpoint: { min: 1201, max: 10000 },
                items: 5,
                slidesToSlide: 4,
              },
            }}
          >
            {filteredCourses.map((c) => (
              <Course key={c} id={c}></Course>
            ))}
          </Carousel>
        )}
      </div>
    </>
  );
}

export default CoursesList;
