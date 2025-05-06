"use client";

import { useState, useEffect } from 'react';

export default function useImageTransition (loading, delay) {
    let [isShow, setIsShow] = useState('');

    useEffect(() => {
        if (!loading) {
            let loadTimer = setTimeout(() => setIsShow('active'), delay);
            return () => clearTimeout(loadTimer);
        }
    }, [loading]);

    return { isShow };
}