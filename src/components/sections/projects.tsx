import SectionTitle from "@components/ui/sectionTitle";
import { portfolioData } from "@utils/fackData/portfolioData"
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Projects = () => {
    return (
        <div className="projects-area" id="project">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <SectionTitle>
                            <SectionTitle.Name>Projects</SectionTitle.Name>
                            <SectionTitle.Title>Featured Projects</SectionTitle.Title>
                            <SectionTitle.Description>Get a glimpse of our work</SectionTitle.Description>
                        </SectionTitle>
                    </div>
                </div>
                <PhotoProvider>
                    <div className="row g-4 portfolio-grid">
                        {
                            portfolioData.map(({ category, id, img, title, url }) =>
                                <Card key={id} category={category} img={img} title={title} url={url} />
                            )
                        }
                    </div>
                </PhotoProvider>
                <div className="row">
                    <div className="hero-btns text-center"><a href="#" className="theme-btn">View all works</a></div>
                </div>
            </div>
        </div>
    )
}


export default Projects

interface PropsType {
    img: string,
    title: string,
    category: string,
    url: string
}

const Card = ({ img, title, category, url }: PropsType) => {
    return (
        <div className="col-md-6 col-xl-6 portfolio-item category-2">
            <div className="portfolio-box work-popup">
                {/* Only wrap the image with PhotoView for lightbox */}
                <PhotoView src={img}>
                    <img src={img} alt="img" data-rjs={2} />
                </PhotoView>
                <span className="portfolio-category">{category}</span>
                <div className="portfolio-caption">
                    <h1>{title}</h1>
                    {/* Visit button is now separated from image click */}
                    <a href={url} target="_blank" rel="noopener noreferrer" className="visit-btn">
                        Visit
                    </a>
                </div>
            </div>
        </div>
    )
}
