import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import contactUs from "../assets/contact-us.png";

const missions = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.",
  },
];

const fields = [
  { id: "name", label: "Name", type: "text" },
  { id: "phone", label: "Phone Number", type: "tel", required: true },
  { id: "email", label: "E-mail", type: "email", required: true },
  { id: "interest", label: "Interested In", type: "text" },
];

export default function Main() {
  return (
    <div style={{ paddingLeft: 180 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 360,
        }}
      >
        <div>
          <h1 className="title-contact">PROJECT</h1>
          <h1 className="title-contact-1">Lorum</h1>
        </div>
        <div className="hero-image">
          <img src="src\assets\main-picture.png" alt="" />
          <Link to="/projetos/1" className="hero-link">
            VIEW PROJECT <BsArrowRight size={12} />
          </Link>
        </div>
      </div>
      <section className="about">
        <div className="about-images">
          <div className="about-column">
            <img className="about-img-top" src="src\assets\about1.png" alt="" />
            <img
              className="about-img-bottom"
              src="src\assets\about2.png"
              alt=""
            />
          </div>
          <img className="about-img-tall" src="src\assets\about3.png" alt="" />
        </div>

        <div className="about-text">
          <h1 className="title-contact">About</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <Link to="/sobre" className="about-button">
            READ MORE <BsArrowRight size={14} />
          </Link>
        </div>
      </section>
      <section className="mission">
        <h1 className="title-contact">Main Focus/Mission Statement</h1>
        <div className="mission-container">
          {missions.map((item) => (
            <div className="mission-item" key={item.id}>
              <span className="mission-number">{item.id}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="preview">
        <h1 className="title-contact">Our Projects</h1>
        <div className="preview-container">
          <div className="preview-row preview-row-1">
            <Link to="/projetos/1" className="preview-card">
              <img src={project1} alt="" />
              <div className="preview-card-text">
                <h3>
                  Sample
                  <br />
                  Project
                </h3>
                <span>
                  VIEW MORE <BsArrowRight size={14} />
                </span>
              </div>
            </Link>
            <img src={project2} alt="" />
          </div>

          <div className="preview-row preview-row-2">
            <img src={project3} alt="" />
            <img src={project4} alt="" />
            <img src={project5} alt="" />
          </div>

          <Link to="/projetos" className="all-projects-button">
            ALL PROJECTS <BsArrowRight size={14} />
          </Link>
        </div>
      </section>
      <section className="contact">
        <h1 className="title-contact">Contact Us</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="contact-container">
            <div className="contact-fields">
              {fields.map((field) => (
                <div className="contact-field" key={field.id}>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder=" "
                    required={field.required}
                  />
                  <label htmlFor={field.id} className="contact-label">
                    {field.label}
                    {field.required && <span>*</span>}
                  </label>
                </div>
              ))}
              <div className="contact-field contact-field-message">
                <textarea id="message" placeholder=" " required />
                <label htmlFor="message" className="contact-label">
                  Message<span>*</span>
                </label>
              </div>
            </div>
            <img src={contactUs} alt="" />
          </div>

          <button type="submit" className="send-button">
            SEND EMAIL <BsArrowRight size={14} />
          </button>
        </form>
      </section>
    </div>
  );
}
