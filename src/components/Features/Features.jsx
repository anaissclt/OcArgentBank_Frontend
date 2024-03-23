// IMPORT
import React from "react";
import PropTypes from "prop-types";

// STYLE
import "./features.css";

function Features(props) {
  // Déstructure les props passées
  const { iconSrc, title, description } = props;
  return (
    <>
      <div className="feature-item">
        {iconSrc && <img src={iconSrc} alt="Icon" className="feature-icon" />}
        <h3 className="feature-item-title">{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}

// Définit les types des props attendues
Features.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Features;
