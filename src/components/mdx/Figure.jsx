export default function Figure (props) {
    return (
        <div className="figureWrap">
            <figure {...props}/>
            <figcaption>{props.figcaption}</figcaption>
        </div>
    )
}