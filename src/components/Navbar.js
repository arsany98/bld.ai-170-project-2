import React, { useEffect, useRef } from "react";
import {
  Language,
  Menu,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
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
    <>
      <nav className="d-flex d-md-none">
        <ul className={`${styles.navbar} p-1`}>
          <li>
            <button className="mybtn whiteBg link">
              <Menu />
            </button>
          </li>
          <li>
            <div className="linkSpace"></div>
          </li>
          <li className={styles.udemyLogoContainer}>
            <Link to="/">
              <img
                className={styles.udemyLogo}
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                alt="Udemy"
              />
            </Link>
          </li>
          <li>
            <button className="mybtn whiteBg link">
              <Search />
            </button>
          </li>
          <li>
            <button className="mybtn whiteBg link">
              <ShoppingCartOutlined />
            </button>
          </li>
        </ul>
      </nav>
      <nav className="d-none d-md-flex">
        <ul className={`${styles.navbar} px-4`}>
          <li>
            <Link to="/">
              <img
                className={styles.udemyLogo}
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                alt="Udemy"
              />
            </Link>
          </li>
          <li>
            <button className="mybtn whiteBg link regFont">Categories</button>
          </li>
          <li className={styles.search}>
            <form action="" ref={searchFormRef}>
              <input
                ref={inputRef}
                className={`${styles.textInput} regFont`}
                type="text"
                placeholder="Search for anything"
              />
              <button className="mybtn whiteBg link" type="submit">
                <Search />
              </button>
            </form>
          </li>
          <li className={styles.hideAt1080}>
            <button className="mybtn whiteBg link regFont">
              Udemy Business
            </button>
          </li>
          <li className={styles.hideAt920}>
            <button className="mybtn whiteBg link regFont">
              Teach on Udemy
            </button>
          </li>
          <li>
            <button className="mybtn whiteBg link">
              <ShoppingCartOutlined />
            </button>
          </li>
          <li>
            <button className="mybtn whiteBg boldFont box">Log in</button>
          </li>
          <li>
            <button className="mybtn blackBg boldFont box">Sign up</button>
          </li>
          <li>
            <button className="mybtn whiteBg icon box">
              <Language fontSize="small" />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
