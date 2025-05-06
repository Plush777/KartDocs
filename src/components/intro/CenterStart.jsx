import Image from "next/image";
import * as I from "style/components/intro/Intro.style";
import Description from "components/intro/Description";

export default function CenterStart ({ children, clickFn, skip }) {
    return(
        <I.LogoDiv>
            <I.LogoInnerDiv>
                {children}
                <Image src="/ico-kart-logo-black.svg" width={409} height={91} priority alt="카트라이더 팁스 로고"/>
                <I.Button padding="0 16px" fontSize="1rem" onClick={clickFn} type="button">시작하기</I.Button>
                <Description skip={skip}/>
            </I.LogoInnerDiv>
        </I.LogoDiv>
    )
}