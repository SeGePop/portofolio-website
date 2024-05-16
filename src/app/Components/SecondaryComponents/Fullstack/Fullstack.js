import "react-slideshow-image/dist/styles.css";
import { useTranslation } from "react-i18next";
import logo from "../../../images/logo.png"

export default function Fullstack() {
  const [t] = useTranslation("global");
  return (
    <section className="under_construction">
    <img src={logo} alt="logo"></img>
    <br></br>
      <h1>⚒ Under Construction ⚒</h1>
    </section>
  );
}
