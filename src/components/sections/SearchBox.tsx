import React, { useState } from 'react';
import { getSuggestions } from '../../services/aiService';
import SuggestionList from './SuggestionList';

const SearchBox = () => {
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await getSuggestions(input);
        setSuggestions(result);
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
                                <button className="btn" type="submit">
									<i className="ri-sparkling-2-fill" /> Start Building
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <SuggestionList suggestions={suggestions} />
        </div>
    );
};

export default SearchBox;