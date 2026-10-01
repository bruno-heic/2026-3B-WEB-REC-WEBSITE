import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone, MdOutlineMail } from "react-icons/md";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaPinterestP,
} from "react-icons/fa";
import logo from "../assets/logo-white.png";

const links = [
  { to: "/", label: "Main" },
  { to: "/galeria", label: "Gallery" },
  { to: "/projetos", label: "Projects" },
  { to: "/certificacoes", label: "Certifications" },
  { to: "/contato", label: "Contacts" },
];

const socials = [
  { name: "Facebook", icon: FaFacebookF, href: "https://facebook.com" },
  { name: "Twitter", icon: FaTwitter, href: "https://twitter.com" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com" },
  { name: "Pinterest", icon: FaPinterestP, href: "https://pinterest.com" },
];

function Footer() {
  return (
    <div className="footer">
      <div className="footer-main">
        <img src={logo} alt="Digital Project" />

        <div className="footer-section">
          <h4>Information</h4>
          {links.map((link) => (
            <Link key={link.to} to={link.to}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="footer-section footer-contacts">
          <h4>Contacts</h4>
          <div className="footer-contact footer-contact-address">
            <IoLocationOutline color="#fff" size={18} />
            <p>
              1234 Sample Street
              <br />
              Austin Texas 78704
            </p>
          </div>
          <div className="footer-contact">
            <MdOutlinePhone color="#fff" size={18} />
            <p>512.333.2222</p>
          </div>
          <div className="footer-contact">
            <MdOutlineMail color="#fff" size={18} />
            <p>sampleemail@gmail.com</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Social Media</h4>
          <div className="footer-social">
            {socials.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
              >
                <Icon color="#fff" size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-line"></div>
        <p className="footer-rights">© 2021 All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
