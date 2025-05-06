import { blankUrl } from "const";
import * as I from "style/components/intro/Intro.style";

export default function HeaderBackground ({ hiddenText }) {
    return(
        <I.HeaderBackgroundDiv>
            <I.HeaderLinkDiv>
                <a href={blankUrl.nexon} target="_blank" rel="noreferrer">
                    <span className="hidden">{hiddenText}</span>
                </a>
            </I.HeaderLinkDiv>
        </I.HeaderBackgroundDiv>
    )
}