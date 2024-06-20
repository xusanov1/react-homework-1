import "./Pathway.css";
import pathway1Image from "../../assets/pathway1.svg";
import pathway2Image from "../../assets/pathway2.svg";
import pathway3Image from "../../assets/pathway3.svg";
import pathway4Image from "../../assets/pathway4.svg";
import pathway5Image from "../../assets/pathway5.svg";
import authorImage from "../../assets/author.svg";





function Pathway() {
  return (
    <section>
      <div className="container">
        <h1 className="pathway-title">Featured articles</h1>

        <div className="pathway-cards">

        <div className="pathway-card">
          <img className="pathway-image" src={pathway1Image} alt="pathway image" />
          <div className="pathway-box">
            <h1 className="pathway-card-title">My awesome safari in Lahbab Desert, United Arab Emirates</h1>
          <div className="author">
            <img src={authorImage} alt="author image" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
          <p className="pathway-description">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
          </div>
        </div>

        <div className="pathway-card">
          <img className="pathway-image" src={pathway2Image} alt="pathway image" />
          <div className="pathway-box">
            <h1 className="pathway-card-title">10 amazing things to do in Cuba</h1>
          <div className="author">
            <img src={authorImage} alt="author image" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
          <p className="pathway-description">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
          </div>
        </div>

        <div className="pathway-card">
          <img className="pathway-image" src={pathway3Image} alt="pathway image" />
          <div className="pathway-box">
            <h1 className="pathway-card-title">The best street food in the world. Ranked!</h1>
          <div className="author">
            <img src={authorImage} alt="author image" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
          <p className="pathway-description">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
          </div>
        </div>

        <div className="pathway-card">
          <img className="pathway-image" src={pathway4Image} alt="pathway image" />
          <div className="pathway-box">
            <h1 className="pathway-card-title">Travel Packing guide for beginners</h1>
          <div className="author">
            <img src={authorImage} alt="author image" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
          <p className="pathway-description">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
          </div>
        </div>

        <div className="pathway-card">
          <img className="pathway-image" src={pathway5Image} alt="pathway image" />
          <div className="pathway-box">
            <h1 className="pathway-card-title">Pathway to the Mediterranean</h1>
          <div className="author">
            <img src={authorImage} alt="author image" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
          <p className="pathway-description">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a…</p>
          </div>
        </div>

        <button className="pathway-btn">Read more</button>



        </div>

      </div>
    </section>
  )
}

export default Pathway