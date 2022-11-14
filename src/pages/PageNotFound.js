import React from "react";

function PageNotFound() {
  return (
    <div style={{ padding: 24, textAlign: "center" }}>
      <img
        src="https://s.udemycdn.com/error_page/error-desktop-v1.jpg"
        alt=""
        width="480"
        height="360"
      />
      <h1>We can’t find the page you’re looking for</h1>
      <p>
        Visit our <a href="/support/">support page</a> for further assistance.
      </p>
    </div>
  );
}

export default PageNotFound;
