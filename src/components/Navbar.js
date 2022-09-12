import React from "react";
import {
  Language,
  Menu,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
function Navbar() {
  return (
    <>
      <nav className="d-flex d-md-none">
        <ul className={styles.navbar} style={{ padding: "4px" }}>
          <li>
            <button className={styles.linkBtn}>
              <Menu />
            </button>
          </li>
          <li>
            <div style={{ width: "48px" }}></div>
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
            <button className={styles.linkBtn}>
              <Search />
            </button>
          </li>
          <li>
            <button className={styles.linkBtn}>
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
            <button className={styles.linkBtn}>Categories</button>
          </li>
          <li style={{ width: "100%", margin: "12px" }}>
            <SearchForm />
          </li>
          <li className={styles.hideAt1080}>
            <button className={styles.linkBtn}>Udemy Business</button>
          </li>
          <li className={styles.hideAt920}>
            <button className={styles.linkBtn}>Teach on Udemy</button>
          </li>
          <li>
            <button className={styles.linkBtn}>
              <ShoppingCartOutlined />
            </button>
          </li>
          <li>
            <button className={styles.loginBtn}>
              <b>Log in</b>
            </button>
          </li>
          <li>
            <button className={styles.signupBtn}>
              <b>Sign up</b>
            </button>
          </li>
          <li>
            <button className={styles.iconBtn}>
              <Language fontSize="small" />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
