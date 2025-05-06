import React from "react";
import { useMediaQuery } from "react-responsive";

const Min1300 = ({ children }) => {
    const is1300 = useMediaQuery({ 
        query: "(min-width: 1301px)" 
    });
    return <React.Fragment>{is1300 && children}</React.Fragment>
}

const M1300 = ({ children }) => {
    const is1300 = useMediaQuery({ 
        query: "(max-width: 1300px)" 
    });
    return <React.Fragment>{is1300 && children}</React.Fragment>
}

const Min1024 = ({ children }) => {
    const is1024 = useMediaQuery({ 
        query: "(min-width: 1025px)" 
    });
    return <React.Fragment>{is1024 && children}</React.Fragment>
}

const M1024 = ({ children }) => {
    const is1024 = useMediaQuery({ 
        query: "(max-width: 1024px)" 
    });
    return <React.Fragment>{is1024 && children}</React.Fragment>
}

const M768 = ({ children }) => {
    const is768 = useMediaQuery({ 
        query: "(max-width: 768px)" 
    });
    return <React.Fragment>{is768 && children}</React.Fragment>
}

const Min768 = ({ children }) => {
    const is768 = useMediaQuery({ 
        query: "(min-width: 769px)" 
    });
    return <React.Fragment>{is768 && children}</React.Fragment>
}

const Min500 = ({ children }) => {
    const is500 = useMediaQuery({ 
        query: "(min-width: 500px)" 
    });
    return <React.Fragment>{is500 && children}</React.Fragment>
}

const M500 = ({ children }) => {
    const is500 = useMediaQuery({ 
        query: "(max-width: 500px)" 
    });
    return <React.Fragment>{is500 && children}</React.Fragment>
}

const M375 = ({ children }) => {
    const is375 = useMediaQuery({ 
        query: "(max-width: 375px)" 
    });
    return <React.Fragment>{is375 && children}</React.Fragment>
}

export {Min1300, M1300, Min1024, M1024, M768, Min768, Min500, M500, M375}