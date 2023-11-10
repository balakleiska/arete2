import React from "react";
import "./HPstyle.css";

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
          <div className="stoicism">
            <div className="div-wrapper">
              <div className="text-wrapper">Stoicism</div>
            </div>
          </div>
          <div className="frame">
            <div className="div">
              <div className="text-wrapper-2">Psychology</div>
            </div>
          </div>
          <div className="body-language">
            <div className="body-language-wrapper">
              <div className="body-language-2">
                Body <br />
                language
              </div>
            </div>
          </div>
          <img className="img-2" alt="Img" src="6002fa9051c2ec00048c6c7a-1.png" />
          <div className="philosophy">
            <div className="overlap-2">
              <div className="text-wrapper-3">Philosophy</div>
            </div>
          </div>
          <p className="p">What’s on your mind today?</p>
          <img
            className="science-brain-icon"
            alt="Science brain icon"
            src="science-brain-icon-on-transparent-background-free-png-1.png"
          />
        </div>
      </div>
    </div>
  );
};
