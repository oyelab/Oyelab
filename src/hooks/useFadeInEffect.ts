import { useState, useEffect } from 'react';

const useFadeInEffect = (text: string, duration: number = 1000) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        setOpacity(1);
    }, [text]);

    const style = {
        transition: `opacity ${duration}ms ease-in-out`,
        opacity,
    };

    return { text, style };
};

export default useFadeInEffect;