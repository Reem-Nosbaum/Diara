import BagIcon from "../assets/BagIcon";
import HeartIcon from "../assets/HeartIcon.JSX";
import LetterA from "../assets/LetterA";
import LetterD from "../assets/LetterD";
import LetterI from "../assets/LetterI";
import LetterR from "../assets/LetterR";
import Menu from "../assets/Menu";
import Search from "../assets/Search";
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
      <div className="logo">
        <LetterD />
        <LetterI />
        <LetterA />
        <LetterR />
        <LetterA />
      </div>
      <div className="search-and-menu">
        <div className="search">
          <Search />
        </div>
        <div className="menu">
          <span>MENU</span>
          <Menu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
