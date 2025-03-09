import Image from 'next/image';
import useImageTransition from 'hooks/useImageTransition';
import VideoInfo from 'components/video/VideoInfo';
import { decode } from 'html-entities';
import * as Tit from 'style/components/title/Title.style';
import * as C from 'style/components/main/Card.style';

export default function ChzzkLiveList({ data, loading }) {
	const { isShow } = useImageTransition(loading, 1);
	const baseLink = 'https://chzzk.naver.com/live/';

	return (
		<C.Group display="grid" gtc="repeat(3, 1fr)" rg="60px">
			{/* adult : true => (19세 성인 라이브는 제외) */}
			{data &&
				data.pages.map(pageItem => {
					return pageItem
						.filter(item => !item.live.adult)
						.map((element, elementIndex) => {
							const { channelId, channelName } = element.channel;
							let { liveTitle, liveImageUrl, openDate } = element.live;
							const liveLink = `${baseLink}${channelId}`;

							liveImageUrl = liveImageUrl?.replace('{type}', '1080');

							console.log(element);

							return (
								<C.Item key={elementIndex}>
									<C.Link className={isShow} href={liveLink} target="_blank" rel="noopener noreferrer">
										<C.ThumbnailWrapper>
											<VideoInfo />
											<C.Thumbnail>
												{liveImageUrl && (
													<Image priority="high" src={liveImageUrl} alt={liveTitle} width={409} height={230} />
												)}
											</C.Thumbnail>
										</C.ThumbnailWrapper>

										<C.Head>
											<Tit.HeadTitle>{decode(liveTitle)}</Tit.HeadTitle>
										</C.Head>

										<C.Bottom>
											<C.BottomDescription>By&nbsp;{channelName}</C.BottomDescription>
											<C.BottomDescription as="time">{openDate}</C.BottomDescription>
										</C.Bottom>
									</C.Link>
								</C.Item>
							);
						});
				})}
		</C.Group>
	);
}
