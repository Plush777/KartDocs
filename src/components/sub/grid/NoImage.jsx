import Image from "next/image";
import styled from "styled-components";

const NoImageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: background-color .3s ease-in-out;
    background-color: var(--background1);

    ${props => props.styleProp === 'grid' && `
        width: 100%;
        height: 100%;
        padding: 46px 0px;
        border-radius: 4px;
    `}

    ${props => props.styleProp === 'ranking' && `
        width: 64px;
        height: 64px;
        border-radius: 8px;
    `}

    img {
        filter: grayscale(1);
    }
`

const NoImageText = styled.p`
    font-size: .875rem;
    opacity: .8;
`

export default function NoImage({ type, width, height, src, styleProp }) {
    return (
        <NoImageDiv className="noImageDiv" styleProp={styleProp}>
            <Image width={width} height={height} src={src} alt="No Image" />
            {
                type === 'noText' ? null : <NoImageText className="noImageText">이미지 준비중이에요</NoImageText>
            }
        </NoImageDiv>
    )
}