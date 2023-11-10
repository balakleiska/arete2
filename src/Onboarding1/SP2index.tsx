import React from "react";
import "./SP2style.css";

export const Starting = (): JSX.Element => {
  return (
    <div className="starting">
      <div className="starting-page">
        <div className="overlap">
          <div className="group">
            <div className="overlap-group">
              <div className="rectangle" />
              <p className="a-greek-term">
                {" "}
                A Greek term, signifies the pursuit of excellence, the embodiment of virtue, and the relentless journey
                towards achieving one&#39;s highest potential.
              </p>
            </div>
          </div>
          <div className="text-wrapper">“Areté”</div>
          <div className="div">Skip</div>
          <div className="arrow-icon-wrapper">
            <img className="arrow-icon" alt="Arrow icon" src="arrow-icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
