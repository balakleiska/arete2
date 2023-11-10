import React from "react";
import "./HP7style.css";

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
          <img className="star" alt="Star" src="star-1.svg" />
          <div className="text-wrapper">Settings</div>
          <div className="account">
            <div className="div">Account</div>
            <div className="account-selection">
              <div className="edit-profile">
                <div className="text-wrapper-2">Edit Profile</div>
              </div>
              <div className="manage-sub">
                <div className="text-wrapper-3">Manage Subscription</div>
              </div>
              <div className="text-wrapper-4">Notification Settings</div>
            </div>
          </div>
          <div className="about-us">
            <div className="text-wrapper-5">About Us</div>
            <div className="selection">
              <div className="privacy-policy">
                <div className="text-wrapper-6">Privacy Policy</div>
              </div>
              <div className="licenses">
                <div className="text-wrapper-7">Licenses</div>
                <div className="contact-us">
                  <div className="text-wrapper-7">Contact Us</div>
                </div>
              </div>
              <div className="terms-of-use">
                <div className="text-wrapper-8">Terms of Use</div>
              </div>
            </div>
          </div>
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
