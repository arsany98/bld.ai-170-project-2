import {
  AllInclusive,
  Assignment,
  Code,
  EmojiEventsOutlined,
  FileDownloadOutlined,
  InsertDriveFileOutlined,
  OndemandVideo,
  Smartphone,
} from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import React from "react";

function Incentives({ course }) {
  return (
    <Stack>
      {course.total_length ? (
        <Box py={0.5}>
          <OndemandVideo fontSize="inherit" sx={{ mr: 2, fontSize: 16 }} />
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

      {course.incentives?.lifetime ? (
        <Box py={0.5}>
          <AllInclusive fontSize="inherit" sx={{ mr: 2, fontSize: 16 }} />
          Full lifetime access
        </Box>
      ) : (
        <></>
      )}
      {course.incentives?.access ? (
        <Box py={0.5}>
          <Smartphone fontSize="inherit" sx={{ mr: 2, fontSize: 16 }} />
          Access on mobile and TV
        </Box>
      ) : (
        <></>
      )}
      {course.incentives?.Assignments ? (
        <Box py={0.5}>
          <Assignment fontSize="inherit" sx={{ mr: 2, fontSize: 16 }} />
          Assignments
        </Box>
      ) : (
        <></>
      )}
      {course.incentives?.certification ? (
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
  );
}

export default Incentives;
