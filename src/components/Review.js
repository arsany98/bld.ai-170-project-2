import React, { useState } from "react";
import { Box, Rating } from "@mui/material";
import styles from "./Review.module.css";
import {
  StarBorder,
  Star,
  ThumbUpOffAlt,
  ThumbDownOffAlt,
} from "@mui/icons-material";

function Review({ review }) {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const [FeedbackTitle, setFeedbackTitle] = useState(
    "Was this review helpful?"
  );
  const onLikeClick = () => {
    setLike((oldState) => {
      if (!oldState) {
        setFeedbackTitle("Thank you for your feedback");
      } else {
        setFeedbackTitle("Was this review helpful?");
      }
      return !oldState;
    });
    if (dislike) setDislike(false);
  };
  const onDislikeClick = () => {
    setDislike((oldState) => {
      if (!oldState) {
        setFeedbackTitle("Thank you for your feedback");
      } else {
        setFeedbackTitle("Was this review helpful?");
      }
      return !oldState;
    });
    if (like) setLike(false);
  };
  return (
    <>
      <div className={styles.review}>
        <div className={styles.reviewAvatar}>
          {review.user.image_50x50.includes("anonymous") ? (
            <div className={styles.userImage}>
              <b>{review.user.initials}</b>
            </div>
          ) : (
            <img
              className={styles.userImage}
              src={review.user.image_50x50}
              alt={review.user.initials}
            />
          )}
        </div>
        <div className={styles.reviewContent}>
          <Box mb={1} fontSize={16}>
            <b>{review.user.public_display_name}</b>
          </Box>
          <Box display="flex" mb={1}>
            <Rating
              icon={<Star fontSize="small" />}
              emptyIcon={
                <StarBorder
                  fontSize="small"
                  style={{ color: "var(--yellow)" }}
                />
              }
              value={review.rating}
              sx={{ color: "var(--yellow)" }}
              readOnly
              precision={0.5}
            />
            <Box ml={1} color="var(--grey)">
              {review.created_formatted_with_time_since}
            </Box>
          </Box>
          <div dangerouslySetInnerHTML={{ __html: review.content_html }}></div>
          <Box fontSize={12} mb={1}>
            {FeedbackTitle}
          </Box>
          <div>
            <button
              className={`${styles.circleBtn} ${
                like ? styles.blackBg : styles.whiteBg
              }`}
              onClick={onLikeClick}
            >
              <ThumbUpOffAlt />
            </button>
            <button
              className={`${styles.circleBtn} ${
                dislike ? styles.blackBg : styles.whiteBg
              }`}
              onClick={onDislikeClick}
            >
              <ThumbDownOffAlt />
            </button>

            <span
              style={{
                color: "var(--dark)",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Report
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
