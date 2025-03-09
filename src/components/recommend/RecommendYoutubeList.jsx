import * as C from 'style/components/main/Card.style';
import * as Tit from 'style/components/title/Title.style';
import Image from 'next/image';
import useImageTransition from 'hooks/useImageTransition';
import { decode } from 'html-entities';

export default function RecommendYoutubeList({ data, isLoading }) {
	const videoList =
		data &&
		data.map(item => {
			const snippet = item[0].snippet;
			const id = item[0].id;
			const dateSlice = snippet.publishedAt.slice(0, 10);

			return {
				snippet,
				dateSlice,
				id,
			};
		});

	const { isShow } = useImageTransition(isLoading, 1);

	return (
		<C.Group display="grid" gtc="repeat(3, 1fr)" rg="60px">
			{data &&
				videoList.map((item, index) => {
					const snippet = item.snippet;
					const dateSlice = item.dateSlice;
					const id = item.id;

					return (
						<C.Item key={index}>
							<C.Link
								className={isShow}
								href={`https://www.youtube.com/watch?v=${id}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<C.Thumbnail>
									<Image priority width={409} height={230} src={snippet.thumbnails.high.url} alt={snippet.title} />
								</C.Thumbnail>

								<C.Head>
									<Tit.HeadTitle>{decode(snippet.title)}</Tit.HeadTitle>
								</C.Head>

								<C.Bottom>
									<C.BottomDescription>By&nbsp;{snippet.channelTitle}</C.BottomDescription>
									<C.BottomDescription as="time">{dateSlice}</C.BottomDescription>
								</C.Bottom>
							</C.Link>
						</C.Item>
					);
				})}
		</C.Group>
	);
}
