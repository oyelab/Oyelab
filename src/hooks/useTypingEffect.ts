import { useState, useEffect } from 'react';

const useTypingEffect = (text: string, speed: number = 50) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        if (!text) return;

        let index = 0;
        setDisplayedText(''); // Reset displayed text
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(index));
            index++;
            if (index >= text.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed]);

    return displayedText;
};

export default useTypingEffect;