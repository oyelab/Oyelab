import { Link } from 'react-scroll';
import useSlideInEffect from '../../hooks/useSlideInEffect';

const SuggestionList = ({ suggestions, trigger }: { suggestions: string[], trigger: boolean }) => {
    const combinedSuggestions = suggestions.join(' ');
    const { text, style } = useSlideInEffect(combinedSuggestions, trigger);

    const noMatchMessage = 'No matching services or features found. Please try a different prompt.';

    return (
        <div className="suggestion-item" style={style}>
            <p className="suggestion-text">{text}</p>
            <div className="button-group">
                {suggestions[0] !== noMatchMessage && (
                    <Link to="book" smooth={true} duration={500} className="btn btn-primary">Book the Service</Link>
                )}
                <Link to="service" smooth={true} duration={500} className="btn btn-secondary">Explore All Services</Link>
            </div>
        </div>
    );
};

export default SuggestionList;