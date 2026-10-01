import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import project1 from "../assets/project1-img.png";
import project2 from "../assets/project2-img.png";
import project3 from "../assets/project3-img.png";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "Sample Project",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: project1,
    },
    {
      id: 2,
      name: "Sample Project 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: project2,
    },
    {
      id: 3,
      name: "Sample Project 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: project3,
    },
  ];

  return (
    <div style={{ paddingLeft: 180 }}>
      <h1 className="title-contact">Our</h1>
      <h1 className="title-contact-1">Projects</h1>
      <div className="line"></div>

      <div className="projects-container">
        {projects.map((project) => {
          return (
            <div className="project" key={project.id}>
              <img src={project.image} alt="" />
              <div className="project-text">
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <div className="project-button">
                  <Link to={`/projetos/${project.id}`}>VIEW MORE</Link>
                  <BsArrowRight color="#000" size={20} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
