import React from "react";
import TracksTabs from "./TracksTabs";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <picture>
          <source
            media="(max-width: 700px)"
            srcSet="
            https://img-c.udemycdn.com/notices/web_banner/slide_1_image_responsive_udlite/cd0b820f-6389-4ff0-87e2-bb5a90690545.jpg
            "
          />
          <img
            src="https://img-c.udemycdn.com/notices/web_banner/slide_1_image_udlite/b8f46419-eca3-44c1-8ba0-ed2ca89f8884.jpg"
            alt="a clock"
          />
        </picture>
        <div>
          <h1>New to Udemy? Lucky you.</h1>
          <p>
            Courses start at E£169.99. Get your new-student offer before it
            expires.
          </p>
        </div>
      </header>
      <main>
        <section>
          <div className={styles.coursesHeader}>
            <h1>A broad selection of courses</h1>
            <p>
              Choose from 185,000 online video courses with new additions
              published every month
            </p>
          </div>
          <TracksTabs />
        </section>
      </main>
    </div>
  );
}

export default Home;
