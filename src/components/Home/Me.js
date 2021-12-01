import React from "react";

export default function Me() {
  return (
    <>
      <div className="me">
        <h5>Built with🤍</h5>
        <h3>made by:</h3>
        <h4>kushagra agnihotri</h4>
        <p>
          {" "}
          Creating memorable websites and apps with outstanding UI/UX designs.
        </p>
        <a
          className="me-pic"
          target="_blank"
          href="https://kushagra-aa.github.io/portfolio/"
          rel="noreferrer"
        >
          <img
            src="https://pbs.twimg.com/profile_images/1391264894192738307/YLfn-2Xk_400x400.jpg"
            alt="Me"
          />
        </a>
        <a
          target="_blank"
          href="https://kushagra-aa.github.io/portfolio/#about"
          rel="noreferrer"
        >
          <button className="me-btn me-btn-1">more about me</button>
        </a>
        <a
          target="_blank"
          href="https://kushagra-aa.github.io/portfolio/#contact"
          rel="noreferrer"
        >
          <button className="me-btn me-btn-2">contact me</button>
        </a>
        <a
          target="_blank"
          href="https://kushagra-aa.github.io/portfolio/#projects"
          rel="noreferrer"
        >
          <button className="me-btn me-btn-3">more by Me</button>
        </a>
      </div>
    </>
  );
}
