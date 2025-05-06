import * as G from 'style/components/header/Gnb.style';
import { menus } from 'data/gnb';
import Link from 'next/link';
import useMenuActive from 'hooks/useMenuActive';
import useClickAlert from 'hooks/useClickAlert';

export default function Gnb() {
	const { myPath } = useMenuActive();
	// const clickAlert = useClickAlert('준비중이에요.');

	return (
		<G.Gnb>
			<G.GnbList>
				{menus.map(menu => {
					return (
						<G.GnbItem className={`${myPath === menu.path ? 'active' : ''}`} key={menu.id}>
							<Link href={`${menu.path}`}>{menu.name}</Link>
						</G.GnbItem>
					);
				})}
			</G.GnbList>
		</G.Gnb>
	);
}
