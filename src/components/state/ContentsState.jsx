import * as B from 'style/common/Button.style';
import * as C from 'style/components/state/ContentsState.style';
import { message } from "const";

export default function ContentsState ({ state }) {
    const renderCondition = (state) => {
        if (state === 'error') {
            return (
                <>
                    <C.Text>{message.seasonError}</C.Text>
                    <B.Button 
                    type="button" 
                    minWidth="100px" 
                    onClick={() => window.open('https://open.kakao.com/o/sIZ4nWQb','_target')}>
                        개발자 호출하기
                    </B.Button>
                </>
            )
        }

        else if (state === 'seasonReady') {
            return (
                <C.Text>{message.seasonReady}</C.Text>
            )
        }
    }


    return(
        <C.Wrap>
            {renderCondition(state)}
        </C.Wrap>
    )
}