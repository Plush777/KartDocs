'use client';

import useScrollToTop from "hooks/useScrollToTop";
import * as B from "style/common/Button.style";
import SCtop from "svg/ico-top.svg";

export default function BtnTop () {
    const { visible, scrollToTop } = useScrollToTop();

    return( 
        <>
            <B.Button 
                featureProp={'sticky'}
                opacity={visible ? '1' : '0'} 
                visibility={visible ? 'visible' : 'hidden'} 
                onClick={scrollToTop} 
                typeProp={'article'} 
            >
                <SCtop width="20" height="20" />
                <span className="hidden">위로 올라가기</span>
            </B.Button>
        </>
    );
}