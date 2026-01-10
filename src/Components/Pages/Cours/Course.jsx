import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { CiAlarmOn } from "react-icons/ci";
import { FaBookOpen, FaChevronRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Course({ course }) {
  const {
    img,
    description,
    departement,
    discount,
    duration,
    lessons,
    price,
    rating,
    sales,
    title,
  } = course;
  return (
    <div className="course">
      <span className="sale">Sale</span>
      <img src={img} alt={title} />
      <div className="content">
        <div className="course-field">
          <p className="departement">{departement}</p>
          <p className="rating">
            <IoStarSharp />
            {rating}
          </p>
        </div>
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <p className="sales">{sales} sales</p>
        <p className="price">
          <del>{price}</del>
          <span className="text-secondary">{discount}</span>
        </p>
        <div className="course-info">
          <p>
            <CiAlarmOn />
            {duration}
          </p>
          <p>
            <FaBookOpen />
            {lessons}
          </p>
        </div>
        <a href="#" className="btn-learn">
          Learn More <FaChevronRight />
        </a>
      </div>
    </div>
  );
}
