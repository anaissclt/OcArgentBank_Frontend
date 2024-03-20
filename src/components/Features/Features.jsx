import React from 'react'
import "./features.css"
import PropTypes from "prop-types";

function Features(props) {
    const { iconSrc, title, description } = props;
  return (
    <>
    <div className="feature-item">
        {iconSrc && <img src={iconSrc} alt="Icon" className="feature-icon" />}
        <h3 className="feature-item-title">{title}</h3>
        <p>{description}</p>
      </div>
    </>
  )
}

Features.propTypes = {
    iconSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

export default Features