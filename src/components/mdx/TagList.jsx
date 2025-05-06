export default function TagList({ children, title }) {
    return (
        <div className="tagListWrap">
            <h5 className="tagListTitle">{title}</h5>
            <div className="tagList">
                {children}
            </div>
        </div>
    );
}