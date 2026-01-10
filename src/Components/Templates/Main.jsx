import React from "react";
import Courses from "../Pages/Cours/Courses";
import Home from "../Pages/Home/Home";
import Join from "../Pages/Join";
import Revies from "../Pages/Reviews/Revies";

export default function Main() {
  return (
    <main>
      <Home />
      <Courses />
      <Revies />
      <Join />
    </main>
  );
}
