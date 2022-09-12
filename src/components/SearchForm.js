import { Search } from "@mui/icons-material";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SearchForm.module.css";
function SearchForm() {
  const navigate = useNavigate();
  let searchFormRef = useRef(null);
  let inputRef = useRef(null);
  useEffect(() => {
    searchFormRef.current.addEventListener("submit", (event) => {
      event.preventDefault();
      let search = inputRef.current.value;

      if (search) navigate(`/?search=${search}`);
      else navigate(`/`);
    });
  }, [navigate]);
  return (
    <form action="" ref={searchFormRef} className={styles.search}>
      <input
        ref={inputRef}
        className={styles.textInput}
        type="text"
        placeholder="Search for anything"
      />
      <button className={styles.linkBtn} type="submit">
        <Search />
      </button>
    </form>
  );
}

export default SearchForm;
