import React from "react";
import "./HP6style.css";

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
          <img className="star" alt="Star" src="star-1.svg" />
          <div className="text-wrapper">Clear Chat History</div>
          <div className="div">Export Data</div>
          <p className="p">
            Save new chats on this device to your history and allow them to be used to improve our models. Unsaved chats
            will be deleted from our systems within 30 days. This setting does not sync across devices. Learn more
          </p>
          <div className="text-wrapper-2">Chat History Training</div>
          <div className="text-wrapper-3">Data control</div>
          <div className="about">
            <div className="text-wrapper-4">Terms of Use</div>
            <div className="text-wrapper-5">Privacy Policy</div>
            <div className="text-wrapper-6">Licenses</div>
            <div className="text-wrapper-7">ChatGPT for iOS</div>
          </div>
          <img className="ai-settings" alt="Ai settings" src="ai-settings.svg" />
        </div>
      </div>
    </div>
  );
};
