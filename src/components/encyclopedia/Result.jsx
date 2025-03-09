import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import * as S from 'style/components/sub/common/Sidebar.style';

export default function Result({ result, commonProps }) {
	const pathname = usePathname();
	// 각 항목의 활성화 상태를 관리할 객체 상태
	const [activeItems, setActiveItems] = useState({});
	// 각 항목의 세부 항목 열림 상태를 관리할 객체 상태
	const [openItems, setOpenItems] = useState({});

	// 초기 활성화 상태 설정
	useEffect(() => {
		if (commonProps?.dataType === 'sidebar') {
			// 새로운 상태 객체 생성
			const newActiveItems = {};
			const newOpenItems = {};

			result?.forEach(data => {
				data.depth1.forEach((depth1, index) => {
					const uniqueKey = `${data.sectionTitle}-${index}`;
					const myHref = depth1.depth2?.map(depth2 => depth2.href);

					// 현재 경로가 depth2의 href에 포함되어 있는지 확인
					if (myHref?.includes(pathname)) {
						newActiveItems[uniqueKey] = 'active';
						newOpenItems[uniqueKey] = true;
					} else {
						newActiveItems[uniqueKey] = '';
						newOpenItems[uniqueKey] = false;
					}
				});
			});

			setActiveItems(newActiveItems);
			setOpenItems(newOpenItems);
		}
	}, [pathname, result, commonProps?.dataType]);

	// 검색어가 있으면 관련 항목 열기
	useEffect(() => {
		if (commonProps?.dataType === 'sidebar' && commonProps?.value?.length > 0) {
			const newOpenItems = {};

			result?.forEach(data => {
				data.depth1.forEach((depth1, index) => {
					const uniqueKey = `${data.sectionTitle}-${index}`;
					newOpenItems[uniqueKey] = true;
				});
			});

			setOpenItems(newOpenItems);
		}
	}, [commonProps?.value, result, commonProps?.dataType]);

	// 렌더링 로직
	const renderItem = (depth1, uniqueKey) => {
		const depthType = depth1.depth2 ? 'hasDepth' : 'noDepth';
		const value = commonProps?.value || '';

		if (depthType === 'noDepth') {
			const hrefActive = depth1.href === pathname ? 'active' : '';
			const isHighlighted = value.length > 0 ? 'highlight' : '';

			return (
				<S.DetailsOuterItem key={uniqueKey} className={`${hrefActive}`} noDepth>
					<Link className={`detailsLink highlightText ${isHighlighted}`} href={depth1.href}>
						{depth1.title}
					</Link>
				</S.DetailsOuterItem>
			);
		}

		if (depthType === 'hasDepth') {
			return (
				<S.DetailsOuterItem key={uniqueKey}>
					<S.Details open={openItems[uniqueKey]}>
						<S.Summary>
							<span className={`highlightText ${value.length > 0 ? 'highlight' : ''}`}>{depth1.title}</span>
						</S.Summary>
						<S.List>
							{depth1.depth2.map((depth2, depth2Index) => {
								const hrefActive = depth2.href === pathname ? 'active' : '';
								const isHighlighted = value.length > 0 && depth2.title.toLowerCase().includes(value.toLowerCase());

								return (
									<S.Item className={`${hrefActive}`} key={depth2Index}>
										<Link className={`highlightText ${isHighlighted ? 'highlight' : ''}`} href={depth2.href}>
											{depth2.title}
										</Link>
									</S.Item>
								);
							})}
						</S.List>
					</S.Details>
				</S.DetailsOuterItem>
			);
		}
	};

	return (
		<>
			{result?.map((data, dataIndex) => (
				<S.Group key={dataIndex}>
					<S.SectionText>{data.sectionTitle}</S.SectionText>
					<S.DetailsOuterList>
						{data.depth1.map((depth1, depth1Index) => {
							const uniqueKey = `${data.sectionTitle}-${depth1Index}`;
							return renderItem(depth1, uniqueKey);
						})}
					</S.DetailsOuterList>
				</S.Group>
			))}
		</>
	);
}
