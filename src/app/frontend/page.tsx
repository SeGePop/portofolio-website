"use client"

import to_do_list from "../../../public/images/to_do_list.jpg"
import clock from "../../../public/images/25+5_clock.jpg";
import calculator from "../../../public/images/calculator.jpeg";
import drum_machine from "../../../public/images/drum_machine.jpeg";
import random_quote from "../../../public/images/random_quote.jpeg";
import { SocialIcon } from "react-social-icons";
import "react-slideshow-image/dist/styles.css";
import Image from "next/image";

export default function FrontEnd() {
  return (
    <section className="frontend_projects_content" id="frontend_projects_content">
      {/* spacing fix -> emtpy div */}
      <div></div>
      <div className="frontend_gallery">
        <a href="/frontend/clock">
          <Image loading="lazy" src={clock} alt="25+5 Clock" />
        </a>
        <div className="frontend_desc">
        Keep track of your time studying, and when to take a break.
          <br></br>
          <br></br>
          <SocialIcon
            className="project_button"
            style={{ height: 80, width: 80 }}
            bgColor="#047690"
            fgColor="white"
            network="github"
            href="https://github.com/SeGePop/my-app/tree/master/src/components/25-5-Clock-main"
            target="_blank"
          />
        </div>
      </div>

      <div className="frontend_gallery">
        <a href="/frontend/to_do_list">
          <Image loading="lazy" src={to_do_list} alt="To-Do List" />
        </a>
        <div className="frontend_desc">
        A To-Do List app with local storage for privacy.
          <br></br>
          <br></br>
          <SocialIcon
            className="project_button"
            style={{ height: 80, width: 80 }}
            bgColor="#047690"
            fgColor="white"
            network="github"
            href="https://github.com/SeGePop/my-app/tree/master/src/components/To-Do-App/src"
            target="_blank"
          />
        </div>
      </div>

      <div className="frontend_gallery">
        <a href="/frontend/calculator">
          <Image
            loading="lazy"
            className="image"
            src={calculator}
            alt="Calculator"
          />
        </a>
        <div className="frontend_desc">
        Working Calculator built from scratch using JavaScript
          <br></br>
          <br></br>
          <SocialIcon
            className="project_button"
            style={{ height: 80, width: 80 }}
            bgColor="#047690"
            fgColor="white"
            network="github"
            href="https://github.com/SeGePop/my-app/tree/master/src/components/JSCalculator-main"
            target="_blank"
          />
        </div>
      </div>

      <div className="frontend_gallery">
        <a href="/frontend/drum">
          <Image
            loading="lazy"
            className="image"
            src={drum_machine}
            alt="Drum Machine"
          />
        </a>
        <div className="frontend_desc">
        Keyboard and Mouse activated drum machine.
          <br></br>
          <br></br>
          <SocialIcon
            className="project_button"
            style={{ height: 80, width: 80 }}
            bgColor="#047690"
            fgColor="white"
            network="github"
            href="https://github.com/SeGePop/my-app/tree/master/src/components/DrumMachine-main"
            target="_blank"
          />
        </div>
      </div>

      <div className="frontend_gallery">
        <a href="/frontend/randomquotes">
          <Image loading="lazy" src={random_quote} alt="Random Quote Generator" />
        </a>
        <div className="frontend_desc">
        A random quote generator.
          <br></br>
          <br></br>
          <SocialIcon
            className="project_button"
            style={{ height: 80, width: 80 }}
            bgColor="#047690"
            fgColor="white"
            network="github"
            href="https://github.com/SeGePop/my-app/tree/master/src/components/RandomQuoteGenerator-main"
            target="_blank"
          />
        </div>
      </div>
      {/* spacing fix */}
      <div></div>
    </section>
  );
}
