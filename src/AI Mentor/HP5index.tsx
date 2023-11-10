import React from "react";
import "./HP5style.css";

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
          <img className="img-2" alt="Img" src="6002fa9051c2ec00048c6c7a-1.png" />
          <div className="writting-bar">
            <div className="div">
              <img className="go-button" alt="Go button" src="go-button.svg" />
              <div className="text-wrapper">Ask and find out...</div>
            </div>
          </div>
          <img className="star" alt="Star" src="star-1.svg" />
          <img className="ai-settings" alt="Ai settings" src="ai-settings.svg" />
          <div className="text-wrapper-2">AI Mentor</div>
        </div>
      </div>
    </div>
  );
};
