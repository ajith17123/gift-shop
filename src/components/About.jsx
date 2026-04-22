import './style/About.css';
import {Link} from "react-router-dom";
import {NavHashLink} from "react-router-hash-link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg from '../assets/Images/about-img.jpg';

function About() {
    return (

        <>

{/* {aboutsec} */}

            <section className='about-sec py-5'>
                <div className='container'>
                    <h2 className='about-head' data-aos="fade-down">Who We Are</h2>
                    <div className='row'>
                        <div className='col-md-6 col-12' data-aos="fade-right">
                            <div className='about-img-card'>
                                <img src={aboutImg} alt="Camera Gear" className='img-fluid' />
                            </div>
                        </div>
                        <div className='col-md-6 col-12' data-aos="fade-left">
                            <div className='card about-card-text'>
                                <p className='about-para'>
                                    At Digital Eye, we are more than just a camera store; we are a community for visual storytellers. 
                                    Founded with a passion for high-end cinematography and photography, we provide the world's 
                                    most advanced gear to help you capture life's fleeting moments with absolute clarity. 
                                    Our mission is to empower creators with precision tools that turn vision into reality. 
                                    From professionals to enthusiasts, we offer tailored gear to meet every creative need.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

{/* {contactsection} */}

            <section className='cont-sec py-5' id='cont'>
                <div className='container'>
                    <h2 className='section-title' data-aos="fade-up">Get In Touch</h2>
                    <div className='row g-4'>
                    
                        <div className='col-md-6 col-12' data-aos="fade-up">
                            <div className='contact-form-box'>
                                <input type="text" placeholder='Your Name' className='form-control' />
                                <input type="email" placeholder='Your Mail' className='form-control' />
                                <textarea placeholder='Message' className='form-control mb-3' rows="5"></textarea>
                                <button className='send-btn'>Send Message</button>
                            </div>
                        </div>
                     
                        <div className='col-md-6 col-12' data-aos="fade-up">
                            <div className='card map-card'>
                                <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.921319766934!2d80.252033!3d13.040711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzI2LjYiTiA4MMKwMTUnMDcuMyJF!5e0!3m2!1sen!2sin!4v1680000000000" 
                                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Section */}

            <section className='video-sec py-5'>
                <div className='container'>
                    <div className='row g-4'>
                        <div className='col-md-6 col-12' data-aos="zoom-in">
                            <div className='video-box'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/B1XXl9VzFCA?si=njFW-JoWnAVD1TvO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div className='col-md-6 col-12' data-aos="zoom-in">
                            <div className='video-box'>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/6yMGIADzjs4?si=JWzwe2ixyux1SX88" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

</>

    )
}

export default About;