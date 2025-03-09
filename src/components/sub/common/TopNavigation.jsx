'use client';

import * as T from 'style/components/sub/common/TopNavigation.style';
import * as S from 'style/components/sub/common/Sidebar.style';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import SCsidebarLeft from 'svg/ico-sidebar-left.svg';
import Sidebar from 'components/sidebar/Sidebar';
import BreadCrumb from 'components/sub/common/BreadCrumb';
// import GuideTooltip from "components/common/GuideTooltip";
import SCclose from 'svg/ico-close.svg';
import { learnData } from 'data/sidebar/learn/data';
import { encyclopediaData } from 'data/sidebar/encyclopedia/data';
import { faqData } from 'data/sidebar/faq/data';
import useClickOutside from 'hooks/useClickOutside';
import useBodyScrollLock from 'hooks/useBodyScrollLock';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { guideTooltipAtom } from 'recoil/common/guideTooltipState';

export default function TopNavigation() {
	const pathname = usePathname();
	const pathnameArray = pathname.split('/').filter(path => path);
	/* 0번째 경로를 제외한 나머지 경로 */
	const myPathArray = pathnameArray.slice(1);
	// console.log(myPathArray);

	const [sideToggle, setSideToggle] = useState(false);
	const [sideTransition, setSideTransition] = useState(true);
	const [sideData, setSideData] = useState(null);

	const sidebarRef = useClickOutside(() => setSideToggle(false));
	const { lockScroll, openScroll } = useBodyScrollLock();

	// const guideTooltipState = useRecoilValue(guideTooltipAtom);
	const setGuideTooltipState = useSetRecoilState(guideTooltipAtom);

	// const getSessionTooltip = sessionStorage.getItem('tooltip');

	const handleSideOpen = state => {
		setSideToggle(state);
	};

	// const handleTooltipClose = () => {
	//     setGuideTooltipState(false);
	//     sessionStorage.setItem('tooltip', 'true');
	// }

	useEffect(() => {
		if (sideToggle) {
			setSideTransition(false);
			setSideToggle(false);
		}

		if (myPathArray.includes('learn')) {
			setSideData(learnData);
		}

		if (myPathArray.includes('encyclopedia')) {
			setSideData(encyclopediaData);
		}

		if (myPathArray.includes('faq')) {
			setSideData(faqData);
		}
	}, [pathname]);

	useEffect(() => {
		sideToggle ? lockScroll() : openScroll();
	}, [sideToggle]);

	/* 사이드바 메뉴를 클릭하면 트랜지션 상태와 토글 상태가 모두 false로 바뀌기 때문에
    다시 버튼을 눌렀을 때 토글 애니메이션을 위해 0.3초가 지난 후 트랜지션 상태를 다시 true로 바꿔줍니다.

    * 이 때, 0.3초는 사이드바 트랜지션 시간임.
    */
	useEffect(() => {
		if (!sideToggle && !sideTransition) {
			const timer = setTimeout(() => {
				setSideTransition(true);
			}, 300);

			return () => clearTimeout(timer);
		}
	}, [sideToggle, sideTransition]);

	return (
		<>
			<Sidebar
				wrapClassName={`${sideTransition ? 'transition' : ''} ${sideToggle ? 'active' : ''}`}
				dimmedClassName={`${sideTransition ? 'transition' : ''} ${sideToggle ? 'active' : ''}`}
				data={sideData}
				sidebarRef={sidebarRef}
				sideToggle={sideToggle}
			>
				<S.BtnArea>
					<S.CloseButton title="목차 닫기" onClick={() => handleSideOpen(false)}>
						<SCclose width="22px" height="22px" />
					</S.CloseButton>
				</S.BtnArea>
			</Sidebar>

			<T.Wrap className="topNavigationWrap">
				<T.Inner>
					<T.SidebarOpenButton onClick={() => handleSideOpen(true)} type="button" title="목차 열기">
						<SCsidebarLeft width="24px" height="24px" />
					</T.SidebarOpenButton>

					{/* {getSessionTooltip == null && guideTooltipState &&
                        <GuideTooltip 
                            name="topNavigation"
                            left="-38px" 
                            top="35px"
                            arrowLeft="50%" 
                            arrowTop="-5px"
                            arrowTransform="translateX(-50%)" 
                            text="목차를 열어보세요!" 
                            className="arrowUp"
                            clickFn={handleTooltipClose}
                        /> 
                    } */}

					<BreadCrumb data={myPathArray} />
				</T.Inner>
			</T.Wrap>
		</>
	);
}
