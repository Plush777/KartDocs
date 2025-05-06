import ContentsState from "components/state/ContentsState";
import SeasonWrap from "components/season/SeasonWrap";

export default function SeasonList(state) {
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
                <SeasonWrap />
            }
        </>
    )
}