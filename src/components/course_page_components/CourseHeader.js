import React from "react";
import styles from "./CourseHeader.module.css";
import withData from "../../contexts/WithData";
import {
  ClosedCaption,
  Language,
  NavigateNext,
  NewReleases,
  StarBorder,
} from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Rating, Stack } from "@mui/material";
function CourseHeader({ id, courses }) {
  const course = courses.find((c) => c.id === id);
  let date = course.last_update_date.split("-");
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
              {course.topics.map((t, index) => (
                <Link
                  key={index}
                  href="#"
                  color="var(--light-purple)"
                  underline="none"
                  sx={{
                    "&:hover": {
                      color: "var(--light-purple)",
                    },
                  }}
                >
                  <b>{t}</b>
                </Link>
              ))}
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
            {course.headline}
          </div>
          <div>
            {course.bestseller ? (
              <div className={styles.bestSeller}>
                <b>Bestseller</b>
              </div>
            ) : (
              <></>
            )}
          </div>
          <Stack direction="row" spacing={1} alignItems="center">
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
                      ></StarBorder>
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
            <Box>{course.num_subscribers.toLocaleString("en-US")} students</Box>
          </Stack>
          <div>
            Created by{" "}
            {course.instructors.map((i, index) => (
              <>
                <span className={styles.link}>{i.title}</span>
                {index < course.instructors.length - 1 ? ", " : ""}
              </>
            ))}
          </div>
          <Box display="flex" className={styles.videoInfoList}>
            <div>
              <NewReleases fontSize="inherit" sx={{ mr: 1, fontSize: 16 }} />
              Last updated {parseInt(date[1])}/{parseInt(date[0])}
            </div>
            <div>
              <Language fontSize="inherit" sx={{ mr: 1, fontSize: 16 }} />
              {course.locale}
            </div>
            <div>
              <ClosedCaption fontSize="inherit" sx={{ mr: 1, fontSize: 16 }} />
              {course.caption_languages}
            </div>
          </Box>
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

export default withData(CourseHeader);
