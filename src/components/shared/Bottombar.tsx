import { bottombarLinks } from "@/constants";
import { INavLink } from "@/types";
import { NavLink } from "react-router-dom";

function Bottombar() {
  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link: INavLink) => (
        <NavLink
          key={`bottombar-${link.label}`}
          to={link.route}
          className="bottom-bar-link"
        >
          <img src={link.imgURL} alt={link.label} width={16} height={16} />

          <p className="tiny-medium text-light-2">{link.label}</p>
        </NavLink>
      ))}
    </section>
  );
}

export default Bottombar;
