import { useRef, useState } from "react";

export default function useTabIndicator() {
    const [indicatorState, setIndicatorState] = useState({ width: 0, left: 0 });
    const tabRef = useRef(null);

    const updateIndicator = (index) => {
        const tab = tabRef.current.children[index];
        const { offsetWidth, offsetLeft } = tab;
        setIndicatorState({ width: offsetWidth, left: offsetLeft });
    };

    return { indicatorState, tabRef, updateIndicator };
}