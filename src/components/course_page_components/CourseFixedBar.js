import { Star } from "@mui/icons-material";
import { Box, Skeleton, Stack } from "@mui/material";
import React from "react";
import styles from "./CourseFixedBar.module.css";
function FixedBar({ course }) {
  return (
    <div className={styles.fixedBar}>
      <Stack direction="row">
        <Box className={styles.courseTitle}>
          <Box
            fontSize={16}
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            <b>{course.title}</b>
          </Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <a href="#reviews" style={{ textDecoration: "none" }}>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Box color="var(--light-yellow)">
                  <b>{Math.round(course.rating * 10) / 10}</b>
                </Box>
                <Box>
                  <Star
                    fontSize="inherit"
                    style={{ color: "var(--light-yellow)", fontSize: "18" }}
                  />
                </Box>
                <Box className={styles.link}>
                  ({course.rateCount.toLocaleString("en-US")} ratings)
                </Box>
              </Stack>
            </a>
            <Box>
              {course.num_subscribers ? (
                course.num_subscribers.toLocaleString("en-US") + " students"
              ) : (
                <Skeleton sx={{ bgcolor: "var(--grey)", width: "10vw" }} />
              )}
            </Box>
          </Stack>
        </Box>
        <Box className={styles.purchase}>
          <Box fontSize={19} mr={2}>
            <b>E£{course.price.toLocaleString("en-US")}</b>
          </Box>
          <button className={styles.buyNowBtn}>
            <b>Buy now</b>
          </button>
        </Box>
      </Stack>
    </div>
  );
}

export default FixedBar;
