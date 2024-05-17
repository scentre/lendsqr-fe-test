import { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import InputField from "./InputField";
import { CiBellOn } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { FaCaretDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { DashboardContext } from "./DashboardContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { setIsOpen } = useContext(DashboardContext);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  return (
    <main className="navbar-container">
      <img src={logo} alt="" onClick={() => navigate("/dashboard")} />

      <div>
        <InputField
          name="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for anything"
          type="text"
          value={search}
          searchClick={() => {}}
        />
      </div>
      <div className="nav-icons">
        <p>Docs</p>
        <CiBellOn size={"34px"} />
        <div className="nav-avatar">
          <RxAvatar size={"34px"} />
          <div className="caret">
            <span>Adedeji</span>
            <FaCaretDown />
          </div>
        </div>
      </div>
      <div className="nav-hamburger" onClick={() => setIsOpen(true)}>
        <RxHamburgerMenu size={"34px"} />
      </div>
    </main>
  );
};

export default Navbar;
