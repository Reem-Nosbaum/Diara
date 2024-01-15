import "../styles/Home.css";
import MenenImg from "../assets/image/men-img.png";
import WomenImg from "../assets/image/women-img.png";

function Home() {
  return (
    <div className="image-container">
      <img className="women-img" src={WomenImg} />
      <img className="men-img" src={MenenImg} />
    </div>
  );
}

export default Home;
