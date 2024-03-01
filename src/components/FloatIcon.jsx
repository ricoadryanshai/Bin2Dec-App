import { icon } from "../js/floatingIcon";
import "../styles/floatingIcon.css";

const FloatIcon = () => {
  return (
    <aside className={icon.className}>
      <a href={icon.href}>
        <img src={icon.src} alt={icon.alt} />
      </a>
    </aside>
  );
};

export default FloatIcon;
