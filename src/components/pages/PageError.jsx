'use client';

import { useRouter } from "next/navigation";
import * as N from 'style/common/NotFound.style';

export default function PageError({ type, error, reset }) {
    const router = useRouter();

    console.log(error);

    return ( 
        <N.FlexContainer>
            <N.ImgArea>
                <N.ErrorImg src="/images/common/img-notfound.webp" alt="에러 이미지" />
            </N.ImgArea>
            {type === 'error' && (
                <>
                    <N.TxtArea>
                        <N.ErrorTitle className="errorTitle">페이지 에러가 발생했습니다.</N.ErrorTitle>
                        <N.ErrorDesc className="errorDesc">일시적인 현상일수도 있으니 아래 새로고침을 눌러주세요.<br/> 
                        해당 현상이 지속될 경우 
                        <a href="https://open.kakao.com/o/sIZ4nWQb" target="_blank">https://open.kakao.com/o/sIZ4nWQb</a> 
                        로 문의해주세요.
                        </N.ErrorDesc>
                    </N.TxtArea>
                    <N.BtnArea>
                        <N.BtnRedirect onClick={reset}>새로고침</N.BtnRedirect>
                    </N.BtnArea>
                </>
            )}

            {type === 'notFound' && (
                <>
                    <N.TxtArea>
                        <N.ErrorTitle className="errorTitle">찾을 수 없는 페이지입니다.</N.ErrorTitle>
                        <N.ErrorDesc className="errorDesc">요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하신 것 같아요.</N.ErrorDesc>
                    </N.TxtArea>
                    <N.BtnArea>
                        <N.BtnRedirect onClick={() => router.push('/')}>홈으로 이동</N.BtnRedirect>
                    </N.BtnArea>
                </>
            )}
        </N.FlexContainer>
    );
}