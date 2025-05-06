"use client";

import * as T from "style/common/Tab.style";
import TabIndicator from "./TabIndicator";
import { useEffect } from "react";
import useTabIndicator from "hooks/useTabIndicator";

export default function Tab ({ 
    value,
    type, 
    data, 
    tabIndex, 
    setTabIndex, 
    marginBottom, 
    disabledIndex,
    styleProps,
    clicked,
    setClicked,
    indicator
}) {
    const { indicatorState, tabRef, updateIndicator } = useTabIndicator();

    useEffect(() => {
        updateIndicator(tabIndex);
    }, [tabIndex]);
    
    useEffect(() => {
        updateIndicator(0); 
    }, []);

    const handleTabDisabledMessage = (index) => {
        if (index === 4)  return '전설';
        if (index === 3)  return '영웅';
        
        return '';
    }
    
    const handleTabIndex = (index) => {
        if (disabledIndex < index) {
            alert(`아직 ${handleTabDisabledMessage(index)}등급이 출시되지 않았습니다.`);
            return;
        };
        setTabIndex(index);
    }

    /* 탭 클릭 상태를 value가 있을 때만 저장합니다. */
    const handleClicked = (index) => {
        if (value.length > 0) {
            let newClicked = clicked && clicked.map((_, i) => i === index ? true : false);
            setClicked(newClicked);
        }
    }

    return(
        <T.TabWrap className={type} marginBottom={marginBottom} styleProps={styleProps}>
            <T.TabList ref={tabRef}>
                {
                    data.map((tab, index) => (
                        <T.TabItem className={disabledIndex < index ? 'disabled' : ''} key={index}>
                            <T.TabDiv 
                                as='button' 
                                type='button' 
                                className={`${tabIndex === index ? 'active' : ''} `}
                                onClick={() => {
                                    handleTabIndex(index);
                                    clicked && handleClicked(index);
                                }}
                            >
                                {tab}
                            </T.TabDiv>
                        </T.TabItem>
                        
                    ))
                }
            </T.TabList>
            {indicator && <TabIndicator width={indicatorState.width} left={indicatorState.left}/>}
        </T.TabWrap>
    )
}