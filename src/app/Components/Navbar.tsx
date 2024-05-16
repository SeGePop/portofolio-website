"use client"

import logo from "../../../public/images/logo.png";
import React, { useState } from "react";
import Image from 'next/image'

export default function Navbar() {

  const [activeButton, setActiveButton] = useState("HOME");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="topbar">
      <div className="topnav">
        <a
          href="/#home_content"
          className={`btn ${activeButton === "HOME" ? "active" : ""}`}
          onClick={() => handleButtonClick("HOME")}
        >
          HOME
        </a>
        <a
          href="/#credentials_content"
          className={`btn ${activeButton === "CREDENTIALS" ? "active" : ""}`}
          onClick={() => handleButtonClick("CREDENTIALS")}
        >
          CREDENTIALS
        </a>

        <a
          href="/#projects_content"
          className={`btn ${activeButton === "PROJECTS" ? "active" : ""}`}
          onClick={() => handleButtonClick("PROJECTS")}
        >
          PROJECTS
        </a>

        <a
          href="/#contact_content"
          className={`btn ${activeButton === "CONTACT" ? "active" : ""}`}
          onClick={() => handleButtonClick("CONTACT")}
        >
          CONTACT
        </a>
        <Image loading="lazy" src={logo} alt="Segepop" className="logo" />
      </div>
    </div>
  );
}
