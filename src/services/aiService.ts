import axios from 'axios';
import stringSimilarity from 'string-similarity';
import { servicesData } from '../utils/fackData/servicesData';
import { featuresData } from '../utils/fackData/featuresData';
import { faqData } from '../utils/fackData/faqData';

const extractKeywords = (text: string): string[] => {
    return text.toLowerCase().split(/\W+/).filter(Boolean);
};

export const getSuggestions = async (prompt: string): Promise<string[]> => {
    // Extract keywords from the prompt
    const keywords = extractKeywords(prompt);

    // Combine services, features, and FAQ data
    const combinedData = [
        ...servicesData.map(item => ({ ...item, type: 'service' })),
        ...featuresData.map(item => ({ ...item, type: 'feature' })),
        ...faqData.map(item => ({ ...item, type: 'faq', title: item.question, description: item.ans }))
    ];

    // Filter data based on the extracted keywords
    const filteredData = combinedData.filter(item => {
        const titleMatch = keywords.some(keyword => stringSimilarity.compareTwoStrings(item.title.toLowerCase(), keyword) > 0.3);
        const descriptionMatch = keywords.some(keyword => stringSimilarity.compareTwoStrings(item.description.toLowerCase(), keyword) > 0.3);
        return titleMatch || descriptionMatch;
    });

    if (filteredData.length === 0) {
        return ['No matching services or features found. Please try a different prompt.'];
    }

    // Create a prompt based on the filtered data
    const dataPrompt = filteredData.map(item => `${item.title}: ${item.description}`).join('\n');

    try {
        const response = await axios.post(
            'https://oyelab.com/api/suggestions',
            { prompt: `${prompt}\n\n${dataPrompt}\n\nPlease provide a concise response of no more than 100 words.` }
        );
        return response.data as string[];
    } catch (error) {
        console.error('Error fetching data:', error);
        return ['Error generating suggestions. Please try again later.'];
    }
};