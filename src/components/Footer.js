import { Language } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <button className={styles.langBtn}>
          <Language fontSize="small" />
          <span style={{ marginLeft: 4 }}>English</span>
        </button>
        <ul className={styles.linksList}>
          <li>
            <Link to="/">
              <span>Udemy Business</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Teach on Udemy</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Get the app</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>About us</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Contact us</span>
            </Link>
          </li>
        </ul>
        <ul className={styles.linksList}>
          <li>
            <Link to="/">
              <span>Careers</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Help and Support</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Affiliate</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Investors</span>
            </Link>
          </li>
        </ul>
        <ul className={styles.linksList}>
          <li>
            <Link to="/">
              <span>Terms</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Privacy policy</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Cookie settings</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Sitemap</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>Accessibility statement</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${styles.columns} ${styles.logoAndCopyright}`}>
        <div className={styles.logo}>
          <Link to="/">
            <img
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
              alt="Udemy"
              width="91"
              height="34"
            />
          </Link>
        </div>
        <div className={styles.copyright}>© 2022 Udemy, Inc.</div>
      </div>
    </footer>
  );
}

export default Footer;
