import React from "react";
import Card from "./Card";
import { cardData } from "../../../../data";

export default function Home() {
  const result = cardData.map((ele) => {
    return <Card card={ele} key={ele.id} />;
  });

  return (
    <section id="home">
      <div className="container">
        <div className="home-header">
          <span>Join Us</span>
          <h1>Best Learning Opportinities</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            sunt eveniet laborum blanditiis.
          </p>
          <a href="#" className="btn btn-read">
            Get Quote Now
          </a>
          <a href="#" className="btn btn-transparent">
            Learn More
          </a>
        </div>
        <div className="card-container">{result}</div>
      </div>
    </section>
  );
}
