import React, { useState } from 'react';
import { getSuggestions } from '../../services/aiService';
import SuggestionList from './SuggestionList';

const SearchBox = () => {
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const [triggerEffect, setTriggerEffect] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTriggerEffect(false); // Reset the effect trigger
        try {
            const result = await getSuggestions(input);
            setSuggestions(result);
            setTriggerEffect(true); // Trigger the effect once the response is received
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="image-generator-box">
            <div className="searchbox" data-aos="fade-zoom-in" data-aos-duration="1500">
                <div className="searchwrapper">
                    <div className="row align-items-center">
                        <div className="col-md-9">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Unleash your idea—watch AI engineer a tailored solution for you!"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                            </form>
                        </div>
                        <div className="col-lg-3">
                            <form onSubmit={handleSubmit}>
								<button className="btn" type="submit" disabled={loading}>
									{loading ? 'Loading...' : <><i className="ri-sparkling-2-fill"></i> AI Suggestions</>}
								</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {suggestions.length > 0 && <SuggestionList suggestions={suggestions} trigger={triggerEffect} />}
        </div>
    );
};

export default SearchBox;