import { CircularProgress } from "@mui/material";
import React from "react";
import { useContext } from "react";
import DbContext from "./DbContext";

const withData =
  (Component) =>
  ({ ...props }) => {
    const db = useContext(DbContext);
    if (db.IsLoading) {
      return (
        <div style={{ textAlign: "center", padding: "24px" }}>
          <CircularProgress color="inherit" />
        </div>
      );
    } else if (db.Error) {
      return (
        <div style={{ textAlign: "center", padding: "24px" }}>{db.Error}</div>
      );
    } else if (db.Data) {
      return <Component {...props} {...db.Data} />;
    }
  };
export default withData;
