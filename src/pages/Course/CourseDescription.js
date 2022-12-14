import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box, Collapse, Skeleton } from "@mui/material";
import React, { useState } from "react";
import styles from "./CourseDescription.module.css";
function CourseDescription({ course }) {
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
          {course.requirements?.map((r) => <li key={r.id}>{r.title}</li>) || (
            <>
              <Skeleton /> <Skeleton />
            </>
          )}
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
            {course.description ? (
              <Box
                mb={4}
                dangerouslySetInnerHTML={{
                  __html: course.description,
                }}
              ></Box>
            ) : (
              <>
                <Skeleton /> <Skeleton />
              </>
            )}
          </div>
          <div>
            <h2>
              <b>Who this course is for:</b>
            </h2>
            <ul>
              {course.who_this_course_is_for?.map((w) => (
                <li key={w.id}>{w.title}</li>
              )) || (
                <>
                  <Skeleton /> <Skeleton />
                </>
              )}
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

export default CourseDescription;
