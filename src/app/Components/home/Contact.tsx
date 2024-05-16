import { SocialIcon } from "react-social-icons";

export default function Contact() {

  return (
    <section className="contact_content" id="contact_content">
      <div className="contact_info">
        <div className="contacts-container">
          <h1>Get in touch!</h1>
          <div className="columns">
            <div className="left_column">
              <ul>
                <li>
                  <i>Hiring? </i>Let's discuss your project requirements, goals, and timeline. I'm excited to collaborate and create something amazing together.</li>
                <p></p>
                <li>
                  <i>Contracting? </i>Need a reliable developer for a specific task or ongoing support? Look no further—I'm here to assist.</li>
              </ul>

              <div className="contacts-element"></div>
              <div className="email-element">
                <a
                  href="mailto:sergiugeorgepop@gmail.com"
                  className="contacts-email"
                >
                  sergiugeorgepop@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="social_buttons">
            <div></div>
            <SocialIcon
              style={{ height: 80, width: 80 }}
              bgColor="#047690"
              fgColor="white"
              url="https://linkedin.com"
              href="https://www.linkedin.com/in/sergiu-george-pop-0a9097260/"
              target="_blank"
            />
            <SocialIcon
              style={{ height: 80, width: 80 }}
              bgColor="#047690"
              fgColor="white"
              network="github"
              href="https://github.com/SeGePop"
              target="_blank"
            />
            <SocialIcon
              style={{ height: 80, width: 80 }}
              bgColor="#047690"
              fgColor="white"
              url="https://twitter.com"
              href="https://twitter.com/SeGePop"
              target="_blank"
            />
            <div></div>
          </div>
          <div className="right_column"></div>
        </div>
      </div>
    </section>
  );
}
