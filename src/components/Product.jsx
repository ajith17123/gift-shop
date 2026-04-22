import './style/Product.css';
import {Link} from "react-router-dom";
import {NavHashLink} from "react-router-hash-link";
import AOS from 'aos';
import 'aos/dist/aos.css';

import cam1 from '../assets/Images/pp1.jpg';
import cam2 from '../assets/Images/pp2.jpg';
import cam3 from '../assets/Images/pp3.jpg';
import lens1 from '../assets/Images/l1.jpg';
import lens2 from '../assets/Images/l2.jpg';
import lens3 from '../assets/Images/l3.jpg';
import acc1 from '../assets/Images/a1.jpg';
import acc2 from '../assets/Images/a2.jpg';
import acc3 from '../assets/Images/a3.jpg';

function Product (){
    return(

    <section className='prod-sec py-5'>
            <div className='container'>
                <h2 className='main-heading text-center' data-aos="fade-down">Our Products</h2>

                <div className='product-category mb-5'>
                    <h3 className='sub-heading' data-aos="fade-right">Cameras</h3>
                    <div className='row g-4'>
         
                        <div className='col-lg-4 col-md-6 col-12' data-aos="zoom-in">
                            <div className='card prod-card'>
                                <div className='card-img-box'>
                                    <img src={cam1} alt="Camera 1" className='img-fluid' />
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='prod-title'>X-T50 Fujifilm Digital Camera</h5>
                                    <p className='prod-price'><i class="bi bi-currency-rupee"></i>162490</p>
                                    <button className='btn-buy'><Link to="/">View Details</Link></button>
                                </div>
                            </div>
                        </div>
                   
                        <div className='col-lg-4 col-md-6 col-12' data-aos="zoom-in" data-aos-delay="100">
                            <div className='card prod-card'>
                                <div className='card-img-box'>
                                    <img src={cam2} alt="Camera 2" className='img-fluid' />
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='prod-title'>X-T20 Fujifilm</h5>
                                    <p className='prod-price'><i class="bi bi-currency-rupee"></i>155000</p>
                                    <button className='btn-buy'><Link to="/">View Details</Link></button>
                                </div>
                            </div>
                        </div>
                
                        <div className='col-lg-4 col-md-6 col-12' data-aos="zoom-in" data-aos-delay="200">
                            <div className='card prod-card'>
                                <div className='card-img-box'>
                                    <img src={cam3} alt="Camera 3" className='img-fluid' />
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='prod-title'>Profocus Vlog Mini Kit</h5>
                                    <p className='prod-price'><i class="bi bi-currency-rupee"></i>19490</p>
                                    <button className='btn-buy'><Link to="/">View Details</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='product-category mb-5 ' id='lens'>
                    <h3 className='sub-heading' data-aos="fade-right">Lenses</h3>
                    <div className='row g-4'>
                        <div className='col-lg-4 col-md-6 col-12' data-aos="zoom-in">
                            <div className='card prod-card'>
                                <div className='card-img-box'>
                                    <img src={lens1} alt="Lens 1" className='img-fluid' />
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='prod-title'>Sirui Jupiter 50mm</h5>
                                    <p className='prod-price'><i class="bi bi-currency-rupee"></i>107490</p>
                                    <button className='btn-buy'><Link to="/">View Details</Link></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12' data-aos="zoom-in" data-aos-delay="100">
                            <div className='card prod-card'>
                                <div className='card-img-box'>
                                    <img src={lens2} alt="Lens 2" className='img-fluid' />
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='prod-title'>Sirui Satutn 35mm</h5>
                                    <p className='prod-price'><i class="bi bi-currency-rupee"></i>323490</p>
                                    <button className='btn-buy'><Link to="/">View Details</Link></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12' data-aos="zoom-in" data-aos-delay="200">
                            <div className='card prod-card'>
                                <div className='card-img-box'>
                                    <img src={lens3} alt="Lens 3" className='img-fluid' />
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='prod-title'>Canon RF 400mm</h5>
                                    <p className='prod-price'><i class="bi bi-currency-rupee"></i>1074990</p>
                                    <button className='btn-buy'><Link to="/">View Details</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='product-category mb-5' id='ass'>
                    <h3 className='sub-heading' data-aos="fade-right">Accessories</h3>
                    <div className='row g-4'>
                        <div className='col-lg-4 col-md-6 col-12' data-aos="zoom-in">
                            <div className='card prod-card'>
                                <div className='card-img-box'>
                                    <img src={acc1} alt="Accessory 1" className='img-fluid' />
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='prod-title'>Peak Design Shell</h5>
                                    <p className='prod-price'><i class="bi bi-currency-rupee"></i>3960</p>
                                    <button className='btn-buy'><Link to="/">View Details</Link></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12' data-aos="zoom-in" data-aos-delay="100">
                            <div className='card prod-card'>
                                <div className='card-img-box'>
                                    <img src={acc2} alt="Accessory 2" className='img-fluid' />
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='prod-title'>Peak Design Everyday Totepack</h5>
                                    <p className='prod-price'><i class="bi bi-currency-rupee"></i>18000</p>
                                    <button className='btn-buy'><Link to="/">View Details</Link></button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-12' data-aos="zoom-in" data-aos-delay="200">
                            <div className='card prod-card'>
                                <div className='card-img-box'>
                                    <img src={acc3} alt="Accessory 3" className='img-fluid' />
                                </div>
                                <div className='card-body text-center'>
                                    <h5 className='prod-title'>Peak Design Everyday Hip Belt</h5>
                                    <p className='prod-price'><i class="bi bi-currency-rupee"></i>2610</p>
                                    <button className='btn-buy'><Link to="/">View Details</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Product;