import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Collapse } from "@mui/material";
import React, { useState } from "react";
import withData from "../../contexts/WithData";
import styles from "./CourseDescription.module.css";
function CourseDescription({ id, courses }) {
  const course = courses.find((c) => c.id === id);
  const [Show, setShow] = useState(false);
  const onShowClick = () => {
    setShow((old) => !old);
  };
  return (
    <>
      <div>
        <h2>
          <b>Requirements</b>
        </h2>
        <ul>
          {course.requirements.map((r, index) => (
            <li key={index}>{r}</li>
          ))}
        </ul>
      </div>
      <div>
        <Collapse
          collapsedSize={260}
          in={Show}
          sx={{
            mask: !Show
              ? "linear-gradient(#fff,#fff,rgba(255,255,255,0))"
              : "initial",
          }}
        >
          <div>
            <h2>
              <b>Description</b>
            </h2>
            <Box
              mb={4}
              dangerouslySetInnerHTML={{ __html: course.description }}
            ></Box>
          </div>
          <div>
            <h2>
              <b>Who this course is for:</b>
            </h2>
            <ul>
              {course.who_this_course_is_for.map((r, index) => (
                <li key={index}>{r}</li>
              ))}
            </ul>
          </div>
        </Collapse>
        <button className={styles.showbtn} onClick={onShowClick}>
          <b>Show more</b>
          {Show ? <ExpandLess /> : <ExpandMore />}
        </button>
      </div>
    </>
  );
}

export default withData(CourseDescription);
