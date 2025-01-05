import SlideUp from "@utils/animations/slideUp"

const About = () => {
    return (
        <section className="funder-says-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SlideUp className="founder-say-part text-center">
                            <h3>Building a future where boundaries are non-existent—where we don't just meet expectations, we shatter them. At Oyelab–
								<span>we're not just creating technology, We're creating the fabric of tomorrow. </span> 
								Join us in reimagining what's possible.</h3>
                            <div className="founder-name-part">
								<img src="/images/about/founder-jarjis.png" className="img-fluid rounded-circle" alt="founder" title="founder" />
                                <h2>Mehedi Hasan Jarjis</h2>
                                <p>Co-Founder, Oyelab</p>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default About