import Pwa from 'components/pwa/Pwa';
import * as H from 'style/layout/Header.style';
import * as U from 'style/components/header/Util.style';
import * as T from 'style/components/header/Tooltip.style';
import SCchat from 'svg/ico-chat.svg';
import SCopen from 'svg/ico-open.svg';
import SCsetting from 'svg/ico-setting.svg';
import { utilRender, utilArray, utilLinks } from 'data/header';

export default function HeaderRight({ handleSettingButton }) {
	const utilIcons = {
		0: <SCchat width="26px" height="26px" />,
		1: <SCopen width="26px" height="26px" />,
		2: <SCsetting onClick={() => handleSettingButton()} width="26px" height="26px" />,
	};

	return (
		<H.Right>
			<U.UtilArea>
				{utilArray
					.filter(item => item !== '앱 설치하기')
					.map((item, index) => {
						const isItem = item === '설정';

						return (
							<U.UtilTextBox
								key={index}
								href={utilRender(utilLinks, index)}
								rel={!isItem ? 'noopener noreferrer' : null}
								target={!isItem ? '_blank' : null}
								as={isItem && 'button'}
								type={isItem ? 'button' : null}
							>
								{utilRender(utilIcons, index)}

								<T.Tooltip>
									<T.TooltipItem>{item}</T.TooltipItem>
								</T.Tooltip>
							</U.UtilTextBox>
						);
					})}
			</U.UtilArea>
			<Pwa />
		</H.Right>
	);
}
