import React from "react";
import "./Button.css";

export const Button = ({ label, type, onClick }) => {
  const className = type === "outlined" ? "outlined_btn" : "filled_btn";
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {label}
    </button>
  );
};
