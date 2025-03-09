import * as B from "style/components/sub/common/BreadCrumb.style";
import { changeLinkName } from "data/topNavigation";

export default function BreadCrumb({ data }) {
    return(
        <B.Wrap aria-label="현재 나의 이동경로">
            <B.List>
                {data.map((link, index) => {
                    const isLast = index === data.length - 1;

                    return(
                        <B.Item className={isLast && 'active'} aria-current={isLast ? 'page' : null} key={index}>
                            <span>{changeLinkName(link)}</span>
                        </B.Item>
                    )
                })}
            </B.List>
        </B.Wrap>
    )
}