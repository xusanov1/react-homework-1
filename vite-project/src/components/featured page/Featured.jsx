import "./Featured.css";
import watchImage from "../../assets/watch.svg";
import beatsImage from "../../assets/beats.svg";
import iphoneImage from "../../assets/iphone.svg";
import covidImage from "../../assets/covid.svg";
import gilofImage from "../../assets/gilof.svg";
import macImage from "../../assets/macbook.svg";
import authorImage from "../../assets/author.svg";



function Featured() {
  return (
    <section>
      <div className="container">
        <h1 className="featured-title">Featured articles</h1>
        <div className="featured-cards">
          <div className="featured-card">
            <img src={watchImage} alt="watch image" />
            <h2>10 beaches you must visit</h2>
            <div className="author">
              <img src={authorImage} alt="author image" />
              <p>Farok Rastegar  .  1 hour ago</p>
            </div>
            <p className="featured-description">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
          </div>

          <div className="featured-card">
            <img src={beatsImage} alt="beats image" />
            <h2>10 beaches you must visit</h2>
            <div className="author">
              <img src={authorImage} alt="author image" />
              <p>Farok Rastegar  .  1 hour ago</p>
            </div>
            <p className="featured-description">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
          </div>

          <div className="featured-card">
            <img src={iphoneImage} alt="iphone image" />
            <h2>10 beaches you must visit</h2>
            <div className="author">
              <img src={authorImage} alt="author image" />
              <p>Farok Rastegar  .  1 hour ago</p>
            </div>
            <p className="featured-description">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
          </div>
        </div>


        <div className="featured-cards">
          <div className="featured-card">
            <img src={covidImage} alt="watch image" />
            <h2>10 beaches you must visit</h2>
            <div className="author">
              <img src={authorImage} alt="author image" />
              <p>Farok Rastegar  .  1 hour ago</p>
            </div>
            <p className="featured-description">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
          </div>

          <div className="featured-card">
            <img src={gilofImage} alt="beats image" />
            <h2>10 beaches you must visit</h2>
            <div className="author">
              <img src={authorImage} alt="author image" />
              <p>Farok Rastegar  .  1 hour ago</p>
            </div>
            <p className="featured-description">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
          </div>

          <div className="featured-card">
            <img src={macImage} alt="iphone image" />
            <h2>10 beaches you must visit</h2>
            <div className="author">
              <img src={authorImage} alt="author image" />
              <p>Farok Rastegar  .  1 hour ago</p>
            </div>
            <p className="featured-description">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the…</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Featured