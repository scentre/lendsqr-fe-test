import { Link, useLocation } from "react-router-dom";
import { DashboardContext } from "./DashboardContext";
import { useContext } from "react";
type Icon = {
  iconName: string;
  icon: React.ReactElement;
  link: string;
};

type NavIconProps = {
  title: string;
  icons: Icon[];
};

const NavIconsContainer = ({ title, icons }: NavIconProps) => {
  const { setIsOpen } = useContext(DashboardContext);
  const location = useLocation();

  const isActiveLink = (link: string) => {
    const active = location.pathname === link;

    if (!active) {
      return location.pathname == link + "/1";
    }

    return active;
  };

  const logout = (iconName: string) => {
    setIsOpen(false);
    if (iconName == "Logout") {
      localStorage.clear();
    }
  };
  return (
    <div>
      <div className="sidebar-title">{title}</div>

      <div className="sidebar-item-container">
        {icons.map(({ icon, iconName, link }: Icon) => (
          <Link
            to={link}
            className={`sidebar-item ${isActiveLink(link) ? "active" : ""}`}
            key={iconName}
            onClick={() => logout(iconName)}
          >
            <span>{icon}</span> <span> {iconName} </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavIconsContainer;
