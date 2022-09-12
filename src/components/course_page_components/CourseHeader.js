import React, { useRef, useState } from "react";
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
  const [extraLang, setextraLang] = useState();

  let date = course.last_update_date.split("-");
  let showMoreRef = useRef(null);
  const showExtraLanguages = () => {
    showMoreRef.current.remove();
    setextraLang(
      <span>
        {course.caption_languages
          .slice(2)
          .map((i, index) =>
            index < course.caption_languages.length - 3 ? `${i}, ` : i
          )}
      </span>
    );
  };
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
              {course.topics.map((t) => (
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
            <Box>{course.num_subscribers.toLocaleString("en-US")} students</Box>
          </Stack>
          <div>
            Created by{" "}
            {course.instructors.map((i, index) => (
              <span key={i.url}>
                <span className={styles.link}>{i.title}</span>
                {index < course.instructors.length - 1 ? ", " : ""}
              </span>
            ))}
          </div>
          <Box display="flex" className={styles.videoInfoList}>
            <div style={{ whiteSpace: "nowrap" }}>
              <NewReleases fontSize="inherit" sx={{ mr: 1, fontSize: 16 }} />
              Last updated {parseInt(date[1])}/{parseInt(date[0])}
            </div>
            <div style={{ whiteSpace: "nowrap" }}>
              <Language fontSize="inherit" sx={{ mr: 1, fontSize: 16 }} />
              {course.locale}
            </div>
            <div>
              <ClosedCaption fontSize="inherit" sx={{ mr: 1, fontSize: 16 }} />
              {course.caption_languages.length > 2 ? (
                <>
                  {course.caption_languages.slice(0, 2).map((i) => `${i}, `)}
                  <button
                    className={styles.linkBtn}
                    ref={showMoreRef}
                    onClick={showExtraLanguages}
                  >
                    {course.caption_languages.length - 2} more
                  </button>
                  {extraLang}
                </>
              ) : (
                course.caption_languages.map((i, index) =>
                  index < course.caption_languages.length - 1 ? `${i}, ` : i
                )
              )}
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
