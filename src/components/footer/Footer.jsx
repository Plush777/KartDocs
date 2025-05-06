'use client';

import * as Footerstyled from 'style/layout/Footer.style';
import Link from 'next/link';
import Image from 'next/image';
import Select from 'components/selects/Select';

export default function Footer() {
	const copyYear = new Date().getFullYear();

	return (
		<Footerstyled.FooterWrap>
			<Footerstyled.FooterInner>
				<Footerstyled.LogoArea>
					<Image src={'/ico-kart-logo-grayscale.svg'} width={115} height={30} alt="Kart docs 로고" />
				</Footerstyled.LogoArea>
				{/* <Footerstyled.CopyRightArea>
					<Footerstyled.Copy>
						<time>{copyYear}</time>&nbsp;KARTRIDER TIPS
					</Footerstyled.Copy>
				</Footerstyled.CopyRightArea> */}

				<Footerstyled.BottomArea>
					<Footerstyled.BottomMenu>
						<Footerstyled.BottomItem as="li">
							<Link href="/guide/purpose">사이트 안내</Link>
						</Footerstyled.BottomItem>

						<Footerstyled.BottomItem as="li">
							<Link href="/guide/contribute">기여하기</Link>
						</Footerstyled.BottomItem>
						<Footerstyled.BottomItem as="li">
							<a href="https://forms.gle/4i8vvDYz9VbLbJGN9" target="_blank" rel="noopener noreferrer">
								피드백
							</a>
						</Footerstyled.BottomItem>
						<Footerstyled.BottomItem as="li">
							<Link href="/guide/donate">후원하기</Link>
						</Footerstyled.BottomItem>
					</Footerstyled.BottomMenu>
				</Footerstyled.BottomArea>

				<Footerstyled.BottomLogoArea>
					<Image src={'/ico-footer-logo-grayscale.svg'} width={24} height={24} alt="카트라이더 팁스 로고" />
					<Footerstyled.BottomLogoTxt>{copyYear} KART DOCS</Footerstyled.BottomLogoTxt>
				</Footerstyled.BottomLogoArea>
			</Footerstyled.FooterInner>

			<Footerstyled.Row>
				<Select data="sites" width="190px" height="36px" />
			</Footerstyled.Row>
		</Footerstyled.FooterWrap>
	);
}
