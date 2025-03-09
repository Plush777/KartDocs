import * as A from 'style/components/live/Adult.style';

export default function Adult () {
    return(
        <A.Wrap className="adultWrap">
            <A.Mark>18+</A.Mark>
            <A.Text>연령제한 라이브입니다</A.Text>
        </A.Wrap>
    )
}