import * as I from "style/components/intro/Intro.style";

export default function Description({ skip }) {
    return (
        <I.Description>
            <I.DescriptionInner>
                <I.TextDiv>
                    <I.DescriptionText>시작하기 클릭 시 소리나는 인트로가 재생됩니다.<br/>원치 않으시면 아래 스킵을 눌러주세요.</I.DescriptionText>
                </I.TextDiv>
                <I.Skip onClick={skip} type="button">인트로 스킵</I.Skip>
            </I.DescriptionInner> 
        </I.Description>
    )
} 