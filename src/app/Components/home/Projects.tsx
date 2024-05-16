import frontend from "../../../../public/images/frontend.jpeg";
import backend from "../../../../public/images/backend.jpeg";
import fullstack from "../../../../public/images/fullstack.jpeg";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="projects_content" id="projects_content">
      <h1>Projects</h1>

      <div className="gallery">
        <a href="/frontend">
          <Image loading="lazy" src={frontend} alt="FrontEnd" />
        </a>
        <div className="desc">
          FrontEnd
          <br></br>
          <br></br>
        </div>
      </div>

      <div className="gallery">
        <a href="/backend">
          <Image loading="lazy" src={backend} alt="BackEnd" />
        </a>
        <div className="desc">
          BackEnd
          <br></br>
          <br></br>
        </div>
      </div>

      <div className="gallery">
        <a href="/fullstack">
          <Image
            loading="lazy"
            className="image"
            src={fullstack}
            alt="Fullstack"
          />
        </a>
        <div className="desc">
          Fullstack
          <br></br>
          <br></br>
        </div>
      </div>
    </section>
  );
}
