import './style/Login.css';
import {Link} from "react-router-dom";
import {NavHashLink} from "react-router-hash-link";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Login (){
    return(
       <section className="login-sec py-5">
            <div className="container">
                {/* Main Title */}
                <h2 className='section-title text-center' data-aos="fade-down">Connect With Digital Eye</h2>
                
                <div className="row g-0 justify-content-center mt-5 shadow-lg auth-container">
                    
                    {/* --- Login Card --- */}
                    <div className="col-lg-5 col-md-6" data-aos="fade-right">
                        <div className="auth-card login-side">
                            <div className='icon-box'><i className="bi bi-camera-reels"></i></div>
                            <h2 className="auth-title">Welcome Back</h2>
                            <p className="auth-subtitle">Login</p>
                            
                            <form className="auth-form">
                                <div className="mb-4">
                                    <input type="email" className="form-control auth-input" placeholder="Email Address" required />
                                </div>
                                <div className="mb-4">
                                    <input type="password" className="form-control auth-input" placeholder="Password" required />
                                </div>
                                <button className="auth-btn btn-login">Capture Access</button>
                            </form>
                            <p className="auth-switch">Forgot password? <Link to="#">Reset Here</Link></p>
                        </div>
                    </div>

                    {/* --- Sign Up Card --- */}
                    
                    <div className="col-lg-5 col-md-6" data-aos="fade-left">
                        <div className="auth-card signup-side">
                            <div className='icon-box'><i className="bi bi-person-plus-fill"></i></div>
                            <h2 className="auth-title">New Journey</h2>
                            <p className="auth-subtitle">Create Account</p>
                            
                            <form className="auth-form">
                                <div className="mb-3">
                                    <input type="text" className="form-control auth-input" placeholder="Full Name" required />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control auth-input" placeholder="Email Address" required />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control auth-input" placeholder="Create Password" required />
                                </div>
                                <button className="auth-btn btn-signup">Start Journey</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <Link className="back-home" to="/">
                        <i className="bi bi-house-door-fill"></i> Back to Home
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Login;