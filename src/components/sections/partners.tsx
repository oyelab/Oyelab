import Marquee from "react-fast-marquee";
import { clientLogoData } from "../../utils/fackData/clientLogoData"

const Partners = () => {
    return (
        <div className="company-design-area partner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Our top products & partners</h2>
                        <div className="company-list">
                            <div className="scroller">
								<Marquee>
                                    {
                                        clientLogoData.map(({ id, img, url }) => (
                                            <a key={id} href={url} target="_blank" rel="noopener noreferrer">
                                                <img src={img} alt="company logo" />
                                            </a>
                                        ))
                                    }
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Partners