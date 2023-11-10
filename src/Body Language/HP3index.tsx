import React from "react";
import "./HP3style.css";

export const HomepageDesktop = (): JSX.Element => {
  return (
    <div className="homepage-desktop">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="background">
            <div className="overlap-group">
              <img className="ellipse" alt="Ellipse" src="ellipse-16.png" />
              <img className="img" alt="Ellipse" src="ellipse-17.png" />
              <img className="ellipse-2" alt="Ellipse" src="ellipse-18.png" />
              <img className="ellipse-3" alt="Ellipse" src="ellipse-19.png" />
              <img className="ellipse-4" alt="Ellipse" src="ellipse-20.png" />
              <img className="ellipse-5" alt="Ellipse" src="ellipse-21.png" />
              <img className="ellipse-6" alt="Ellipse" src="ellipse-22.png" />
            </div>
          </div>
          <div className="rectangle" />
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper">E - books</div>
            </div>
          </div>
          <div className="picture">
            <div className="div">
            <img className="image" alt="im" src={require("./image-40.png")} />
              <div className="text-wrapper-2">Articles</div>
            </div>
          </div>
          <img className="img-2" alt="Img" src="6002fa9051c2ec00048c6c7a-1.png" />
          <div className="text-wrapper-3">BODY language</div>
          <img
            className="science-brain-icon"
            alt="Science brain icon"
            src="science-brain-icon-on-transparent-background-free-png-1.png"
          />
          <div className="courses">
            <div className="overlap-2">
              <div className="text-wrapper-4">Courses</div>
            </div>
          </div>
          <div className="quizzes">
            <div className="overlap-3">
              <div className="text-wrapper-5">People</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
