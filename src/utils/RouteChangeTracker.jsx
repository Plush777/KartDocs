'use client';

import { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { usePathname } from "next/navigation";

/**
 * uri 변경 추적 컴포넌트
 * uri가 변경될 때마다 pageview 이벤트 전송
 */
export default function RouteChangeTracker () {
    const pathname = usePathname();
    const [initialized, setInitialized] = useState(false);

    // localhost는 기록하지 않음 
    useEffect(() => {
        if (!window.location.href.includes("localhost")) {
            ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
            setInitialized(true);
        }
    }, []);

    // location 변경 감지시 pageview 이벤트 전송 
    useEffect(() => {
        if (initialized) {
            ReactGA.set({ page: pathname });
            ReactGA.send("pageview");
        }
    }, [initialized, pathname]);

    // 개발용
    // useEffect(() => {
    //   ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
    //   ReactGA.set({ page: location.pathname });
    //   ReactGA.send("pageview");
    // }, [location]);

    return(<></>)
};