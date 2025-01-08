import { Link } from 'react-scroll';
import SlideUp from "@utils/animations/slideUp"
import { socialMediaData } from "../../utils/fackData/socialMediaData"; // Adjust the path as needed


const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
					<div className="d-flex justify-content-center gap-2 fs-4"> {/* Bootstrap Flexbox with gap */}
						{socialMediaData.map((social) => (
							<a
								key={social.id}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								className="social-icon"
							>
								<i className={social.icon}></i>
							</a>
						))}
					</div>
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
                            <div className="dot-shape2"><img src="/images/shapes/robot-mouse.svg" alt="Shape" /></div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero