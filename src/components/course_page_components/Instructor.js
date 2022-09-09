import {
  ExpandLess,
  ExpandMore,
  People,
  PlayCircle,
  Star,
  Stars,
} from "@mui/icons-material";
import { Box, Collapse, Stack } from "@mui/material";
import React, { useState } from "react";
import styles from "./Instructor.module.css";
function Instructor({ instructor }) {
  const [Show, setShow] = useState(false);
  const onShowClick = () => {
    setShow((old) => !old);
  };
  return (
    <Box mb={2}>
      <div className={styles.name}>
        <b>{instructor.title}</b>
      </div>
      <div style={{ color: "var(--grey)", fontSize: 16 }}>
        {instructor.job_title}
      </div>
      <div className={styles.imgAndStats}>
        <img
          className={styles.userImage}
          src={instructor.image}
          alt={instructor.initials}
        />
        <Stack>
          <Box py={0.5} px={2}>
            <Star fontSize="inherit" sx={{ mr: 2, fontSize: 16 }} />
            {instructor.instructor_rating} Instructor Rating
          </Box>
          <Box py={0.5} px={2}>
            <Stars fontSize="inherit" sx={{ mr: 2, fontSize: 16 }} />
            {instructor.reviews.toLocaleString("en-US")} Reviews
          </Box>
          <Box py={0.5} px={2}>
            <People fontSize="inherit" sx={{ mr: 2, fontSize: 16 }} />
            {instructor.students.toLocaleString("en-US")} Students
          </Box>
          <Box py={0.5} px={2}>
            <PlayCircle fontSize="inherit" sx={{ mr: 2, fontSize: 16 }} />
            {instructor.courses.toLocaleString("en-US")} Courses
          </Box>
        </Stack>
      </div>
      <Collapse
        collapsedSize={145}
        in={Show}
        sx={{
          mask: !Show
            ? "linear-gradient(#fff,#fff,rgba(255,255,255,0))"
            : "initial",
        }}
      >
        <div dangerouslySetInnerHTML={{ __html: instructor.bio }}></div>
      </Collapse>
      <button className={styles.showbtn} onClick={onShowClick}>
        <b>Show more</b>
        {Show ? <ExpandLess /> : <ExpandMore />}
      </button>
    </Box>
  );
}

export default Instructor;
