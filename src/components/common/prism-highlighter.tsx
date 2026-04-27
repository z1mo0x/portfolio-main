"use client";

import { useEffect } from 'react';
import 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/themes/prism-tomorrow.css';

const PrismHighlighter = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            import('prismjs').then(PrismModule => {
                PrismModule.highlightAll();
            });
        }
    }, []);

    return null;
};

export default PrismHighlighter;