import { useState, useEffect } from 'react';

const useSlideInEffect = (text: string, trigger: boolean, duration: number = 1000) => {
    const [transform, setTransform] = useState('translateX(-100%)');
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        if (trigger) {
            setTransform('translateX(0)');
            setOpacity(1);
        }
    }, [trigger]);

    const style = {
        transition: `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
        transform,
        opacity,
    };

    return { text, style };
};

export default useSlideInEffect;