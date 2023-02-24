import React from "react";
import "./Text.css";

const Text = ({ title, size, type, animation }) => {
  return (
    <div
      className={`${size} ${type} text`}
      style={{ animation: animation, animationFillMode: "forwards" }}
    >
      {title}
    </div>
  );
};

export default Text;
