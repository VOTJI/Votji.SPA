import React from "react";
import { AboutWrapper } from "./styles";
import logo from "../../../../../assets/icons/Group 1524.png";



export const About = () => {
  return (
    <AboutWrapper>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <header className="header">
        for Professionalism.<br />
        for flexibility.
        </header>
      <p className="details">
        Bridge is an exclusive network of the top freelance
        software developers, designers and product managers
        in the world. Top companies hire Bridge freelancers for
        their most important projects.
        </p>
    </AboutWrapper>
  )
};