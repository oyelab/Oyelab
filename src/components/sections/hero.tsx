// import { Link } from 'react-scroll';
import SlideUp from "@utils/animations/slideUp"
import { socialMediaData } from "../../utils/fackData/socialMediaData"; // Adjust the path as needed


const Hero = () => {
    return (
        <section id="home" className="main-hero-area">
            <div className="container">
                <div className="row align-items-center">
					<div className="d-flex justify-content-center gap-2 fs-4 mb-2"> {/* Bootstrap Flexbox with gap */}
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
                            <div className="hero-content-2">
								<div className="image-generator-box">
									<div
										className="searchbox"
										data-aos="fade-zoom-in"
										data-aos-duration="1500"
									>
										<div className="searchwrapper">
											<div className="row align-items-center">
												<div className="col-md-9">
													<form>
														<input
															type="text"
															className="form-control"
															placeholder="Unleash your idea—watch AI engineer a tailored solution for you!"
														/>
													</form>
												</div>
												<div className="col-lg-3">
													<form>
														<button className="btn" type="submit">
															Start Building
														</button>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
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