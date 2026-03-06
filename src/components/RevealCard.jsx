import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const RevealCard = ({ children, delay = 0, className = "" }) => {
    const { ref, style } = useReveal(delay);

    return (
        <div ref={ref} style={style} className={className}>
            {children}
        </div>
    );
};

export const RevealText = ({ children, delay = 0, className = "" }) => {
    const { ref, style } = useReveal(delay);

    return (
        <div ref={ref} style={style} className={className}>
            {children}
        </div>
    );
};
