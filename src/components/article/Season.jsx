import * as Mainstyled from 'components/style/common/Area.style';
import MainTitle from 'components/article/MainTitle';
import SeasonList from 'components/article/SeasonList';
import calcSeason from "scripts/calcSeason";
import SeasonCalculator from 'components/article/SeasonCalculator';
import { useEffect } from 'react';

const Season = () => {
    const { currentSeasonNumber, next, error, proceed } = calcSeason();

    const surffix = () => {
        if (currentSeasonNumber === 1) return 'st';
        if (currentSeasonNumber === 2) return 'nd';
        if (currentSeasonNumber === 3) return 'rd';
        
        return 'th';
    }

    const renderSeasonList = () => {
        if (!next && !error && proceed == true) return <SeasonList/>
        if (!proceed && !error && next == true) return <SeasonList state="seasonReady"/>
        if (!proceed && !next && error == true ) return <SeasonList state="error"/>
    }

    // useEffect(() => {
    //     console.log(next, proceed);
    // }, [next, proceed])

    return(
        <Mainstyled.ContainerBox justify="between">
            <MainTitle 
                lottieName="season"
                lottieSrc="https://lottie.host/7a070841-534a-4caa-b524-8f84ab7411ad/yPubudtc9R.lottie"
                title={`${currentSeasonNumber}${surffix()} 등급전 ${next == true ? '준비중...' : '진행중!'}`}
                marginBottom="20px"
            />
            
            <Mainstyled.MainInner name="season">
                {renderSeasonList()}
            </Mainstyled.MainInner>
            <SeasonCalculator/>
        </Mainstyled.ContainerBox>
    )
}

export default Season;