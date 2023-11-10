import React from "react";
import "./HP4style.css";

export const HomepageDesktop = (): JSX.Element => {
  return (
    <div className="homepage-desktop">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="articles">
            <div className="text-wrapper">Articles</div>
          </div>
          <div className="courses">
            <div className="div">Courses</div>
          </div>
          <div className="quizzes">
            <div className="div">People</div>
          </div>
          <div className="e-books">
            <div className="text-wrapper-2">E - books</div>
          </div>
          <div className="text-wrapper-3">psychology</div>
          <div className="frame">
            <img className="arrow-icon" alt="Arrow icon" src="arrow-icon.svg" />
          </div>
          <img
            className="science-brain-icon"
            alt="Science brain icon"
            src="science-brain-icon-on-transparent-background-free-png-1.png"
          />
          <img className="img" alt="Img" src="6002fa9051c2ec00048c6c7a-1.png" />
        </div>
      </div>
    </div>
  );
};
