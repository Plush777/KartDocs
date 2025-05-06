import * as Tit from 'style/components/title/Title.style';

export default function MainTitle({ title, icon, children }) {
	return (
		<Tit.TitleBox icon={icon}>
			<Tit.Title icon={icon}>{title}</Tit.Title>

			{children}
		</Tit.TitleBox>
	);
}
