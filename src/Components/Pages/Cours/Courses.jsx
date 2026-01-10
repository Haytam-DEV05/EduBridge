import React from "react";
import Course from "./Course";
import { coursesData } from "../../../../data";
import SectionHeader from "../SectionHeader";

export default function Courses() {
  return (
    <section id="courses">
      <div className="container">
        <SectionHeader
          title="Make Online education acessible"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum non
            debitis, saepe recusandae repellat unde cupiditate quam amet dolorem
            provident voluptate molestias sequi possimus ex?"
        />
        <div className="courses-container">
          {coursesData.map((ele) => {
            return <Course key={ele.id} course={ele} />;
          })}
        </div>
      </div>
    </section>
  );
}
