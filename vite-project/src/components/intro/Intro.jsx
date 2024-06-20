import './Intro.css';
import intro from '../../assets/intro.svg';
import authorImage from "../../assets/author.svg";


function Intro() {
  return (
    <section className='intro'>
        <div className="container">
          <div className="card">
            <h1>5 mind blowing facts about the iPhone 14</h1>
            <div className="author">
                <img src={authorImage} alt="author image" />
                <p>Farok Rastegar  .  1 hour ago</p>
            </div>
          </div>

        </div>
    </section>
  )
}

export default Intro