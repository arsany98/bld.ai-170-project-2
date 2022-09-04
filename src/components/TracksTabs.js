import React, { useContext } from "react";
import CoursesList from "./CoursesList";
import DbContext from "../contexts/DbContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./Tabs.module.css";

const renderFetchResult = (state) => {
  if (state.IsLoading) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  } else if (state.Error) {
    return <div>{state.Error}</div>;
  } else if (state.Data.tracks) {
    return (
      <Tabs selectedTabClassName={styles.selected}>
        <TabList className={styles.tabs}>
          {state.Data.tracks.map((track) => (
            <Tab key={track.id} className={styles.tab}>
              {track.name}
            </Tab>
          ))}
        </TabList>
        {state.Data.tracks.map((track) => (
          <TabPanel key={track.id}>
            <CoursesList track={track}></CoursesList>
          </TabPanel>
        ))}
      </Tabs>
    );
  }
};
function TracksTabs() {
  const db = useContext(DbContext);
  return <>{renderFetchResult(db)}</>;
}

export default TracksTabs;
