import React from "react";

export default function Review({ infoReview }) {
  const { description, img, job, name, starts } = infoReview;
  return (
    <div className="rating">
        <span className="stars">{starts}</span>
        <p className="description">{description}</p>
        <div className="personne">
            <img src={img} alt={name} />
            <div>
                <h3 className="text-primary">{name}</h3>
                <p>{job}</p>
            </div>
        </div>
    </div>
  );
}
