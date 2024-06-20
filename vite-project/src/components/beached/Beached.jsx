import "./Beached.css"; 
import authorImage from "../../assets/author.svg";

function Beached() {
  return (
    <section className="beached">
      <div className="container">
        <div className="right-wrapper">
          <button className="beached-btn">Featured</button>
          <h1 className="beached-title">Beached to take you <br/> somewhere else</h1>
          <div className="author">
            <img src={authorImage} alt="author image" />
            <p>Farok Rastegar  .  1 hour ago</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Beached