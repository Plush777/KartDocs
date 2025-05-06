import Link from "next/link"

export default function MdxLink(props) {
    const propsClassNames = `mdLink ${props.className ? props.className : ''}`

    return (
        <>
            {
                props.type === 'component' ? 
                <Link {...props} className={propsClassNames}/> 
                : 
                <a {...props} className={propsClassNames}/>
            }
        </>
    )
}