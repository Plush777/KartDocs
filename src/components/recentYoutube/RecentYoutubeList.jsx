import * as Tit from 'style/components/title/Title.style';
import * as C from 'style/components/main/Card.style';
import Image from 'next/image';
import useImageTransition from 'hooks/useImageTransition';
import { decode } from 'html-entities';

export default function RecentYoutubeList ({ data, isLoading }) {
    const recentList = data && data.slice(0, 3);
    const apiDate = data && recentList.map((item) => (item.pubDate));
    /*
        Cannot read property 'split' of undefined
        => https://okky.kr/questions/876611
    */
    const dateOnlyArray = data && apiDate.map(dateString => {
        const dateParts = (dateString || "").split(" ");
        return dateParts[0]; // 날짜 부분만 추출
    });
    const { isShow } = useImageTransition(isLoading, 1);

    return(
        <C.Group display="flex">
            {data && recentList.map((list, index) => {
                return(
                    <C.Item key={index}>
                        <C.Link className={isShow} href={list.link} target="_blank" rel="noopener noreferrer">
                            <C.Thumbnail>
                                <Image priority="high" width={409} height={230} src={list.thumbnail} alt={list.title}/>
                            </C.Thumbnail>

                            <C.Head>
                                <Tit.HeadTitle>{decode(list.title)}</Tit.HeadTitle>
                            </C.Head>

                            <C.Bottom>
                                <C.BottomDescription as="time">{dateOnlyArray[index]}</C.BottomDescription>
                            </C.Bottom>
                        </C.Link>
                    </C.Item>
                )
            })}
        </C.Group>
    )
}