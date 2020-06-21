import React from "react";

class Ctonact extends React.Component {
  render() {
    return (
      <div className="contactContainer">
        <h2>
          Contact<span> --</span>
        </h2>
        <p>
          If you're a fan of my work, if you enjoy technology or tacos, or if
          you are looking to get into contact with a kick-ass engineer with
          great dad jokes, hit me up!
        </p>
        <div className="contactLinks">
          <a href="mailto:whatsup@btwicode.com">whatsup@btwicode.com</a>
          <a
            href="https://github.com/benjamin-t-wilson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="linkedin.com/in/benjamin-t-wilson/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    );
  }
}

export default Ctonact;
