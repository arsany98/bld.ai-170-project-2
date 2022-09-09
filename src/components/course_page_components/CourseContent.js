import { Check, ExpandMore, PlayCircle } from "@mui/icons-material";
import React from "react";
import withData from "../../contexts/WithData";
import styles from "./CourseContent.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Stack,
} from "@mui/material";
function CourseContent({ id, courses }) {
  const course = courses.find((c) => c.id === id);
  const courseContent = course.curriculum_context.data;
  let contentLength = courseContent.estimated_content_length_text.split(":");
  let roundMin = (s) => {
    let t = s.split(":");
    if (parseInt(t[1]) >= 30) return parseInt(t[0]) + 1;
    else return parseInt(t[0]);
  };
  return (
    <>
      <div style={{ padding: 24, border: "1px solid var(--light-grey)" }}>
        <h2>
          <b>What you'll learn</b>
        </h2>
        <Grid container spacing={1}>
          {course.what_you_will_learn.map((i) => (
            <Grid item key={i.id} xs={12} sm={6} display="flex">
              <Check fontSize="inherit" sx={{ mr: 2, fontSize: 16 }} />
              <Box>{i.title}</Box>
            </Grid>
          ))}
        </Grid>
      </div>
      <div>
        <h2>
          <b>Course content</b>
        </h2>
        <div>
          {courseContent.sections.length} sections •{" "}
          {courseContent.num_of_published_lectures} lectures •{" "}
          {contentLength[0]}h {contentLength[1]}m total length
        </div>
        <div>
          {courseContent.sections.map((s) => (
            <Accordion
              key={s.index}
              disableGutters
              square
              elevation={0}
              sx={{
                border: "1px solid var(--light-grey)",
                "&:not(:last-child)": {
                  borderBottom: 0,
                },
                "&:before": {
                  display: "none",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  flexDirection: "row-reverse",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <div>
                    <b>{s.title}</b>
                  </div>
                  <div className={styles.info}>
                    {s.lecture_count} lectures •{" "}
                    {roundMin(s.content_length_text)}min
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  borderTop: "1px solid var(--light-grey)",
                }}
              >
                <Stack>
                  {s.items.map((i) => (
                    <Box
                      key={i.id}
                      p={1}
                      display="flex"
                      justifyContent="space-between"
                    >
                      <div>
                        <PlayCircle
                          fontSize="inherit"
                          sx={{ mr: 2, fontSize: 16 }}
                        />
                        {i.can_be_previewed ? (
                          <button className={styles.linkBtn}>{i.title}</button>
                        ) : (
                          i.title
                        )}
                      </div>
                      <div className={styles.info}>
                        {i.can_be_previewed ? (
                          <button className={styles.linkBtn}>Preview</button>
                        ) : (
                          <></>
                        )}
                        <span style={{ marginLeft: 32 }}>
                          {i.content_summary}
                        </span>
                      </div>
                    </Box>
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </>
  );
}

export default withData(CourseContent);
