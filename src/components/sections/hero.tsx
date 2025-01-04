import { Link } from 'react-scroll';
import SlideUp from "@utils/animations/slideUp"

const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <SlideUp className="hero-content position-relative">
                            <h3>Elevating Possibilities – Engineering Precision and Performance</h3>
							<h2>We deliver scalable, high-performance solutions tailored to your needs.</h2>
                            <p>We combine technological mastery with a focus on delivering tangible results. Our solutions are built for adaptability and efficiency, helping you achieve new levels of performance and impact.</p>
                            <div className="hero-btns">
                                <Link to="service" smooth={true}  className="theme-btn">Explore Our Services</Link>
                                <Link to="book" smooth={true}  className="theme-btn differenct-color">Book a free call</Link>
                            </div>
                            <div className="dot-shape"><img src="/images/shapes/shape1.png" alt="Shape" /></div>
                            <div className="dot-shape2"><img src="/images/shapes/shape2.png" alt="Shape" /></div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero