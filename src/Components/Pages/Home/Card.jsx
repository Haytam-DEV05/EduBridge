import React from "react";

export default function Card({ card }) {
  const { bgColor, color, title, img, description } = card;
  return (
    <div className="card">
      <span className="icon" style={{ color: color, backgroundColor: bgColor }}>
        {img}
      </span>
      <h2 className="title">{title}</h2>
      <span className="line"></span>
      <p className="description">{description}</p>
    </div>
  );
}
