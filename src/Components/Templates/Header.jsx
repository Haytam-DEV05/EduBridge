import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiArrowRight } from "react-icons/hi";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
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
        <div
          className="menu-bar"
          onClick={() => setOpenMenu(!openMenu)}
          aria-label="button menu"
        >
          {openMenu ? <IoMdClose size={28} /> : <RxHamburgerMenu size={28} />}
        </div>
        {/* MOBILE LINKS */}
        <nav
          className={openMenu ? "nav-mobile show" : "nav-mobile"}
        >
          <div
            className="close-button"
            onClick={() => setOpenMenu(false)}
            style={{ display: openMenu ? "block" : "none" }}
          >
            <IoClose size={30} />
          </div>
          <ul style={{ display: openMenu ? "block" : "none" }}>
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
          <div
            className="account"
            style={{ display: openMenu ? "block" : "none" }}
          >
            <a href="#">Login</a>
            <a href="#">
              Join Us <HiArrowRight />
            </a>
          </div>
        </nav>
        {/* MOBILE LINKS */}
      </nav>
    </header>
  );
}
