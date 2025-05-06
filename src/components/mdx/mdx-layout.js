import * as M from 'style/common/Markdown.style';

export default function MdxLayout({ children }) {
    return (
        <M.Container>
            {children}
        </M.Container>
    )
}