import { Star, StarBorder } from "@mui/icons-material";
import { Box, LinearProgress, Rating, Stack } from "@mui/material";
import React from "react";
import withData from "../../contexts/WithData";
import Review from "./Review";

function CourseReviews({ id, courses }) {
  const course = courses.find((c) => c.id === id);
  let sum = 0;
  course.reviews_context.ratingDistribution.forEach((element) => {
    sum += element.count;
  });
  let ratings = course.reviews_context.ratingDistribution.map((r) => ({
    rating: r.rating,
    percent: Math.round((r.count / sum) * 100),
  }));
  ratings.reverse();
  return (
    <>
      <div id="reviews">
        <h2>
          <b>Student feedback</b>
        </h2>
        <Box display="flex">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box fontSize={64} color="var(--dark-yellow)">
              <b>{Math.round(course.rating * 10) / 10}</b>
            </Box>
            <Rating
              icon={<Star fontSize="small" />}
              emptyIcon={
                <StarBorder
                  fontSize="small"
                  style={{ color: "var(--yellow)" }}
                />
              }
              value={course.rating}
              sx={{ color: "var(--yellow)" }}
              readOnly
              precision={0.5}
            />
            <Box color="var(--dark-yellow)">
              <p>
                <b>Course Rating</b>
              </p>
            </Box>
          </Box>
          <Stack width="100%" pl={4}>
            {ratings.map((r) => (
              <Stack
                direction="row"
                key={r.rating}
                alignItems="center"
                cursor="pointer"
                mb={1}
                color="var(--grey)"
              >
                <Box width="100%" mr={1} height={8}>
                  <LinearProgress
                    variant="determinate"
                    value={r.percent}
                    color="inherit"
                    sx={{ height: "100%" }}
                  />
                </Box>
                <Rating
                  icon={<Star fontSize="small" />}
                  emptyIcon={
                    <StarBorder
                      fontSize="small"
                      style={{ color: "var(--yellow)" }}
                    />
                  }
                  value={r.rating}
                  sx={{ color: "var(--yellow)" }}
                  readOnly
                  precision={0.5}
                />
                <Box minWidth={35} ml={1}>
                  {r.percent}%
                </Box>
              </Stack>
            ))}
          </Stack>
        </Box>
      </div>
      <div>
        <h2>
          <b>Reviews</b>
        </h2>
        {course.reviews.map((r) => (
          <Review key={r.id} review={r} />
        ))}
      </div>
    </>
  );
}

export default withData(CourseReviews);
