"use client";

import { useState, useEffect } from "react";

export default function calcSeason () {
    const [currentSeasonStart] = useState(new Date(Date.UTC(2024, 4, 16))); // 초기 시즌 시작일
    const [currentSeasonNumber, setCurrentSeasonNumber] = useState(2);
    const [endDate, setEndDate] = useState('');
    const [daysCount, setDaysCount] = useState(null);
    const [next, setNext] = useState(false);
    const [proceed, setProceed] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        /* 주어진 시작일로부터 13주 후를 시즌 종료일로 계산 */
        const calcEnd = (startDate) => {
            return new Date(startDate.getTime() + 13 * 7 * 24 * 60 * 60 * 1000);
        };

        const seasonEnd = calcEnd(currentSeasonStart);
        
        /* 종료일이 계산되지 않으면 에러 */
        if (isNaN(seasonEnd)) {
            setError(true);
            return;
        }

        // 현재 시간과 시즌 종료 시간 비교
        const now = new Date();
        // const now = new Date(Date.UTC(2024, 8, 25));
        

        if (now > seasonEnd) {
            setCurrentSeasonNumber(currentSeasonNumber + 1);
            setNext(true);
        } else {
            // 시즌 종료일 및 남은 일수 설정
            setProceed(true);
            setEndDate(seasonEnd.toISOString().substring(0, 10));
            const timeDiff = seasonEnd.getTime() - now.getTime();
            setDaysCount(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
        }
    }, [currentSeasonStart]); 

    return {
        currentSeasonStart,
        currentSeasonNumber,
        endDate,
        daysCount,
        error,
        next,
        proceed
    }
}