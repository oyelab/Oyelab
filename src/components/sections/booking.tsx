import SlideUp from "@utils/animations/slideUp"

const Booking = () => {
    return (
        <>
            <section id="book" className="call-to-action-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <SlideUp className="call-to-action-part text-center">
                                <a href="/">
                                    <img src="/images/logos/logo-dark.svg" alt="Logo" title="Logo" />
                                </a>
                                <h2>Let’s Build the Future Together</h2>
                                <p>
                                    Take the first step toward transforming your business. Book a free consultation call with our experts today by emailing us at <a href="mailto:nexadevbd@gmail.com">nexadevbd@gmail.com</a> and discover how we can bring your vision to life with precision, performance, and impact.
                                </p>
                                <div className="contact-details mt-4">
                                    <div className="row">
                                        <div className="col-md-5 text-left">
                                            <p className="d-flex align-items-center">
                                                <i className="ri-mail-line me-2"></i>
                                                <a href="mailto:nexadevbd@gmail.com">nexadevbd@gmail.com</a>
                                            </p>
                                            <p className="d-flex align-items-center">
                                                <i className="ri-phone-line me-2"></i>
                                                +8801841190567
                                            </p>
                                        </div>
                                        <div className="col-md-1 d-flex align-items-center justify-content-center">
                                            <div style={{ borderLeft: "1px solid #ccc", height: "60px" }}></div>
                                        </div>
                                        <div className="col-md-6 text-start">
                                            <p className="d-flex align-items-center">
                                                <i className="ri-map-pin-line me-2"></i>
                                                <span>
                                                    D8, Main Road,<br />
                                                    Eastern Housing Rupnagar, Mirpur,<br />
                                                    Dhaka-1216, Bangladesh
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Booking