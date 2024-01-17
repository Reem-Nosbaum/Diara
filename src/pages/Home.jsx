import "../styles/Home.css";
import MenenImg from "../assets/image/BBM-DESK.png";
import WomenImg from "../assets/image/BBW-DESK.png";
import Button from "../components/Button";

function Home() {
  return (
    <div className="container">
      <div className="image-container">
        <img className="women-img" src={WomenImg} />
        <img className="men-img" src={MenenImg} />
      </div>
      <div className="button-container">
        <Button text="SHOP WOMEN" />
        <Button text="SHOP MEN" />
      </div>
    </div>
  );
}

export default Home;
