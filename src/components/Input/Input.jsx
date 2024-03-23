// IMPORT
import React from "react";

// STYLE
import "./input.css";

export default function Input(props) {
  const { className, htmlFor, type, id, text, value } = props;
  return (
    <div className={className}>
      <label htmlFor={htmlFor}>{text}</label>
      <input type={type} id={id} value={value} />
    </div>
  );
}
