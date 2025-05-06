import { useState, useEffect } from "react";

export default function useScrollToTop() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        if (window.scrollY > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);
        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);

    return { visible, scrollToTop };
}