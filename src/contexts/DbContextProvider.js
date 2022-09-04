import React, { useReducer, useEffect } from "react";
import DbContext from "./DbContext";

async function fetchData() {
  let url = `http://localhost:3001/tracks`;
  let response = await fetch(url);
  let tracks = await response.json();
  url = `http://localhost:3001/courses`;
  response = await fetch(url);
  let courses = await response.json();
  return { tracks, courses };
}
function DbContextProvider({ children }) {
  const [state, dispatch] = useReducer(
    (oldState, action) => {
      if (action.type === "SEND_REQUEST") {
        return { Data: {}, IsLoading: true, Error: "" };
      }
      if (action.type === "SUCCESS") {
        return { Data: action.payload, IsLoading: false, Error: "" };
      }
      if (action.type === "FAILURE") {
        return { Data: {}, IsLoading: false, Error: action.payload };
      }
    },
    { Data: {}, IsLoading: false, Error: "" }
  );
  useEffect(() => {
    dispatch({ type: "SEND_REQUEST" });
    fetchData()
      .then((data) => {
        dispatch({ type: "SUCCESS", payload: data });
      })
      .catch(() => {
        dispatch({ type: "FAILURE", payload: "Error: Something Went Wrong" });
      });
  }, []);
  return <DbContext.Provider value={state}>{children}</DbContext.Provider>;
}

export default DbContextProvider;
