import { Link } from 'react-router-dom';
import heroImg from '../assets/hero.png';
import '../App.css';

function Header() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImg})` }}>
      <h1>CREATORVERSE</h1>
      <div className="hero-buttons">
        <Link to="/Creators">VIEW ALL CREATORS</Link>
        <Link to="/Create">ADD A CREATOR</Link>
      </div>
    </div>
  );
}

export default Header;
