import { servicesData } from '../utils/fackData/servicesData';
import { featuresData } from '../utils/fackData/featuresData';

export const getSuggestions = async (prompt: string) => {
    // Combine services and features data
    const combinedData = [...servicesData, ...featuresData];

    // Simulate AI suggestions by filtering combined data based on the prompt
    const suggestions = combinedData.filter(item => 
        item.title.toLowerCase().includes(prompt.toLowerCase()) ||
        item.description.toLowerCase().includes(prompt.toLowerCase())
    ).map(item => `${item.title}: ${item.description}`);
    
    return suggestions.length > 0 ? suggestions : ['No matching items found.'];
};