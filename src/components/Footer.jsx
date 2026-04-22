import './style/Footer.css';
import {Link} from "react-router-dom";
import {NavHashLink} from "react-router-hash-link";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
    return (

 <footer className='foot-sec py-5'>
     <div className='container'>
        <div className='row g-4'>
           
            <div className='col-md-3 col-12'>
                <h3 className='foot-logo'>DIGITAL <span>EYE</span></h3>
                <p className='foot-about'>Your premier destination for professional cinematography and photography gear. Capture the world with precision.</p>
                <div className='social-icons'>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-twitter-x"></i>
                </div>
            </div>

            <div className='col-md-3 col-12'>
                <h5 className='foot-head'>Quick Links</h5>
                <ul className='foot-links'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/camera">Cameras</Link></li>
                    <li><Link to="/lens">Lenses</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                </ul>
            </div>

            <div className='col-md-3 col-12'>
                <h5 className='foot-head'>Support</h5>
                <ul className='foot-links'>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Shipping Policy</a></li>
                    <li><a href="#">Help Center</a></li>
                </ul>
            </div>

            <div className='col-md-3 col-12'>
                <h5 className='foot-head'>Contact Us</h5>
                <div className='contact-item'>
                    <i className="bi bi-geo-alt-fill"></i>
                    <span>123 Camera Street, Bangalore.</span>
                </div>
                <div className='contact-item'>
                    <i className="bi bi-telephone-fill"></i>
                    <span>0000000000</span>
                </div>
                <div className='contact-item'>
                    <i className="bi bi-envelope-fill"></i>
                    <span>digitaleye@gmail.com</span>
                </div>
            </div>
        </div>
        
        <hr className='foot-hr' />
        <p className='text-center copyright'>&copy; 2026 Digital Eye. All Rights Reserved.</p>
     </div>
 </footer>

    )
}

export default Footer;