import { socialMediaData } from '../utils/fackData/socialMediaData'; // Adjust the path as needed

const SocialMediaIcons = () => (
    <div className="d-flex justify-content-center gap-2 fs-4 mb-2">
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
);

export default SocialMediaIcons;