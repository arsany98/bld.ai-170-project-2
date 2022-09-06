import React from "react";
import CoursesList from "./CoursesList";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./Tabs.module.css";
import withData from "../contexts/WithData";

function TracksTabs({ tracks }) {
  return (
    <Tabs
      className={styles.tabsContainer}
      selectedTabClassName={styles.selected}
    >
      <TabList className={styles.tabs}>
        {tracks.map((track) => (
          <Tab key={track.id} className={styles.tab}>
            {track.name}
          </Tab>
        ))}
      </TabList>
      {tracks.map((track) => (
        <TabPanel key={track.id}>
          <CoursesList track={track}></CoursesList>
        </TabPanel>
      ))}
    </Tabs>
  );
}

export default withData(TracksTabs);
