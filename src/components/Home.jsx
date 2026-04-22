import './style/Home.css';
import {Link} from "react-router-dom";
import {NavHashLink} from "react-router-hash-link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import h1 from '../assets/Images/Heroimage.png';
import p1 from '../assets/Images/gopro.jpg';
import p2 from '../assets/Images/goproblack.jpg';
import p3 from '../assets/Images/filter.jpg';
import p4 from '../assets/Images/canon.jpg';


function Home (){
    return (

        <>

{/* {herosection} */}
 
<section className='hero-sec' data-aos="fade-up">
   <div className='container-fluid'>
       <div className='row justify-content-center'>

            <div className='col-12 mb-4'>
                <div className='hero-img-box' data-aos="zoom-out">
                   <img src={h1} className='img-fluid hero-main-img' alt="camera" />
                </div>
            </div>
            
            <div className='col-12 col-md-8'>
               <div className='text-center hero-content-area'>
                    <h1 className='hero-heading'>PRECISION IN EVERY <br /> <span>PIXEL</span></h1>
                    <h5 className='hero-sub'>Professional Gear for the Modern Visionary</h5>
                    <p className='hero-para'>
                        Explore our curated collection of high-performance DSLR, Mirrorless cameras, 
                        and cinematic lenses designed to capture life's most vivid moments.
                    </p>
                    <div className="hero-btns mt-4">
                        <button className="btn-hero">
                            <Link to="/"><i className="bi bi-camera"></i>View Cameras</Link>
                        </button>
                    </div>
               </div>
            </div>
       </div>
   </div>
</section>

{/* {productsection} */}

<section className='prod-sec py-5'>
     <div className='container'>
        <h2 className='section-title' data-aos="fade-right">Our Signature Series</h2>
         <div className='row g-4 py-5'>
            <div className='col-md-3 col-12' data-aos="fade-up" data-aos-delay="100">
                <div className='card'>
                     <div className='card-img'>
                       <img src={p1} alt="camera" />
                     </div>
                     <h4 className='prod-title'>Gopro Hero 13 Black Bundle</h4>
                     <p className='old-price'><i class="bi bi-currency-rupee"></i>42490</p>
                     <p className='new-price'><i class="bi bi-currency-rupee"></i>40990</p>
                     <button className='cart-btn'><i className="bi bi-plus"></i></button>
                </div>
            </div>

             <div className='col-md-3 col-12' data-aos="fade-up" data-aos-delay="200">
                <div className='card'>
                     <div className='card-img'>
                       <img src={p2} alt="camera" />
                     </div>
                     <h4 className='prod-title'>Gopro Hero13 Black Creator</h4>
                     <p className='old-price'><i class="bi bi-currency-rupee"></i>64990</p>
                     <p className='new-price'><i class="bi bi-currency-rupee"></i>63290</p>
                     <button className='cart-btn'><i className="bi bi-plus"></i></button>
                </div>
            </div>

            <div className='col-md-3 col-12' data-aos="fade-up" data-aos-delay="300">
                <div className='card'>
                     <div className='card-img'>
                       <img src={p3} alt="" />
                     </div>
                     <h4 className='prod-title'>H & y Filter Revoring 82-95mm</h4>
                     <p className='old-price'><i class="bi bi-currency-rupee"></i>4790</p>
                     <p className='new-price'><i class="bi bi-currency-rupee"></i>4500</p>
                     <button className='cart-btn'><i className="bi bi-plus"></i></button>
                </div>
            </div>

            <div className='col-md-3 col-12'data-aos="fade-up" data-aos-delay="400">
                <div className='card'>
                     <div className='card-img'>
                       <img src={p4} alt="" />
                     </div>
                     <h4 className='prod-title'>Canon EOS R3 Mirrorless</h4>
                     <p className='old-price'><i class="bi bi-currency-rupee"></i>537990</p>
                     <p className='new-price'><i class="bi bi-currency-rupee"></i>406460</p>
                     <button className='cart-btn'><i className="bi bi-plus"></i></button>
                </div>
            </div>

         </div>
     </div>
</section>

{/* {offersection} */}

<section className='offer-sec py-5'>
   <div className='container'>
       <div className='row'>
           <div className='col-md-6 col-12' data-aos="fade-right">
             <div className='card offer-card first-offer'>
                 <div className='card-text'>
                     <h6 className='offer-tag'>Limited Time Offer</h6>
                     <h2 className='offer-title'>UP TO 30% OFF <br /><span>ON SONY ALPHA</span></h2>
                     <p className='offer-desc'>Master your craft with the world's fastest autofocus system.</p>
                     <button className='offer-btn'>Shop Series</button>
                 </div>
             </div>
           </div>

             <div className='col-md-6 col-12' data-aos="fade-left">
             <div className='card offer-card second-offer'>
                 <div className='card-text'>
                     <h6 className='offer-tag'>New Arrivals</h6>
                     <h2 className='offer-title'>PRIME LENSES <br /><span>COLLECTION</span></h2>
                     <p className='offer-desc'>Perfect bokeh and unparalleled sharpness for every shot.</p>
                     <button className='offer-btn'>Explore More</button>
                 </div>
             </div>
           </div>

       </div>
   </div>
</section>

{/* {aboutsec} */}

<section className='about-sec' data-aos="fade-up">
    <div className='container'>
        <h2 className='about-head'>Who We Are</h2>
        <div className='row'>
            <div className='about-text'>
                <p className='about-para'>
    At Digital Eye, we are more than just a camera store; we are a community for visual storytellers. 
    Founded with a passion for high-end cinematography and photography, we provide the world's most 
    advanced gear to help you capture life's fleeting moments with absolute clarity. From professional 
    DSLRs to precision-engineered lenses, our mission is to empower creators with tools that turn 
    vision into reality.
</p>
            </div>
        </div>
    </div>
</section>

{/* {statssection} */}

<section className='stat-sec py-5'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-3 col-6' data-aos="zoom-in" data-aos-delay="100">
                 <div className='card stat-card'>
                 <h3 className='stat-num'>15k+</h3>
                 <p className='stat-text'>Happy Customers</p>
                 </div>
            </div>

            <div className='col-md-3 col-6'data-aos="zoom-in" data-aos-delay="200">
                 <div className='card stat-card'>
                 <h3 className='stat-num'>500+</h3>
                 <p className='stat-text'>Professional Gears</p>
                 </div>
            </div>

            <div className='col-md-3 col-6'data-aos="zoom-in" data-aos-delay="300">
                 <div className='card stat-card'>
                 <h3 className='stat-num'>10+</h3>
                 <p className='stat-text'>Global Brands</p>
                 </div>
            </div>

            <div className='col-md-3 col-6' data-aos="zoom-in" data-aos-delay="400">
                 <div className='card stat-card'>
                 <h3 className='stat-num'>24/7</h3>
                 <p className='stat-text'>Expert Support</p>
                 </div>
            </div>

        </div>
    </div>
</section>



</>

    )
}

export default Home;