import React from "react";
import "./SP3style.css";

export const Starting = (): JSX.Element => {
  return (
    <div className="starting">
      <div className="starting-page">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="rectangle" />
              <p className="how-you-ll-connect">
                How you&#39;ll connect with your future highly intelligent friends without the guidance of ancient
                wisdom? Let the ancient wisdom transform into your secret weapon!
              </p>
            </div>
          </div>
          <div className="text-wrapper">Stoicism</div>
          <div className="div">Skip</div>
          <div className="arrow-icon-wrapper">
            <img className="arrow-icon" alt="Arrow icon" src="arrow-icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
