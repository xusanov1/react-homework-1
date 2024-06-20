import "./Footer.css";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import beIcon from "../../assets/be.svg";
import whatIcon from "../../assets/what.svg";




function footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-box">

          <div className="column">
            <h2>First Column</h2> <br />
            <a href="#">Link One</a> <br /> <br />
            <a href="#">Link Two</a> <br /> <br />
            <a href="#">Link Three</a> <br /> <br />
            <a href="#">Link Four</a> <br /> <br />
          </div>

          <div className="column"> 
            <h2>Second Column</h2>  <br />
            <a href="#">Link One</a> <br /> <br />
            <a href="#">Link Two</a><br /> <br />
            <a href="#">Link Three</a><br /> <br />
            <a href="#">Link Four</a><br /> <br />
          </div>

          <div className="column">
            <h2>Third Column</h2> <br /> 
            <a href="#">Link One</a> <br /> <br />
            <a href="#">Link Two</a> <br />  <br />
            <a href="#">Link Three</a> <br />  <br />
            <a href="#">Link Four</a> <br />  <br />
          </div>

          <div className="column">
            <h2>Fourth Column</h2> <br />
            <a href="#">Link One</a> <br />  <br />
            <a href="#">Link Two</a> <br />  <br />
            <a href="#">Link Three</a> <br /> <br />
            <a href="#">Link Four</a> <br /> <br />
          </div>

          <div className="never">
            <h2>Never miss an update</h2>
            <input type="text" className="never-input" placeholder="Placeholder" />
            <button className="never-btn">▿</button>
          </div>
        </div>
        <div className="down">
          <img src={whatIcon} alt="what icon" />
          
        <p className="footer-p">Copyright 2021</p>

        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100093534169995"><img src={facebookIcon} alt="facebook icon" /></a>
          <a href="https://www.instagram.com/1.khusanov_oo/"><img src={instagramIcon} alt="instagram icon" /></a>
          <a href="https://x.com/IzzatilloXusan"><img src={twitterIcon} alt="twitter icon" /></a>
          <a href="#"><img src={beIcon} alt="be icon" /></a>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default footer