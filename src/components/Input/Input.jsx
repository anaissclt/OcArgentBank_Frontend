// IMPORT
import React from "react";

// STYLE
import "./input.css";

export default function Input(props) {
   // Déstructure les props passées
  const { className, htmlFor, type, id, text, value, onChange, onSubmit, autocomplete , disabled} = props;
  return (
    <div className={className}>
       <label htmlFor={htmlFor}>{text}</label>
       <input type={type} id={id} value={value} onChange={onChange} disabled={disabled} onSubmit={onSubmit} autoComplete={autocomplete}/>
    </div>
  );
}
