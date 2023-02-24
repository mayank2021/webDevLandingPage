import React from "react";
import "./ClubNameAnim.css";

const ClubNameAnim = ({ anim }) => {
  return (
    <div
      className="class-name-anim--container"
      style={{ animation: anim, animationFillMode: "forwards" }}
    >
      <div className="words words-1">
        <span>W</span>
        <span>E</span>
        <span>B</span>
      </div>
      <div className="words words-1">
        <span>D</span>
        <span>E</span>
        <span>V</span>
      </div>
      <div className="words words-1">
        <span>I</span>
        <span>I</span>
        <span>I</span>
        <span>T</span>
        <span>T</span>
      </div>
    </div>
  );
};

export default ClubNameAnim;
