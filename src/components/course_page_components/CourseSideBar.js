import {
  AllInclusive,
  Assignment,
  Code,
  EmojiEventsOutlined,
  FileDownloadOutlined,
  InsertDriveFileOutlined,
  OndemandVideo,
  Smartphone,
  Star,
} from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import withData from "../../contexts/WithData";
import styles from "./CourseSideBar.module.css";

function CourseSideBar({ id, courses }) {
  const course = courses.find((c) => c.id === id);
  let sideBarRef = useRef(null);
  const onScroll = () => {
    if (document.documentElement.scrollTop > 450) {
      sideBarRef.current.style.position = "fixed";
      sideBarRef.current.style.zIndex = 2;
      sideBarRef.current.querySelector("img").style.display = "none";
    } else {
      sideBarRef.current.style.position = "absolute";
      sideBarRef.current.style.zIndex = 0;
      sideBarRef.current.querySelector("img").style.display = "block";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <div className={styles.topBar}>
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
                {course.num_subscribers.toLocaleString("en-US")} students
              </Box>
            </Stack>
          </Box>
          <Box className={styles.purchase}>
            <Box fontSize={19} mr={2}>
              <b>E£{course.price.toLocaleString("en-US")}</b>
            </Box>
            <button className={styles.buyNowBtnTopBar}>
              <b>Buy now</b>
            </button>
          </Box>
        </Stack>
      </div>
      <div className={styles.sideBarContainer}>
        <div className={styles.sideBar} ref={sideBarRef}>
          <div>
            <img
              style={{ width: "100%" }}
              src={course.image}
              alt={course.title}
            />
          </div>
          <div style={{ padding: 24 }}>
            <div className={styles.price}>
              <b>E£{course.price.toLocaleString("en-US")}</b>
            </div>
            <div>
              <button className={styles.addToCartBtn}>
                <b>Add to cart</b>
              </button>
            </div>
            <div>
              <button className={styles.buyNowBtn}>
                <b>Buy now</b>
              </button>
            </div>
            <Box fontSize={12} textAlign="center">
              30-Day Money-Back Guarantee
            </Box>
            <div style={{ paddingTop: 16 }}>
              <h2 style={{ fontSize: 16 }}>
                <b>This course includes:</b>
              </h2>
              <Stack>
                {course.total_length ? (
                  <Box py={0.5}>
                    <OndemandVideo
                      fontSize="inherit"
                      sx={{ mr: 2, fontSize: 16 }}
                    />
                    {course.total_length} hours on-demand video
                  </Box>
                ) : (
                  <></>
                )}
                {course.articles_count ? (
                  <Box py={0.5}>
                    <InsertDriveFileOutlined
                      fontSize="inherit"
                      sx={{ mr: 2, fontSize: 16 }}
                    />
                    {course.articles_count} articles
                  </Box>
                ) : (
                  <></>
                )}
                {course.downlodables_count ? (
                  <Box py={0.5}>
                    <FileDownloadOutlined
                      fontSize="inherit"
                      sx={{ mr: 2, fontSize: 16 }}
                    />
                    {course.downlodables_count} downloadable resources
                  </Box>
                ) : (
                  <></>
                )}
                {course.exercises ? (
                  <Box py={0.5}>
                    <Code fontSize="inherit" sx={{ mr: 2, fontSize: 16 }} />{" "}
                    {course.exercises} coding exercises
                  </Box>
                ) : (
                  <></>
                )}
                {course.intencives.lifetime === true ? (
                  <Box py={0.5}>
                    <AllInclusive
                      fontSize="inherit"
                      sx={{ mr: 2, fontSize: 16 }}
                    />
                    Full lifetime access
                  </Box>
                ) : (
                  <></>
                )}
                {course.intencives.access ? (
                  <Box py={0.5}>
                    <Smartphone
                      fontSize="inherit"
                      sx={{ mr: 2, fontSize: 16 }}
                    />
                    Access on mobile and TV
                  </Box>
                ) : (
                  <></>
                )}
                {course.intencives.Assignments ? (
                  <Box py={0.5}>
                    <Assignment
                      fontSize="inherit"
                      sx={{ mr: 2, fontSize: 16 }}
                    />
                    Assignments
                  </Box>
                ) : (
                  <></>
                )}
                {course.intencives.certification ? (
                  <Box py={0.5}>
                    <EmojiEventsOutlined
                      fontSize="inherit"
                      sx={{ mr: 2, fontSize: 16 }}
                    />
                    Certificate of completion
                  </Box>
                ) : (
                  <></>
                )}
              </Stack>
            </div>
            <Box display="flex" justifyContent="space-between">
              <button className={styles.linkBtn}>
                <b>Share</b>
              </button>
              <button className={styles.linkBtn}>
                <b>Gift this course</b>
              </button>
              <button className={styles.linkBtn}>
                <b>Apply Coupon</b>
              </button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withData(CourseSideBar);
