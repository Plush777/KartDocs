import * as M from 'style/common/Markdown.style';

export default function Sprite({ className, children, backgroundPosition }) {
	return (
		<M.Sprite className={`sprite ${className}`} backgroundPosition={backgroundPosition}>
			<span className="hidden">{children}</span>
		</M.Sprite>
	);
}
