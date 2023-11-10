import React from "react";
import "./SIstyle.css";

export const SignIn = (): JSX.Element => {
  return (
    <div className="sign-in">
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
          <div className="text-wrapper">ARETÉ</div>
          <div className="div">QUIET VICTORIES</div>
          <div className="text-wrapper-2">SIGN IN</div>
          <div className="text-wrapper-3">Sign in with Apple</div>
          <div className="text-wrapper-4">Sign in with Google</div>
          <div className="flexcontainer">
            <p className="text">
              <span className="span">
                We value your privacy <br />
              </span>
            </p>
            <p className="text">
              <span className="span">By signing up, you agree to our terms and privacy policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
