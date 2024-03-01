import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logo } from "../js/header";
import "../styles/header.css";

const Header = () => {
  return (
    <header>
      <a href={logo.link} className={logo.className}>
        <FontAwesomeIcon icon={logo.image} />
        <span>{logo.name}</span>
      </a>
    </header>
  );
};

export default Header;
