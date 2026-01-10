import React from "react";
import { HiArrowRight } from "react-icons/hi";

export default function Header() {
  return (
    <header id="header">
      <nav className="navBare">
        <h1 className="logo">
          <a href="#">EduBridge</a>
        </h1>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="account">
          <a href="#">Login</a>
          <a href="#" className="btn-join">
            Join Us <HiArrowRight />
          </a>
        </div>
      </nav>
    </header>
  );
}
