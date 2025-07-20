// src/CardContainer.jsx
import React from "react";
import "./card.css";

export default function CardContainer({ title, children }) {
  return (
    <div className="card-container">
      {title && <h2 className="card-title">{title}</h2>}
      {children}
    </div>
  );
}