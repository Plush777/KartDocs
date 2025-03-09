import * as G from "style/common/GuideTooltip.style";
import SCclose from 'svg/ico-close.svg';

export default function GuideTooltip({ 
    name, 
    left, 
    top, 
    transform, 
    arrowLeft, 
    arrowTop, 
    arrowTransform, 
    className, 
    text, 
    clickFn 
}) {
    return (
        <G.Wrap 
            name={name}
            left={left} 
            top={top} 
            transform={transform} 
            arrowLeft={arrowLeft} 
            arrowTop={arrowTop} 
            arrowTransform={arrowTransform} 
            className={className}
        >
            <G.Text>{text}</G.Text>
            <G.Button type="button" onClick={clickFn}>
                <SCclose width="12px" height="12px" fill="#fff"/>  
            </G.Button>
        </G.Wrap>
    )
}