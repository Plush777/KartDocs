export const acquisitionCondition = (name) => {
    const acq = {
        first: '첫 접속 지급',
        default: '기본 지급 캐릭터',
        shop: '상점 구매',
        limited: '시즌 한정판매 (상점)',
        mission: '미션 올인원 박스 (싱글 미션)',
        growth: '성장 시스템',
        level: {
            lv2: {
                mission: '레벨 2 임무 - 캐릭터 변경 1회',
                mission: '레벨 2 임무 - 레이싱 패스 트로피 10개 획득 (현재 획득 불가)'
            },
            lv5: {
                mission: '레벨 5 임무 - 풍선 업그레이드 1회'
            },
            lv10: {
                achieve: '레벨 10 달성',
                mission: '레벨 10 임무 - 파티원과 함께 매칭 3회'
            },
            lv20: {
                mission: '레벨 20 임무 - 스피드전 스쿼드 완주 1회'
            },
            lv30: {
                achieve: '레벨 30 달성'
            }
        },
        collab: {
            bt21: 'BT21 콜라보레이션 (현재 획득 불가)',
            blackpink: '블랙핑크 콜라보레이션 (현재 획득 불가)',
            porsche: '포르쉐 콜라보레이션 (현재 획득 불가)',
            lamborghini: '람보르기니 콜라보레이션 (현재 획득 불가)',
        },
        box: {
            normal: '올인원 박스 (상점)',
            nice: '나이스 올인원 박스 (상점)',
            kart: '카트바디 세트 박스 (상점)',
            char: '캐릭터 세트 박스 (상점)',
            plus: '플러스 박스 (레이싱 패스 트로피 교환)',
            premiumPlus: '프리미엄 플러스 박스 (레이싱 패스 트로피 교환)',
            specialKart1: '스패셜 카트바디 박스 1탄 (이벤트)',
            specialKart2: '스패셜 카트바디 박스 2탄 (이벤트)',
            specialChar1: '스패셜 코스튬 박스 1탄 (이벤트)',
            specialChar2: '스패셜 코스튬 박스 2탄 (이벤트)',
            speedChampion: '스피드 챔피언 박스 (등급전 보상)',
            itemChampion: '아이템 챔피언 박스 (등급전 보상)',
        },
        personalOutlet: '퍼스널 아울렛',
        none: '현재 획득 불가',
        platform: {
            android: 'Android 플랫폼에서 로그인',
            ios: 'IOS 플랫폼에서 로그인',
            nexon: 'Nexon 플랫폼에서 로그인',
            ps: 'PlayStation 플랫폼에서 로그인',
            steam: 'Steam 플랫폼에서 로그인',
            xbox: 'Xbox 플랫폼에서 로그인',
        },
        cbt: 'CBT 보상',
        grandprix: {
            s1: '그랑프리 시즌1 보상',
            s2: '그랑프리 시즌2 보상',
            s3: '그랑프리 시즌3 보상',
            s4: '그랑프리 시즌4 보상',
            s5: '그랑프리 시즌5 보상'
        },
        rank: {
            s1: '2024 1st 등급전 보상',
            s2: '2024 2nd 등급전 보상',
        },
        original: '카트라이더 헌정 패키지 (현재 획득 불가)',
        mileage: '상점에서 마일리지로 구매',
        racingPass: {
            common: '레이싱 패스 일반 보상',
            premium: '레이싱 패스 프리미엄 보상',
        },
        event: {
            e1: 'RISE 업데이트 기념 온타임 이벤트',
            e2: '2023 KDL 팬 레이스 이벤트',
            e3: 'Twitch 드롭스 보상',
            e4: 'PC방 누적 접속 이벤트',
            e5: '2024.06.29 오늘의 미션 최종 단계 완료 보상',
            e6: '글로벌 사전등록 이벤트',
            e7: '출석체크 이벤트 8일차 보상',
            e8: '2024.06.27 오늘의 미션 최종 단계 완료 보상',
            e9: '2024.07.11 ~ 2024.07.18 특별 플레이 미션 모두 완료',
            e10: '2024.07.05 오늘의 미션 최종 단계 완료 보상',
            e11: '시즌 3 캐치 플래그 이벤트 (현재 획득 불가)',
            e12: '2024.06.27 ~ 24.07.18 PC방 누적 플레이타임 이벤트 보상'
        },
        pc: 'PC방 전용'
    }

    if (name === '연습 카트' || name === '프로토' || name === '해적 거북') {
        return [acq.first]
    }

    if (name === '코튼' || name === '버스트' || name === '솔리드' || name === '마라톤' || name === '세이버') {
        return [acq.shop]
    }

    if (name === '뉴욕 머슬카' || name === '꽃마차' || name === '제니스') {
        return [acq.mission]
    }

    if (name === '복돼지' || name === '삼바' || name === '노블') {
        return [acq.growth]
    }

    if (
        name === '스톰' || 
        name === '스파이더' || 
        name === '와일드 덤프'||
        name === '루나' ||
        name === '드래고니아' ||
        name === '드래고니스' ||
        name === '튜닝 슬래쉬' ||
        name === '노르딕' ||
        name === '인펙터' ||
        name === '뉴트로이드' ||
        name === '크리처' ||
        name === '코스모스 헥사' ||
        name === '삼색냥' ||
        name === '스페이스 워' ||
        name === '우주 탐사' ||
        name === '웨딩 마치' ||
        name === '찻잔' ||
        name === '스틸 코어' ||
        name === '파워 포스' ||
        name === '나이트이글' ||
        name === '안테나' ||
        name === '병아리 유모차' ||
        name === '마왕' ||
        name === '리치 골드' 
    ) {
        return [acq.limited]
    }

    if (name === '솔리드 프로' || name === '크레이지레이싱 다오') {
        return [acq.original]
    }
    
    if (name === '플레이 카트' || name === '플레이 배찌') return [acq.platform.android]
    if (name === '넥슨 카트' || name === '넥슨 배찌') return [acq.platform.nexon]
    if (name === '에이블 카트' || name === '에이블 브로디') return [acq.platform.ios]
    if (name === '퀀텀 머슬' || name === '퀀텀 브로디') return [acq.platform.ps]
    if (name === '코멧 머슬' || name === '코멧 브로디') return [acq.platform.steam]
    if (name === '코스믹 머슬' || name === '코스믹 브로디') return [acq.platform.xbox]
    if (name === '광산 수레') return [acq.cbt]

    if (
        name === '소방차' ||
        name === '저스티스' ||
        name === '스마트 모빌리티' ||
        name === '나이트 우퍼' ||
        name === '흑룡' ||
        name === '킬러' ||
        name === '플라밍고' ||
        name === '솔라' ||
        name === '박쥐' ||
        name === '이클립스 알파' ||
        name === '닌자' ||
        name === '몬스터' ||
        name === '흑기사'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '오로라' ||
        name === '렉카' ||
        name === '굴착기' ||
        name === '마린' ||
        name === 'GT60' ||
        name === '블러드' ||
        name === '화이트 멜로우' ||
        name === '마피아' ||
        name === '빌런' ||
        name === '마귀상어' ||
        name === '인더스트'
    ) {
        return [acq.box.plus]
    }

    if (
        name === 'Huracán EVO Spyder' ||
        name === 'Aventador Ultimae Roadster'
    ) {
        return [acq.collab.lamborghini]
    }

    if (
        name === 'Pink Venom 슈퍼카' ||
        name === 'Pink Venom 몬스터' 
    ) {
        return [acq.collab.blackpink]
    }

    if (
        name === '718 Boxster' ||
        name === '911 Turbo S Cabriolet'
    ) {
        return [acq.collab.porsche]
    }

    if (
        name === 'BT21 캠핑버스' ||
        name === 'BT21 드림카'
    ) {
        return [acq.collab.bt21]
    }

    if (
        name === '타이탄' ||
        name === '뉴욕 택시' ||
        name === '플라즈마PT' ||
        name === '탐정 소파' ||
        name === '하운드' ||
        name === '스펙터' ||
        name === '아이스크림 트럭' ||
        name === '블랙 마크' ||
        name === '개구리' ||
        name === '파인애플' ||
        name === '스콜 윙' ||
        name === '무에르토' ||
        name === '유령 호박' ||
        name === '아이언 윌' ||
        name === '투 페이스' ||
        name === '데빌' ||
        name === '엔젤' ||
        name === '스위피' ||
        name === '크리스탈' ||
        name === '루돌프' 
    ) {
        return [acq.personalOutlet]
    }

    if (
        name === '슈가레빗' ||
        name === '스파이크' ||
        name === '뉴욕 투어 버스' ||
        name === 'F724' ||
        name === '메탈 로더' ||
        name === '세이버 프로' ||
        name === '어둠의 수호자' ||
        name === '빌리지' ||
        name === '스쿠너' ||
        name === '세이프티' ||
        name === '장수풍뎅이' ||
        name === '캐리어' ||
        name === '퓨리파이어' ||
        name === '왕문어' ||
        name === '뱀파이어' ||
        name === '이클립스 베타' ||
        name === '플랫포스' ||
        name === '서커스' ||
        name === '요술복치' ||
        name === '그래피티' ||
        name === '골드문' ||
        name === '코리스마튼' ||
        name === '이걸루' ||
        name === '리타이어' ||
        name === '레드 블렛' ||
        name === '베토벤'
    ) {
        return [acq.box.normal, acq.box.nice, acq.box.kart]
    }
    
    if (name === '비밀 변기') {
        return [acq.shop, acq.box.normal, acq.box.nice, acq.box.kart]
    }

    if (
        name === '에이스' || 
        name === '롤러' ||
        name === '마법 호박' ||
        name === '젠틀리'
    ) {
        return [acq.box.normal, acq.box.nice, acq.box.kart, acq.box.specialKart2]
    }

    if (
        name === '브루터스' ||
        name === '공부의 신' ||
        name === '플라즈마FT' ||
        name === '드링크' ||
        name === '이런 수박'
    ) {
        return [acq.box.normal, acq.box.nice, acq.box.kart, acq.box.specialKart1]
    }

    if (name === '드릴' && name === '백사') {
        return [acq.box.specialKart1, acq.personalOutlet]
    }

    if (name === '인더스틸') {
        return [acq.box.normal, acq.box.nice, acq.box.kart, acq.box.plus]
    }

    if (name === '스톰') {
        return [acq.none]
    }

    if (name === '노블' || name === '삼바') {
        return [acq.growth]
    }

    if (name === '스팀 클래식' || name === '양산형 모빌리티') {
        return [acq.grandprix.s1, acq.box.speedChampion]
    }

    if (name === '와일드 더스트' || name === '스카이 로켓') {
        return [acq.grandprix.s2, acq.box.speedChampion]
    }

    if (name === '볼트' || name === 'KDI 경찰 트럭') {
        return [acq.grandprix.s3, acq.box.speedChampion]
    }

    if (name === '전기톱' || name === '검은 늑대') {
        return [acq.grandprix.s4, acq.box.speedChampion]
    }

    if (name === '어릿광대' || name === '핫도그') {
        return [acq.grandprix.s5, acq.box.speedChampion]
    }

    if (name === '폭스' || name === '스트라이크') {
        return [acq.rank.s1]
    }

    if (name === '컵라면' || name === '골든 이글') {
        return [acq.rank.s2]
    }

    if (name === '페이라' || name === '하마' || name === '우유 배달' || name === '태풍') {
        return [acq.box.specialKart2, acq.personalOutlet]
    }

    if (name === '샤크 타이탄') {
        return [acq.event.e1]
    }

    if (name === '2023 KDL 빅토리 이글') {
        return [acq.event.e2]
    }

    if (name === '레이싱 트럭') {
        return [acq.event.e3]
    }

    if (name === '워호그') {
        return [acq.event.e4]
    }

    if (name === '복고탐사') {
        return [acq.event.e5]
    }

    if (name === '레그 익스텐션' || name === '업사이드 다운') {
        return [acq.mileage]
    }

    if (
        name === '메카 라이언' || 
        name === '레트로이드' ||
        name === '레이저' ||
        name === 'Urus Performante' ||
        name === 'Macan GTS'
    ) {
        return [acq.racingPass.common]
    }

    if (
        name === '스토커' || 
        name === '래빗홀릭 윙' || 
        name === '배틀 버기' ||
        name === '밀키웨이' ||
        name === '올드 머니'
    ) {
        return [acq.racingPass.premium]
    }

    if (name === '멘티스') {
        return [acq.pc, acq.limited]
    }

    if (
        name === '붐힐마을 다오' ||
        name === '붐힐마을 디지니' ||
        name === '붐힐마을 배찌' ||
        name === '붐힐마을 케피' ||
        name === '붐힐마을 마리드' ||
        name === '붐힐마을 우니' ||
        name === '붐힐마을 에띠' ||
        name === '붐힐마을 모스' ||
        name === '미스트폴 브로디' ||
        name === '히어로 네오' ||
        name === '리타이어맨 렉스' ||
        name === '천재해커 크리스' ||
        name === '리우 아이리' ||
        name === '은둔해커 소피아' ||
        name === '열혈형사 브라이언' ||
        name === '슈퍼스타 레이브'
    ) {
        return [acq.default]
    }

    if (
        name === '동글 안경 다오'
    ) {
        return [acq.mission]
    }

    if (
        name === '홈런왕 다오'
    ) {
        return [acq.box.plus]
    }

    if (
        name === '개척자 다오'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '스카이레이서 다오'
    ) {
        return [acq.box.itemChampion, acq.pc]
    }

    if (
        name === '블루 레이서 다오'
    ) {
        return [acq.pc, acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '스노쿨러 다오'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '젠틀맨 다오'
    ) {
        return [acq.level.lv20.mission]
    }

    if (
        name === '좀비 다오'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '그린레이서 다오'
    ) {
        return [acq.event.e3, acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '장난감병정 다오'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '베테랑R맨 다오'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '목수 다오'
    ) {
        return [acq.limited]
    }

    if (
        name === '모범생 디지니' ||
        name === '총감독 브로디'
    ) {
        return [acq.event.e6]
    }

    if (
        name === '스트라이커 디지니'
    ) {
        return [acq.racingPass.premium]
    }

    if (
        name === '엔지니어 디지니'
    ) {
        return [acq.racingPass.premium]
    }

    if (
        name === '항해사 디지니'
    ) {
        return [acq.racingPass.premium]
    }

    if (
        name === '삼바스타 디지니'
    ) {
        return [acq.level.lv5.mission]
    }

    if (
        name === '괴짜 과학자 디지니'
    ) {
        return [acq.personalOutlet]
    }

    if (
        name === '트윙클 엔젤 디지니'
    ) {
        return [acq.personalOutlet, acq.limited]
    }

    if (
        name === '삼색냥 디지니'
    ) {
        return [acq.limited]
    }

    if (
        name === '슈팅 가드 배찌'
    ) {
        return [acq.limited, acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '자유의 배찌상'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice, acq.box.specialChar2]
    }

    if (
        name === '황금의 배찌상'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '캐주얼 배찌'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '개굴 레이서 배찌'
    ) {
        return [acq.box.plus]
    }

    if (
        name === '썸머 DJ 배찌'
    ) {
        return [acq.box.specialChar1, acq.personalOutlet]
    }

    if (
        name === '구울 배찌'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '빨간 코 사슴 배찌'
    ) {
        return [acq.personalOutlet]
    }

    if (
        name === '골동품상 배찌'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '우주 탐험대 배찌'
    ) {
        return [acq.limited]
    }

    if (
        name === '선인장 케피'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '야구 포수 케피'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '샤크 케피'
    ) {
        return [acq.pc, acq.personalOutlet, acq.box.specialChar2]
    }

    if (
        name === '식당 종업원 케피'
    ) {
        return [acq.event.e3, acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '큐티 마리드'
    ) {
        return [acq.mission]
    }

    if (
        name === '세일러 마리드'
    ) {
        return [acq.limited, acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '단안경 마리드'
    ) {
        return [acq.box.itemChampion]
    }

    if (
        name === '마법소녀 마리드'
    ) {
        return [acq.mission]
    }

    if (
        name === '팬시 레이서 마리드'
    ) {
        return [acq.personalOutlet, acq.box.specialChar2]
    }

    if (
        name === '테니스 소녀 마리드'
    ) {
        return [acq.level.lv2.mission]
    }

    if (
        name === '데빌 마리드'
    ) {
        return [acq.personalOutlet, acq.limited]
    }

    if (
        name === '꼬꼬마 우니'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '꼬마 탐정 우니'
    ) {
        return [acq.personalOutlet, acq.box.specialChar2]
    }

    if (
        name === '복서 우니'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '어린 왕자 우니'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '해골 마스크 우니'
    ) {
        return [acq.personalOutlet]
    }

    if (
        name === '눈꼬마곰 우니'
    ) {
        return [acq.box.plus]
    }

    if (
        name === '개구리 우니'
    ) {
        return [acq.limited]
    }

    if (
        name === '최연소 우주인 우니'
    ) {
        return [acq.event.e7]
    }

    if (
        name === '미케닉 유망주 에띠'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '요리사 모스'
    ) {
        return [acq.limited, acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '광부 모스'
    ) {
        return [acq.personalOutlet]
    }

    if (
        name === '학생회장 모스'
    ) {
        return [acq.level.lv10.mission]
    }

    if (
        name === '징글벨 모스'
    ) {
        return [acq.personalOutlet]
    }

    if (
        name === '무법자 브로디'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '택시 기사 브로디'
    ) {
        return [acq.box.specialChar1, acq.personalOutlet]
    }

    if (
        name === '작업반장 브로디'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '미케닉 브로디'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '콧수염 선생님 브로디'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '소방관 브로디'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '하와이안 브로디'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '사신 브로디'
    ) {
        return [acq.personalOutlet, acq.box.specialChar2]
    }

    if (
        name === '냉혈한 브로디'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '쿼터백 브로디'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '심해요원 브로디'
    ) {
        return [acq.box.plus]
    }

    if (
        name === '동화나라 티이라'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '선도부 티이라'
    ) {
        return [acq.box.specialChar1, acq.personalOutlet]
    }

    if (
        name === '캔디팝 티이라'
    ) {
        return [acq.box.itemChampion]
    }

    if (
        name === '오리진 티이라'
    ) {
        return [acq.pc, acq.personalOutlet]
    }

    if (
        name === '응원단장 티이라'
    ) {
        return [acq.rank.s1]
    }

    if (
        name === '청룡권 후계자 티이라'
    ) {
        return [acq.limited]
    }

    if (
        name === '매직 캐스트 티이라'
    ) {
        return [acq.limited]
    }

    if (
        name === '다크 히어로 네오'
    ) {
        return [acq.box.plus]
    }

    if (
        name === '스파르타 전사 네오'
    ) {
        return [acq.level.lv10.achieve]
    }

    if (
        name === '뱀파이어 네오'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice, acq.box.specialChar1]
    }

    if (
        name === '저항자 네오'
    ) {
        return [acq.limited, acq.personalOutlet, acq.box.specialChar2]
    }

    if (
        name === '핫소스 네오'
    ) {
        return [acq.box.itemChampion]
    }

    if (
        name === '스틸 네오'
    ) {
        return [acq.limited]
    }

    if (
        name === '소방관 렉스'
    ) {
        return [acq.box.plus]
    }

    if (
        name === '파워 포워드 렉스'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '보안요원 렉스'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '괴도 렉스'
    ) {
        return [acq.level.lv30.achieve]
    }

    if (
        name === '래빗홀 렉스'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '우주 전사 렉스'
    ) {
        return [acq.limited]
    }

    if (
        name === '해적 로두마니'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '캡틴 로두마니'
    ) {
        return [acq.box.plus]
    }

    if (
        name === '관광객 로두마니'
    ) {
        return [acq.racingPass.common]
    }

    if (
        name === '무법 파일럿 로두마니'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice, acq.box.specialChar2]
    }

    if (
        name === '오선지의 폭군 로두마니'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '우주 해적 로두마니'
    ) {
        return [acq.event.e9]
    }

    if (
        name === '해적단원 모비'
    ) {
        return [acq.event.e11]
    }

    if (
        name === '해적단원 모비'
    ) {
        return [acq.event.e11]
    }

    if (
        name === '조각 수박 모비'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice, acq.box.specialChar2]
    }

    if (
        name === '해적단원 투투'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '파인애플 투투'
    ) {
        return [acq.box.specialChar1, acq.personalOutlet]
    }

    if (
        name === '전설의 레이서 데릭'
    ) {
        return [acq.box.specialChar1, acq.personalOutlet]
    }

    if (
        name === '불꽃 레이서 데릭'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice, acq.box.specialChar2]
    }

    if (
        name === '래빗홀 데릭'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice, acq.box.specialChar2]
    }

    if (
        name === '분노의 레이서 데릭'
    ) {
        return [acq.event.e10]
    }

    if (
        name === '장학생 오리온'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '승부사 오리온'
    ) {
        return [acq.box.specialChar2, acq.personalOutlet]
    }

    if (
        name === '러닝백 오리온'
    ) {
        return [acq.level.lv2.mission]
    }

    if (
        name === '악마 사냥꾼 오리온'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '은하계 수호자 오리온'
    ) {
        return [acq.limited]
    }

    if (
        name === '드라큘라 백작 드라키'
    ) {
        return [acq.box.plus]
    }

    if (
        name === '레이싱 백작 드라키'
    ) {
        return [acq.racingPass.premium]
    }

    if (
        name === '밤의 군주 드라키'
    ) {
        return [acq.limited]
    }

    if (
        name === '마이애미 서퍼 마틴'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '정열의 장미 마틴'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '사교킹 마틴'
    ) {
        return [acq.racingPass.common]
    }

    if (
        name === '서핑 클럽 주장 마틴'
    ) {
        return [acq.event.e12]
    }

    if (
        name === '마이애미 댄서 레나'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice, acq.box.specialChar1]
    }

    if (
        name === '매혹의 장미 레나'
    ) {
        return [acq.box.plus]
    }

    if (
        name === '걸크러시 선배 레나'
    ) {
        return [acq.rank.s1]
    }

    if (
        name === '사교퀸 레나'
    ) {
        return [acq.racingPass.premium]
    }

    if (
        name === '괴도 크리스'
    ) {
        return [acq.pc, acq.personalOutlet]
    }

    if (
        name === '미케닉 꿈나무 크리스'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '스마트 크리스'
    ) {
        return [acq.box.plus]
    }

    if (
        name === '와일드 크리스'
    ) {
        return [acq.box.itemChampion]
    }

    if (
        name === '개근생 크리스'
    ) {
        return [acq.event.e3]
    }

    if (
        name === '뉴요커 크리스'
    ) {
        return [acq.box.plus]
    }

    if (
        name === '장미 해적단 크리스'
    ) {
        return [acq.box.itemChampion]
    }

    if (
        name === '얼음여왕 크리스'
    ) {
        return [acq.personalOutlet]
    }

    if (
        name === '옵티컬 크리스'
    ) {
        return [acq.event.e1]
    }

    if (
        name === '불량 개근생 크리스'
    ) {
        return [acq.limited]
    }

    if (
        name === '서부 아이리'
    ) {
        return [acq.mission]
    }

    if (
        name === '하이퍼 레이서 아이리'
    ) {
        return [acq.personalOutlet]
    }

    if (
        name === '오렌지 웨이브 아이리'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '미이라 아이리'
    ) {
        return [acq.box.itemChampion]
    }

    if (
        name === '과학 영재 아이리'
    ) {
        return [acq.racingPass.common]
    }

    if (
        name === '뉴욕 소피아'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '역병의사 소피아'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '인형의 집 소피아'
    ) {
        return [acq.box.itemChampion]
    }

    if (
        name === '유령의 신부 소피아'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice, acq.box.specialChar1, acq.box.specialChar2]
    }

    if (
        name === '이웃사랑 소녀 소피아'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '문어 공주 소피아'
    ) {
        return [acq.limited]
    }

    if (
        name === '모험가 브라이언'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice, acq.box.specialChar1]
    }

    if (
        name === '미케닉 프로 브라이언'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice, acq.box.specialChar2]
    }

    if (
        name === '특수요원 브라이언'
    ) {
        return [acq.box.itemChampion]
    }

    if (
        name === '요트 선장 브라이언'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '일꾼로봇 브라이언'
    ) {
        return [acq.limited]
    }

    if (
        name === '꼬불면 브라이언'
    ) {
        return [acq.rank.s2]
    }

    if (
        name === '문힐시티 지피시장'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '레이싱 스폰서 지피시장'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '기계인간 투탑'
    ) {
        return [acq.box.personalOutlet]
    }

    if (
        name === '블랙컴퍼니 수장 투탑'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '러블리 큐티 투탑'
    ) {
        return [acq.pc]
    }

    if (
        name === '우주 방위대 대장 투탑'
    ) {
        return [acq.limited]
    }

    if (
        name === '쌍둥이 동생 랍토르 L'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '여우 가면 랍토르 L'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '우주 방위대 랍토르 L'
    ) {
        return [acq.limited]
    }

    if (
        name === '쌍둥이 형 랍토르 R'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '늑대마스크 랍토르 R'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '노르테유 타키'
    ) {
        return [acq.limited, acq.pc]
    }

    if (
        name === '에일리언 타키'
    ) {
        return [acq.limited]
    }

    if (
        name === '우주공학 레이서 타키'
    ) {
        return [acq.racingPass.common]
    }

    if (
        name === '웨딩 타키' ||
        name === '웨딩 에리니' ||
        name === '지구인 친구 리바스키'
    ) {
        return [acq.limited]
    }

    if (
        name === '노르테유 에리니'
    ) {
        return [acq.limited]
    }

    if (
        name === '우주 전사 에리니' ||
        name === '밤하늘 별빛 레이서 에리니'
    ) {
        return [acq.racingPass.premium]
    }

    if (
        name === '노르테유 리바스키'
    ) {
        return [acq.racingPass.common, acq.limited]
    }

    if (
        name === '테니스 선수 레이브'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '하이틴 레이브'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice, acq.box.specialChar2]
    }

    if (
        name === '미케닉 스타 레이브'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '핫썸머 레이브'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '조거 퀸 레이브'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '레이싱 스타 레이브'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '눈나무 마을 비비'
    ) {
        return [acq.box.plus]
    }

    if (
        name === '눈꽃모험단 비비'
    ) {
        return [acq.personalOutlet]
    }

    if (
        name === '힙합걸 비비'
    ) {
        return [acq.pc, acq.box.specialChar1, acq.personalOutlet]
    }

    if (
        name === '체조 유망주 비비'
    ) {
        return [acq.pc]
    }

    if (
        name === '트러블메이퀸 비비'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '라이징 힙합걸 비비'
    ) {
        return [acq.limited]
    }

    if (
        name === '눈나무 마을 휘'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '아이돌 연습생 휘'
    ) {
        return [acq.box.plus]
    }

    if (
        name === '눈꽃모험단 휘'
    ) {
        return [acq.box.specialChar1, acq.personalOutlet]
    }

    if (
        name === '얼음왕자 휘'
    ) {
        return [acq.personalOutlet]
    }

    if (
        name === '동쪽의 수호자 휘'
    ) {
        return [acq.limited]
    }

    if (
        name === '트러블메이킹 휘'
    ) {
        return [acq.limited]
    }

    if (
        name === '눈나무 요정 휘'
    ) {
        return [acq.event.e8]
    }

    if (
        name === '소녀 미소'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '비치 파라다이스 미소'
    ) {
        return [acq.limited, acq.personalOutlet]
    }

    if (
        name === '래빗홀 미소'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '전학생 미소'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '래빗홀릭 레이서 미소'
    ) {
        return [acq.racingPass.premium]
    }

    if (
        name === '바리스타 미소'
    ) {
        return [acq.limited]
    }

    if (
        name === '우주 여행객 미소'
    ) {
        return [acq.limited, acq.pc]
    }

    if (
        name === '썸머 파라다이스 미소'
    ) {
        return [acq.rank.s2]
    }

    if (
        name === '안드로이드 토비'
    ) {
        return [acq.racingPass.common]
    }

    if (
        name === '양산형 토비'
    ) {
        return [acq.box.itemChampion]
    }

    if (
        name === '깡통로봇 토비'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '컵케이크 토비'
    ) {
        return [acq.box.specialChar1, acq.personalOutlet]
    }

    if (
        name === '캔디 레이서 토비'
    ) {
        return [acq.limited, acq.pc, acq.personalOutlet]
    }

    if (
        name === '블루베리 레이서 토비'
    ) {
        return [acq.box.char, acq.box.normal, acq.box.nice]
    }

    if (
        name === '호박 고양이 토비'
    ) {
        return [acq.box.premiumPlus]
    }

    if (
        name === '2023 KDL 레이서 토비'
    ) {
        return [acq.event.e2]
    }

    if (
        name === '외계 공학 토비'
    ) {
        return [acq.racingPass.premium]
    }

    if (
        name === '귀염둥이 꼬마유령'
    ) {
        return [acq.box.plus]
    }

    if (
        name === '호박등 꼬마유령'
    ) {
        return [acq.limited, acq.personalOutlet]
    }

    if (
        name === '전파 레이서 꼬마유령'
    ) {
        return [acq.limited, acq.pc]
    }

    if (
        name === '메이플 루시드' ||
        name === '메이플 핑크빈'
    ) {
        return [acq.limited]
    }

    if (
        name === 'BT21 KOYA' ||
        name === '꿀잠형 캠퍼 KOYA' ||
        name === '낮잠 특기생 KOYA' ||
        name === 'BT21 RJ' ||
        name === '먹방형 캠퍼 RJ' ||
        name === '요리 특기생 RJ' ||
        name === 'BT21 SHOOKY' ||
        name === '쪼꼬미 하이커 SHOOKY' ||
        name === '장난 특기생 SHOOKY' ||
        name === 'BT21 MANG' ||
        name === '스케이트보더형 캠퍼 MANG' ||
        name === '댄스 특기생 MANG' ||
        name === 'BT21 CHIMMY' ||
        name === '낭만 캠퍼 CHIMMY' ||
        name === '하모니카 특기생 CHIMMY' ||
        name === 'BT21 TATA' ||
        name === '호기심 캠퍼 TATA' ||
        name === '초능력 특기생 TATA' ||
        name === 'BT21 COOKY' ||
        name === '에너지 넘치는 캠퍼 COOKY' ||
        name === '운동 특기생 COOKY'
    ) {
        return [acq.collab.bt21]
    }

    if (
        name === 'Shut Down 지수' ||
        name === 'BORN PINK 지수' ||
        name === 'BORN PINK (Black ver.) 지수' ||
        name === 'Shut Down 제니' ||
        name === 'BORN PINK 제니' ||
        name === 'BORN PINK (Black ver.) 제니' ||
        name === 'Shut Down 로제' ||
        name === 'BORN PINK 로제' ||
        name === 'BORN PINK (Black ver.) 로제' ||
        name === 'Shut Down 리사' ||
        name === 'BORN PINK 리사' ||
        name === 'BORN PINK (Black ver.) 리사' 
    ) {
        return [acq.collab.blackpink]
    }

    return ['추가 예정'];
}