import BagIcon from "../assets/BagIcon";
import HeartIcon from "../assets/HeartIcon.JSX";
import UserIcon from "../assets/UserIcon";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="icon-container">
        <div className="bag-icon">
          <BagIcon />
        </div>
        <div className="heart-icon">
          <HeartIcon />
        </div>
        <div className="user-icon">
          <UserIcon />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
