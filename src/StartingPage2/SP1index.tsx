import React from "react";
import "./SP1style.css";

export const Starting = (): JSX.Element => {
  return (
    <div className="starting">
      <div className="starting-page">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="rectangle-18.png" />
          <div className="div" />
          <button className="register-button">
            <div className="overlap-group">
              <div className="text-wrapper">Get Started</div>
            </div>
          </button>
          <div className="text-wrapper-2">SLOGAN OR SMTH ELSE?¿</div>
          <img className="ARET" alt="Aret" src="ARET.png" />
        </div>
      </div>
    </div>
  );
};

