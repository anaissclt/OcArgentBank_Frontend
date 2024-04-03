// IMPORT
import React from "react";

// STYLE
import "./input.css";

export default function Input(props) {
  const { className, htmlFor, type, id, text, value, onChange, onSubmit, autocomplete } = props;
  return (
    <div className={className}>
       <label htmlFor={htmlFor}>{text}</label>
       <input type={type} id={id} value={value} onChange={onChange} onSubmit={onSubmit} autoComplete={autocomplete}/>
    </div>
  );
}
