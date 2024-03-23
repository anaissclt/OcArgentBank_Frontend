// IMPORT
import React from "react";

// STYLE
import "./button.css";

function Button(props) {
  // Destructuration des props
  const { className, text, onSubmit, type, onClick } = props;
  return (
    <button
      type={type}
      className={className}
      onSubmit={onSubmit}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
