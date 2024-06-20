import logo from "../../assets/fabrx.svg"
import avatar from "../../assets/avatar.svg";
import podarok from "../../assets/podarok.svg";
import notifaction from "../../assets/notifaction.svg";

import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <img src={logo} alt="fabrx logo" />
      <ul className="list">
          <li className="list-item-1"><img src={avatar} alt="avatar image" /> <select>
            <option value="Bruce Lee">Bruce Lee</option>
            <option value="Jeki Chan">Jeki Chan</option>
            <option value="Jason Chan">Jason Chan</option>
            </select>
            </li>
            <li className="list-item-2"><a href="#"><img src={podarok} alt="podarok icon" /></a></li>
            <li className="list-item-3"><a href="#"><img src={notifaction} alt="notifaction icon" /></a></li>
            </ul>
    </nav>
  )
}

export default Nav