import Tag from "./Tag";

export default function Info({ diffText, titleText, tagText }) {
    const diffCondition = (diffText) => {
        if (diffText === '초보자 추천') return 'green';
        if (diffText === '중급자 추천') return 'orange';
        if (diffText === '숙련자 추천') return 'purple';
            
        return undefined;
    }

    const typeCondition = (tagText) => {
        if (tagText === '액티브') return 'blue';
        if (tagText === '패시브') return 'red';

        return undefined;
    }

    return (
        <div className="infoWrap">
            <div className="infoRow">
                <h4 className="infoTitleBox">
                    <span className={`infoDiff ${diffCondition(diffText)}`}>{diffText}</span>
                    <span className="infoTitleText">{titleText}</span>
                </h4>
                <Tag condition={typeCondition(tagText)} name={tagText}/>
            </div>
        </div>
    );
}