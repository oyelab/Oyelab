import SlideUp from "@utils/animations/slideUp"

const Booking = () => {
    return (
        <section id="book" className="call-to-action-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="call-to-action-part text-center">
							<a href="#">
                                <img src="/images/logos/logo-dark.svg" alt="Logo" title="Logo" />
                            </a>
                            <h2>Let’s Build the Future Together</h2>
                            <p>Take the first step towards transforming your business. Book a free consultation call with our experts today and discover how we can bring your vision to life with precision, performance, and impact.</p>
                            <div className="hero-btns">
                                <a href="#" className="theme-btn">Book a free call</a>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Booking