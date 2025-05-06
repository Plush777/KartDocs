export default function Tag({ condition, name, text1, text2, styleClassName }) {
    return(
        <strong className={`tagItem ${styleClassName}`} data-name={text1 && name}>
            <span className={`tag ${condition === undefined ? '' : condition}`}>{name}</span>
            {text1 &&
                <div className="tagItemTextBox">
                    <span className="tagItemText">{text1}</span>
                    {text2 && <span className="tagItemText">{`(최초에만 ${text2})`}</span>}
                </div>
            }
        </strong>
    )
}