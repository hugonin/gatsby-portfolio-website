import React from "react";
import { Router } from "@gatsbyjs/reach-router";

import Home from "./home";

import GrowthTipsPage from "./growthTipsPage";
import Contact from "./contact";


import "../styles/index.css";

export default function IndexPage() {
  return (
    <>
      <Router>
        <Home path="/" />
        <GrowthTipsPage path="/growthTipsPage" />
        <Contact path="/contact" />
      </Router>
    </>
  );
}
