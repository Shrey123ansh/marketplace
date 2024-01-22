import React from "react";

import PropTypes from "prop-types";

import "./component.css";

const AppComponent = (props) => {
  return (
    <div className={`app-component-container ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="app-component-image"
      />
      <div className="app-component-container1">
        <p className="app-component-text">{props.text}</p>
        <button type="button" className="app-component-button button">
          {props.button}
        </button>
      </div>
    </div>
  );
};

AppComponent.defaultProps = {
  image_src: "../../public/rectangle%2034-1500h.png",
  text: "Ram Mandir Inauguration Live Updates: Countdown to Ram Temple opening...",
  rootClassName: "",
  image_alt: "image",
  button: "READ MORE..",
};

AppComponent.propTypes = {
  image_src: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  button: PropTypes.string,
};

export default AppComponent;
