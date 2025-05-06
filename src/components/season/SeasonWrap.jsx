import { format } from 'date-fns';
import calcSeason from "scripts/calcSeason";
import * as S from 'style/components/main/Season.style';

export default function SeasonWrap () {
    const { currentSeasonStart, endDate, daysCount } = calcSeason();

    return(
        <S.Wrap>
            <S.Group>
                <S.Text as="h3" head>시즌 시작일</S.Text>
                <S.Text as="time" dateTime={format(currentSeasonStart,'yyyy-MM-dd')}>
                    {format(currentSeasonStart,'yyyy-MM-dd')}
                </S.Text>
            </S.Group>
            <S.Group>
                <S.Text as="h3" head>시즌 종료일</S.Text>
                {endDate && <S.Text as="time" dateTime={endDate}>{endDate} 오전 8시 59분 (UTC +9)</S.Text>}
            </S.Group>
            <S.Group>
                <S.Text as="h3" head>남은 날짜</S.Text>
                {
                    daysCount && 
                    <S.Text as="b" endDate>
                        <span>D</span>
                        <S.Dash>-</S.Dash>
                        <span>{daysCount}</span>
                    </S.Text>
                }
            </S.Group>
        </S.Wrap>
    )
}