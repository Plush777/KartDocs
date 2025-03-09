'use client';

import * as D from 'style/layout/DefaultLayout.style';
import MainLayout from 'components/layout/main/MainLayout';
import BtnTop from 'components/buttons/BtnTop';

export default function Home() {
	return (
		<D.Main>
			<D.ContentWrap>
				<D.ContentInner>
					<MainLayout />
				</D.ContentInner>
				<BtnTop />
			</D.ContentWrap>
		</D.Main>
	);
}
