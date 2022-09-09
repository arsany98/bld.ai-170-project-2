import { CircularProgress } from "@mui/material";
import React from "react";
import { useContext } from "react";
import DbContext from "./DbContext";

const withData =
  (Component) =>
  ({ ...props }) => {
    const db = useContext(DbContext);
    if (db.IsLoading) {
      return <CircularProgress color="inherit" />;
    } else if (db.Error) {
      return <div>{db.Error}</div>;
    } else if (db.Data) {
      return <Component {...props} {...db.Data}></Component>;
    }
  };
export default withData;
