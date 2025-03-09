import useBodyScrollLock from 'hooks/useBodyScrollLock';
import { utilRender, utilArray, utilLinks, mobileHeaderMenuTagCondition } from 'data/header';
import { menus } from 'data/gnb';
import SCopen from 'svg/ico-open.svg';
import Pwa from 'components/pwa/Pwa';
import * as H from 'style/layout/Header.style';
import useClickAlert from 'hooks/useClickAlert';
import useMenuActive from 'hooks/useMenuActive';

export default function MobileHeaderMenu({ menuToggle, handleSettingButton }) {
	const { lockScroll } = useBodyScrollLock();
	const clickAlert = useClickAlert('준비중이에요.');
	const { myPath } = useMenuActive();

	return (
		<H.mobileHeaderMenuWrap className={menuToggle ? 'active' : ''}>
			<H.mobileHeaderMenuList>
				{menus.map(menu => {
					return (
						<H.mobileHeaderMenuItem className={`${myPath === menu.path ? 'active' : ''}`} key={menu.id}>
							<H.mobileHeaderMenuLink href={menu.path}>{menu.name}</H.mobileHeaderMenuLink>
						</H.mobileHeaderMenuItem>
					);
				})}
				{utilArray.map((item, index) => {
					const linkIndex = index === 0 || index === 1;

					return (
						<H.mobileHeaderMenuItem key={index}>
							<H.mobileHeaderMenuLink
								href={utilRender(utilLinks, index)}
								as={mobileHeaderMenuTagCondition(linkIndex, item)}
								rel={linkIndex ? 'noopener noreferrer' : null}
								target={linkIndex ? '_blank' : null}
								type={!linkIndex && item !== '앱 설치하기' ? 'button' : null}
								onClick={
									index === 2
										? () => {
												handleSettingButton();
												lockScroll();
											}
										: null
								}
							>
								{item === '앱 설치하기' ? <Pwa /> : item}
								{linkIndex && <SCopen width="20px" height="20px" />}
							</H.mobileHeaderMenuLink>
						</H.mobileHeaderMenuItem>
					);
				})}
			</H.mobileHeaderMenuList>
		</H.mobileHeaderMenuWrap>
	);
}
