import React from "react";
import "./HP9style.css";

export const People = (): JSX.Element => {
  return (
    <div className="people">
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
              <div className="text-wrapper">Epictetus</div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="div">
                <div className="text-wrapper-2">Zeno of Citium</div>
              </div>
            </div>
            <div className="frame-2">
              <div className="overlap-2">
                <div className="text-wrapper-3">Marcus Aurelius</div>
              </div>
            </div>
            <div className="frame-3">
              <div className="overlap-3">
                <div className="text-wrapper-4">Chrysippus</div>
              </div>
            </div>
            <div className="frame-4">
              <div className="overlap-4">
                <div className="text-wrapper-3">Seneca the Younger</div>
              </div>
            </div>
            <div className="frame-5">
              <div className="text-wrapper-5">Diogenes of Babylon</div>
            </div>
          </div>
          <div className="text-wrapper-6">Stoicism</div>
          <img className="img-2" alt="Img" src="6002fa9051c2ec00048c6c7a-1.png" />
          <div className="text-wrapper-7">People</div>
          <img
            className="science-brain-icon"
            alt="Science brain icon"
            src="science-brain-icon-on-transparent-background-free-png-1.png"
          />
          <div className="arrow-icon-wrapper">
            <img className="arrow-icon" alt="Arrow icon" src="arrow-icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
