import './style/Nav.css';
import {Link} from "react-router-dom";
import {NavHashLink} from "react-router-hash-link";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Nav (){
    return (

     <section className='nav-sec'>
         <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><i className="bi bi-camera"></i>Digital Eye</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/product">Camera</Link>
        </li>
        <li className="nav-item">
          <NavHashLink className="nav-link" to="/product#lens">Lens</NavHashLink>
        </li>
        <li className="nav-item">
          <NavHashLink className="nav-link" to="/product#ass">Accessories</NavHashLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About-Us</Link>
        </li>
        <li className="nav-item">
          <NavHashLink className="nav-link" to="/about#cont">Support</NavHashLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/"><i className="bi bi-cart4"></i></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login"><i className="bi bi-person"></i></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
     </section>

    )
}

export default Nav;