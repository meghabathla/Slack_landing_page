import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import Slack_logo_2 from "../../assets/Slack_logo_2.png";
import { Button } from "../Button/Button";

export const Navbar = () => {
  return (
    <nav className="navbar_section">
      <div className="navbar_first_section">
        <img className="logo" src={Slack_logo_2} alt="logo_slack" />

        <ul className="nav_links">
          <li>Product</li>
          <li>Enterprise</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="navbar_second_section">
        <div>
          <div className="search_icon">
            <IoSearch />
          </div>
        </div>
        <div className="nav_buttons">
          <button className="signIn_btn">Sign In</button>
          <Button label="TALK TO SALES" type="outlined" />
          <Button label="TRY FOR FREE" />
        </div>
      </div>
    </nav>
  );
};
