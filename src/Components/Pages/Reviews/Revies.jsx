import React from "react";
import SectionHeader from "../SectionHeader";
import Review from "./Review";
import { ratingData } from "../../../../data";

export default function Revies() {
  return (
    <section id="reviews">
      <div className="container">
        <SectionHeader
          title={"Each and every client is important"}
          description={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
          natus vitae voluptate, consequatur laudantium repudiandae
          exercitationem autem error explicabo, eaque ex quis enim labore.
          Ducimus!`}
        />
        <div className="ratings">
          {ratingData.map((ele) => {
            return <Review infoReview={ele} key={ele.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
