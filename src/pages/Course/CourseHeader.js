import React from "react";
import styles from "./CourseHeader.module.css";
import { NavigateNext, StarBorder } from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Rating, Skeleton, Stack } from "@mui/material";
import VideoInfoList from "./VideoInfoList";
import getInstructorsNames from "../../utils/getInstructorsNames";

function CourseHeader({ course }) {
  return (
    <header className={styles.darkBg}>
      <div className={styles.headerContainer}>
        <div className={styles.header}>
          <div>
            <Breadcrumbs
              separator={
                <NavigateNext fontSize="inherit" sx={{ fontSize: 16 }} />
              }
              aria-label="breadcrumb"
              color="white"
              sx={{ fontSize: 14, mb: 1 }}
            >
              {course.topics?.map((t) => (
                <Link
                  key={t.id}
                  href="#"
                  color="var(--light-purple)"
                  underline="none"
                  sx={{
                    "&:hover": {
                      color: "var(--light-purple)",
                    },
                  }}
                >
                  <b>{t.topic}</b>
                </Link>
              )) || <Skeleton sx={{ bgcolor: "var(--grey)", width: "25vw" }} />}
            </Breadcrumbs>
          </div>
          <Box mb={1}>
            <img
              className={styles.img}
              style={{ width: "100%" }}
              src={course.image}
              alt={course.title}
            />
          </Box>
          <h1>
            <b>{course.title}</b>
          </h1>
          <div style={{ fontSize: 19, marginBottom: 16 }}>
            {course.headline || <Skeleton sx={{ bgcolor: "var(--grey)" }} />}
          </div>
          <Stack direction="row" spacing={1} alignItems="center">
            <div>
              {course.bestseller ? (
                <div className={styles.bestSeller}>
                  <b>Bestseller</b>
                </div>
              ) : (
                <></>
              )}
            </div>
            <a href="#reviews" style={{ textDecoration: "none" }}>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Box color="var(--light-yellow)">
                  <b>{Math.round(course.rating * 10) / 10}</b>
                </Box>
                <Box>
                  <Rating
                    emptyIcon={
                      <StarBorder
                        fontSize="inherit"
                        style={{ color: "var(--light-yellow)" }}
                      />
                    }
                    value={course.rating}
                    sx={{ color: "var(--light-yellow)", fontSize: 16 }}
                    readOnly
                    precision={0.5}
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
          <Box>
            {course.instructors && "Created by "}
            {course.instructors ? (
              getInstructorsNames(course.instructors, styles.link)
            ) : (
              <Skeleton sx={{ bgcolor: "var(--grey)" }} />
            )}
          </Box>
          <VideoInfoList course={course} />
          <div className={styles.purchase}>
            <div className={styles.price}>
              <b>E£{course.price.toLocaleString("en-US")}</b>
            </div>
            <div>
              <button className={styles.addToCartBtn}>
                <b>Add to cart</b>
              </button>
            </div>
            <Box fontSize={12} textAlign="center" mb={1} mt={2}>
              30-Day Money-Back Guarantee
            </Box>
            <Box fontSize={12} textAlign="center" mb={2}>
              Full Lifetime Access
            </Box>
            <Stack direction="row" justifyContent="space-between">
              <button className={styles.linkBtn}>
                <b>Share</b>
              </button>
              <button className={styles.linkBtn}>
                <b>Gift this course</b>
              </button>
              <button className={styles.linkBtn}>
                <b>Apply Coupon</b>
              </button>
            </Stack>
          </div>
        </div>
      </div>
    </header>
  );
}

export default CourseHeader;
