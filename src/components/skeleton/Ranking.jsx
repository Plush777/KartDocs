import * as Sk from 'style/layout/Skeleton.style';

export default function Ranking() {
	return (
		<Sk.RankWrap>
			<Sk.RankList>
				{Array.from({ length: 5 }).map((_, index) => {
					return (
						<Sk.RankItem key={index}>
							<Sk.RankSeq>
								<Sk.RankSeqText />
								<Sk.RankStatus />
							</Sk.RankSeq>
							<Sk.RankInnerBox>
								<Sk.RankInnerColumnBox>
									<Sk.RankTitleText />
									<Sk.RankInnerRowBox>
										<Sk.RankDataBox />
										<Sk.RankDataBox />
										<Sk.RankDataBox />
										<Sk.RankDataBox />
									</Sk.RankInnerRowBox>
								</Sk.RankInnerColumnBox>
							</Sk.RankInnerBox>
						</Sk.RankItem>
					);
				})}
			</Sk.RankList>

			<Sk.BottomBar>
				<Sk.BottombarRankItem>
					<Sk.BottombarRankSeq>
						<Sk.BottombarRankSeqText />
						<Sk.RankStatus />
					</Sk.BottombarRankSeq>
					<Sk.BottombarRankInnerBox>
						<Sk.BottombarRankInnerColumnBox>
							<Sk.BottomBarRankTitleText />
							<Sk.BottombarRankInnerRowBox>
								<Sk.BottombarRankDataBox />
								<Sk.BottombarRankDataBox />
								<Sk.BottombarRankDataBox />
								<Sk.BottombarRankDataBox />
							</Sk.BottombarRankInnerRowBox>
						</Sk.BottombarRankInnerColumnBox>
					</Sk.BottombarRankInnerBox>
				</Sk.BottombarRankItem>
			</Sk.BottomBar>

			<Sk.RankButtonWrap />
		</Sk.RankWrap>
	);
}
