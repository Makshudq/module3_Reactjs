import React from "react";

function Card({ description }) {
  return (
    <div>
      <div className="card">
        <p className="read-the-docs">{description}</p>
      </div>
    </div>
  );
}

export default Card;
