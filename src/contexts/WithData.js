import React from "react";
import { useContext } from "react";
import DbContext from "./DbContext";

const withData =
  (Component) =>
  ({ ...props }) => {
    const db = useContext(DbContext);
    if (db.IsLoading) {
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    } else if (db.Error) {
      return <div>{db.Error}</div>;
    } else if (db.Data) {
      return <Component {...props} {...db.Data}></Component>;
    }
  };
export default withData;
