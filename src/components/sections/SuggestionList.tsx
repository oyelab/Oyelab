import { servicesData } from '../../utils/fackData/servicesData';

const highlightServices = (text: string) => {
    let highlightedText = text;
    servicesData.forEach((service) => {
        const regex = new RegExp(`(${service.title})`, 'gi');
        highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
    });
    return highlightedText;
};

const SuggestionList = ({ suggestions }: { suggestions: string[] }) => (
    <div className="suggestion-list">
        {suggestions.map((suggestion, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: highlightServices(suggestion) }} />
        ))}
    </div>
);

export default SuggestionList;