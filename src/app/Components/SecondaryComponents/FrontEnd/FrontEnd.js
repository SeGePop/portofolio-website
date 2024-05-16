import to_do_list from "../../../images/to_do_list.jpg"
import clock from "../../../images/25+5_clock.jpg";
import calculator from "../../../images/calculator.jpeg";
import drum_machine from "../../../images/drum_machine.jpeg";
import random_quote from "../../../images/random_quote.jpeg";
import { SocialIcon } from "react-social-icons";
import "react-slideshow-image/dist/styles.css";
import { useTranslation } from "react-i18next";

export default function FrontEnd() {
  const [t] = useTranslation("global");
  return (
    <section className="frontend_projects_content" id="frontend_projects_content">
      {/* spacing fix -> emtpy div */}
      <div></div>
      <div className="frontend_gallery">
        <a href="/frontend/clock">
          <img loading="lazy" src={clock} alt="25+5 Clock" />
        </a>
        <div className="frontend_desc">
          {t("projects.clock")}
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
          <img loading="lazy" src={to_do_list} alt="To-Do List" />
        </a>
        <div className="frontend_desc">
          {t("projects.to_do_list")}
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
          <img
            loading="lazy"
            className="image"
            src={calculator}
            alt="Calculator"
          />
        </a>
        <div className="frontend_desc">
          {t("projects.calculator")}
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
          <img
            loading="lazy"
            className="image"
            src={drum_machine}
            alt="Drum Machine"
          />
        </a>
        <div className="frontend_desc">
          {t("projects.piano")}
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
          <img loading="lazy" src={random_quote} alt="Random Quote Generator" />
        </a>
        <div className="frontend_desc">
          {t("projects.quote")}
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
