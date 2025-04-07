import { socialMediaData } from "../../utils/fackData/socialMediaData"; // Adjust the path as needed

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="footer-bottom pt-20 pb-20">
                <div className="container">
                    <div className="row justify-content-center mb-2"> {/* Centering icons using Bootstrap */}
                        <div className="col-auto">
                            <div className="d-flex justify-content-center gap-2 fs-5"> {/* Bootstrap Flexbox with gap */}
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
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="copyright-text">
                                <p>Copyright <a href="https://nexadev.io">NexaDev.</a> All Rights Reserved.</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="footer-bottom-menu">
                                <ul>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Terms &amp; conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;