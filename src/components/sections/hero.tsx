import SlideUp from "@utils/animations/slideUp";
import SocialMediaIcons from '../SocialMediaIcons';
import SearchBox from './SearchBox';

const HeroContent = () => (
    <SlideUp className="hero-content position-relative">
        <h3>Elevating Possibilities – Engineering Precision and Performance</h3>
        <h2>We deliver scalable, high-performance solutions tailored to your needs.</h2>
        <div className="hero-content-2">
            <SearchBox />
        </div>
        <div className="dot-shape">
            <img src="/images/shapes/shape1.png" alt="Shape" />
        </div>
        <div className="dot-shape2">
            <img src="/images/shapes/robot-mouse.svg" alt="Shape" />
        </div>
    </SlideUp>
);

const Hero = () => (
    <section id="home" className="main-hero-area">
        <div className="container">
            <div className="row align-items-center">
                <SocialMediaIcons />
                <div className="col-lg-12">
                    <HeroContent />
                </div>
            </div>
        </div>
    </section>
);

export default Hero;