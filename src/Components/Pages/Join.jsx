import React from "react";

export default function Join() {
  return (
    <section id="joinUs">
      <div className="content">
        <p className="text-primary">Practice Advice</p>
        <h2>JOIN US</h2>
        <p className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          expedita facere ipsum facilis ipsa praesentium, earum ab officia
          placeat autem voluptatibus quisquam tenetur. Rerum, incidunt.
        </p>
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email..."
          />
          <button type="button">subscribe</button>
        </form>
      </div>
    </section>
  );
}
