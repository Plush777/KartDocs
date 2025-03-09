import * as H from 'style/layout/Header.style';
import Image from 'next/image';
import Link from 'next/link';
import Gnb from 'components/header/Gnb';
import MobileHambugerButton from 'components/mobile/Header/MobileHambugerButton';

export default function HeaderLeft({ setMenuToggle, myTheme }) {
	return (
		<>
			<MobileHambugerButton setMenuToggle={setMenuToggle} />

			<H.Logo>
				<Link href="/" title="카트라이더 팁스 로고">
					<Image
						src={myTheme === 'light' ? '/ico-kart-logo-black.svg' : '/ico-kart-logo-white.svg'}
						width={130}
						height={29}
						priority
						alt="카트라이더 팁스 로고"
					/>
				</Link>
			</H.Logo>

			<Gnb />
		</>
	);
}
