import { Box } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "./CourseSideBar.module.css";
import Incentives from "./Incentives";

function CourseSideBar({ course }) {
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
            <Incentives course={course} />
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
  );
}

export default CourseSideBar;
