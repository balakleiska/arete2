import React from "react";
import "./HP8style.css";

export const Courses = (): JSX.Element => {
  return (
    <div className="courses">
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
          <img className="img-2" alt="Img" src="6002fa9051c2ec00048c6c7a-1.png" />
          <div className="text-wrapper">Courses</div>
          <img
            className="science-brain-icon"
            alt="Science brain icon"
            src="science-brain-icon-on-transparent-background-free-png-1.png"
          />
          <div className="frame">
            <div className="div">Stoicism</div>
            <img className="arrow-icon" alt="Arrow icon" src="arrow-icon.svg" />
            <div className="frame-2">
              <div className="main-quotes-wrapper">
                <div className="main-quotes">
                  main <br />
                  quotes
                </div>
              </div>
              <div className="main-practises-wrapper">
                <div className="main-practises">
                  main <br />
                  practises
                </div>
              </div>
              <div className="stoicism-on-emotions-wrapper">
                <div className="stoicism-on-emotions">
                  stoicism <br />
                  on emotions
                </div>
              </div>
              <div className="become-stoic-wrapper">
                <div className="become-stoic">
                  become <br />
                  stoic
                </div>
              </div>
              <div className="div-wrapper">
                <div className="text-wrapper-2">history</div>
              </div>
              <div className="difficult-times-wrapper">
                <div className="difficult-times">
                  difficult <br />
                  times
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
