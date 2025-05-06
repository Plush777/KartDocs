export const utilLinks = {
    0: 'https://open.kakao.com/o/gwT6q4bc',
    1: 'https://kartdrift.nexon.com/kartdrift/ko/main'
}

export const utilArray = ['커뮤니티','공식 홈페이지','설정', '앱 설치하기'];

export const utilRender = (object, index,) => object[index];

export const mobileHeaderMenuTagCondition = (linkIndex, item) => {
    if (item === '앱 설치하기') {
        return 'div';
    }

    if (!linkIndex) {
        return 'button';
    }
}