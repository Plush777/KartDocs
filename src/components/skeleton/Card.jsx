import * as Sk from 'style/layout/Skeleton.style';

export default function Card({ type, length }) {
	const cardLength = length ? length : 3;

	return (
		<Sk.CardInner>
			<Sk.CardGroup display="grid" gtc="repeat(3, 1fr)" rg="60px">
				{Array.from({ length: cardLength }).map((_, index) => {
					return (
						<Sk.CardItem key={index}>
							<Sk.CardThumbnailWrapper>
								{type === 'live' && <Sk.CardVideoInfo />}
								<Sk.CardThumbnail />
							</Sk.CardThumbnailWrapper>

							<Sk.CardHead />

							<Sk.CardBottom />
						</Sk.CardItem>
					);
				})}
			</Sk.CardGroup>

			<Sk.CardButtonWrap>
				<Sk.CardButtonArea styleProp={'outline'} />
			</Sk.CardButtonWrap>
		</Sk.CardInner>
	);
}
