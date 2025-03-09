export const tabArray = ['일반', '고급', '희귀', '영웅', '전설'];

export const statArray = ['부스터 가속', '드리프트 가속', '부스터 시간', '부스터 충전량'];

export const engineArray = ['A2', 'N1'];

export const modeArray = ['아이템', '스피드'];

// 카트바디 도감 처음 진입 시 셀렉트 초기값
export const encyInitArray = ['엔진 선택', '유형 선택'];

export const backgroundCondition = type => {
	switch (type) {
		case '일반':
			return 'gray';
		case '고급':
			return 'green';
		case '희귀':
			return 'blue';
		case '영웅':
			return 'purple';
		case '전설':
			return 'orange';
		case '밸런스형':
			return 'green';
		case '속도형':
			return 'blue';
		case '드리프트형':
			return 'red';
		default:
			return 'gray';
	}
};

export const kartImageSrcCondition = (itemEngine, itemName) => {
	if (itemEngine === 'A2') {
		return `/images/karts/A2/${itemName}.webp`;
	}

	if (itemEngine === 'N1') {
		return `/images/karts/N1/${itemName}.webp`;
	}

	return null;
};

export const characterImageSrcCondition = (itemCharacter, itemName) => {
	const prefix = '/images/costume';

	if (itemCharacter.includes('디지니')) {
		return `${prefix}/diz/${itemName}.webp`;
	}

	if (itemCharacter.includes('아이리')) {
		return `${prefix}/airi/${itemName}.webp`;
	}

	if (itemCharacter.includes('배찌')) {
		return `${prefix}/bazzi/${itemName}.webp`;
	}

	if (itemCharacter.includes('브라이언')) {
		return `${prefix}/brian/${itemName}.webp`;
	}

	if (itemCharacter.includes('브로디')) {
		return `${prefix}/brodi/${itemName}.webp`;
	}

	if (itemCharacter.includes('CHIMMY')) {
		return `${prefix}/CHIMMY/${itemName}.webp`;
	}

	if (itemCharacter.includes('COOKY')) {
		return `${prefix}/COOKY/${itemName}.webp`;
	}

	if (itemCharacter.includes('다오')) {
		return `${prefix}/dao/${itemName}.webp`;
	}

	if (itemCharacter.includes('데릭')) {
		return `${prefix}/derek/${itemName}.webp`;
	}

	if (itemCharacter.includes('드라키')) {
		return `${prefix}/draki/${itemName}.webp`;
	}

	if (itemCharacter.includes('에리니')) {
		return `${prefix}/erini/${itemName}.webp`;
	}

	if (itemCharacter.includes('에띠')) {
		return `${prefix}/ethen/${itemName}.webp`;
	}

	if (itemCharacter.includes('제니')) {
		return `${prefix}/jennie/${itemName}.webp`;
	}

	if (itemCharacter.includes('지수')) {
		return `${prefix}/jisu/${itemName}.webp`;
	}

	if (itemCharacter.includes('케피')) {
		return `${prefix}/keffy/${itemName}.webp`;
	}

	if (itemCharacter.includes('KOYA')) {
		return `${prefix}/KOYA/${itemName}.webp`;
	}

	if (itemCharacter.includes('크리스')) {
		return `${prefix}/kris/${itemName}.webp`;
	}

	if (itemCharacter.includes('리사')) {
		return `${prefix}/lisa/${itemName}.webp`;
	}

	if (itemCharacter.includes('로두마니')) {
		return `${prefix}/lodumani/${itemName}.webp`;
	}

	if (itemCharacter.includes('루시드')) {
		return `${prefix}/lucid/${itemName}.webp`;
	}

	if (itemCharacter.includes('MANG')) {
		return `${prefix}/MANG/${itemName}.webp`;
	}

	if (itemCharacter.includes('마리드')) {
		return `${prefix}/marid/${itemName}.webp`;
	}

	if (itemCharacter.includes('마틴')) {
		return `${prefix}/martin/${itemName}.webp`;
	}

	if (itemCharacter.includes('지피')) {
		return `${prefix}/mayorzipi/${itemName}.webp`;
	}

	if (itemCharacter.includes('미소')) {
		return `${prefix}/miso/${itemName}.webp`;
	}

	if (itemCharacter.includes('모비')) {
		return `${prefix}/mobi/${itemName}.webp`;
	}

	if (itemCharacter.includes('모스')) {
		return `${prefix}/mos/${itemName}.webp`;
	}

	if (itemCharacter.includes('네오')) {
		return `${prefix}/neo/${itemName}.webp`;
	}

	if (itemCharacter.includes('오리온')) {
		return `${prefix}/orion/${itemName}.webp`;
	}

	if (itemCharacter.includes('휘')) {
		return `${prefix}/pim/${itemName}.webp`;
	}

	if (itemCharacter.includes('핑크빈')) {
		return `${prefix}/pinkbean/${itemName}.webp`;
	}

	if (itemCharacter.includes('첸첸')) {
		return `${prefix}/qianqian/${itemName}.webp`;
	}

	if (itemCharacter.includes('랍토르L')) {
		return `${prefix}/raptorL/${itemName}.webp`;
	}

	if (itemCharacter.includes('랍토르R')) {
		return `${prefix}/raptorR/${itemName}.webp`;
	}

	if (itemCharacter.includes('레이브')) {
		return `${prefix}/rave/${itemName}.webp`;
	}

	if (itemCharacter.includes('레나')) {
		return `${prefix}/rena/${itemName}.webp`;
	}

	if (itemCharacter.includes('렉스')) {
		return `${prefix}/rex/${itemName}.webp`;
	}

	if (itemCharacter.includes('리바스키')) {
		return `${prefix}/rivaski/${itemName}.webp`;
	}

	if (itemCharacter.includes('RJ')) {
		return `${prefix}/RJ/${itemName}.webp`;
	}

	if (itemCharacter.includes('로제')) {
		return `${prefix}/rose/${itemName}.webp`;
	}

	if (itemCharacter.includes('SHOOKY')) {
		return `${prefix}/SHOOKY/${itemName}.webp`;
	}

	if (itemCharacter.includes('소피아')) {
		return `${prefix}/sophia/${itemName}.webp`;
	}

	if (itemCharacter.includes('꼬마유령')) {
		return `${prefix}/spiritkid/${itemName}.webp`;
	}

	if (itemCharacter.includes('타키')) {
		return `${prefix}/taki/${itemName}.webp`;
	}

	if (itemCharacter.includes('TATA')) {
		return `${prefix}/TATA/${itemName}.webp`;
	}

	if (itemCharacter.includes('티이라')) {
		return `${prefix}/tiera/${itemName}.webp`;
	}

	if (itemCharacter.includes('토비')) {
		return `${prefix}/tobi/${itemName}.webp`;
	}

	if (itemCharacter.includes('투투')) {
		return `${prefix}/toto/${itemName}.webp`;
	}

	if (itemCharacter.includes('우니')) {
		return `${prefix}/uni/${itemName}.webp`;
	}

	if (itemCharacter.includes('투탑')) {
		return `${prefix}/viktor/${itemName}.webp`;
	}

	if (itemCharacter.includes('비비')) {
		return `${prefix}/vivi/${itemName}.webp`;
	}

	if (itemCharacter.includes('더스트')) {
		return `${prefix}/dust/${itemName}.webp`;
	}

	if (itemCharacter.includes('러비')) {
		return `${prefix}/lovey/${itemName}.webp`;
	}

	if (itemCharacter.includes('타냐')) {
		return `${prefix}/tanya/${itemName}.webp`;
	}

	return null;
};
