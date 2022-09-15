import { ClosedCaption, Language, NewReleases } from "@mui/icons-material";
import { Box, Skeleton, Stack } from "@mui/material";
import React, { useRef, useState } from "react";
import styles from "./VideoInfoList.module.css";
function VideoInfoList({ course }) {
  const [extraLang, setextraLang] = useState();
  let date = course.last_update_date?.split("-");
  let showMoreRef = useRef(null);
  const showExtraLanguages = () => {
    showMoreRef.current.remove();
    setextraLang(
      <span>
        {course.caption_languages
          ?.slice(2)
          .map((i, index) =>
            index < course.caption_languages.length - 3 ? `${i}, ` : i
          )}
      </span>
    );
  };
  return (
    <Box display="flex" className={styles.videoInfoList}>
      <Stack direction="row" style={{ whiteSpace: "nowrap" }}>
        <NewReleases fontSize="inherit" sx={{ mr: 1, fontSize: 16 }} />
        {date ? (
          "Last updated " + parseInt(date[1]) + "/" + parseInt(date[0])
        ) : (
          <Skeleton sx={{ bgcolor: "var(--grey)", width: "5vw" }} />
        )}
      </Stack>
      <Stack direction="row" style={{ whiteSpace: "nowrap" }}>
        <Language fontSize="inherit" sx={{ mr: 1, fontSize: 16 }} />
        {course.locale || (
          <Skeleton sx={{ bgcolor: "var(--grey)", width: "5vw" }} />
        )}
      </Stack>
      <Stack direction="row" flexWrap="wrap">
        <ClosedCaption fontSize="inherit" sx={{ mr: 1, fontSize: 16 }} />
        {course.caption_languages ? (
          course.caption_languages.length > 2 ? (
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
          )
        ) : (
          <Skeleton sx={{ bgcolor: "var(--grey)", width: "5vw" }} />
        )}
      </Stack>
    </Box>
  );
}

export default VideoInfoList;
