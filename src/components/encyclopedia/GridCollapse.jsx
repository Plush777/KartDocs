import * as G from 'style/components/sub/encyclopedia/Grid.style';
import * as Collap from 'style/components/sub/encyclopedia/Collapse.style';
import { statArray } from 'data/karts';
import Graph from 'components/encyclopedia/Graph';
import React, { Fragment } from 'react';
import { acquisitionCondition } from 'data/acquisition';

export default function GridCollapse({ item, index, collapseRef }) {
	const convertTuningToArray = tuningValue => {
		// 문자열로 변환 후 각 숫자를 배열로 만듦
		return String(tuningValue).split('').map(Number);
	};

	// 데이터 객체를 변환하는 함수
	const transformKartData = () => {
		return {
			array: convertTuningToArray(item.기본튜닝수치),
		};
	};

	const statArrayData = transformKartData();
	const tuningLabels = ['부스터 가속', '드리프트 가속', '부스터 시간', '부스터 충전량'];

	console.log(statArrayData);

	console.log(item);

	return (
		<Collap.Wrap ref={el => (collapseRef.current[index] = el)}>
			<Collap.List>
				<Collap.Item>
					<Collap.Row flexDirection="column">
						<Collap.Row flexDirection="row">
							<G.Text>획득경로</G.Text>
							<G.Text sm as="span">
								{item.획득경로}
							</G.Text>
						</Collap.Row>
						{!item.기본튜닝수치 && (
							<>
								<Collap.Row flexDirection="row">
									<G.Text>스킬 및 카트</G.Text>
									<G.Text sm as="span">
										{item.좋아하는스킬및카트}
									</G.Text>
								</Collap.Row>
								<Collap.Row flexDirection="row">
									<G.Text>특성</G.Text>
									<G.Text sm as="span">
										{item.특성}
									</G.Text>
								</Collap.Row>
							</>
						)}
					</Collap.Row>
				</Collap.Item>

				{item.기본튜닝수치 && (
					<Collap.Item>
						<Collap.RowContainer flexDirection="column">
							{statArrayData.array.map((value, idx) => (
								<Collap.Row stat key={idx} flexDirection="column">
									<G.Text>
										{tuningLabels[idx]} {value}
									</G.Text>
									<Collap.Row graph>
										{Array.from({ length: value }, (_, graphIndex) => (
											<Fragment key={graphIndex}>
												<Graph />
											</Fragment>
										))}
									</Collap.Row>
								</Collap.Row>
							))}
						</Collap.RowContainer>
					</Collap.Item>
				)}
			</Collap.List>
		</Collap.Wrap>
	);
}
