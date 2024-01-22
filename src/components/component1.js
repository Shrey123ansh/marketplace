import React from "react";

import PropTypes from "prop-types";

import "./component1.css";

const Component1 = (props) => {
  return (
    <div className="component1-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component1-image"
      />
    </div>
  );
};

Component1.defaultProps = {
  image_src: "../../public/phase%201_%20launch%20and%20establishment-1500h.png",
  image_alt: "image",
};

Component1.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
};

export default Component1;
