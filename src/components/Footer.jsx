import Facebook from "../assets/Facebook";
import Instagram from "../assets/Instagram";
import Tiktok from "../assets/Tiktok";
import Twiter from "../assets/Twiter";
import Youtube from "../assets/Youtube";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <h1 className="footer-text">Follow Us On Social Media</h1>
      <div className="footer-icons">
        <div className="instagram">
          <Instagram />
        </div>
        <div className="youtube">
          <Youtube />
        </div>
        <div className="facebook">
          <Facebook />
        </div>
        <div className="twiter">
          <Twiter />
        </div>
        <div className="tiktok">
          <Tiktok />
        </div>
      </div>
    </div>
  );
}

export default Footer;
