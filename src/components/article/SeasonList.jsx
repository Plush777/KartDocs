import calcSeason from "scripts/calcSeason";
import ContentsState from "components/common/ContentsState";
import SeasonWrap from "components/article/SeasonWrap";

const SeasonList = (state) => {
    const { currentSeasonStart, endDate, daysCount } = calcSeason();

    const renderContentsState = (state) => {
        if (state.state === 'error') {
            return (
                <ContentsState state='error'/>
            )
        }

        else if (state.state === 'seasonReady') {
            return (
                <ContentsState state='seasonReady'/>
            )
        }
    }

    const isState = state.state === 'error' || state.state === 'seasonReady';

    return(
        <>
            {renderContentsState(state)}

            {isState ? 
                null 
                : 
                <SeasonWrap 
                    currentSeasonStart={currentSeasonStart}
                    endDate={endDate} 
                    daysCount={daysCount}
                />
            }
        </>
    )
}

export default SeasonList;