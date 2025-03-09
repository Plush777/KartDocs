'use client';

import { useEffect, useState } from 'react';
import { itemScore, speedScore, mode, findNextMp, renderItemIcon, renderSpeedIcon } from 'data/season';
import ToggleSelector from 'components/selects/ToggleSelector';
import MainTitle from 'components/title/MainTitle';
import { mainTitle } from 'const';
import * as S from 'style/components/main/SeasonCalculator.style';

export default function SeasonCalculator() {
	const [currentMp, setCurrentMp] = useState('');
	const [mpData, setMpData] = useState(itemScore);
	const [imageSrc, setImageSrc] = useState('');

	const koRegexp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/;
	const enRegexp = /[a-zA-Z]/;
	const specialRegexp = /[`!@#$%^&*()_+\-=[\]{};':"\\|.<>/?~]/;

	const handleChange = event => {
		const regexpCondition =
			koRegexp.test(event.target.value) || enRegexp.test(event.target.value) || specialRegexp.test(event.target.value);

		if (regexpCondition) {
			alert('숫자만 입력할 수 있습니다');
			setCurrentMp('');
			return;
		}

		const removedComma = Number(event.target.value.replaceAll(',', ''));
		setCurrentMp(removedComma);
	};

	const handleClick = index => {
		if (index === 0) {
			setMpData(itemScore);
		} else if (index === 1) {
			setMpData(speedScore);
		}

		if (currentMp !== 0) {
			setCurrentMp('');
		}
	};

	/* 인풋 값 콤마때문에 보여줄 때만 문자열로 타입변경 */
	const stringCurrent = currentMp.toLocaleString();

	useEffect(() => {
		if (mpData === itemScore) {
			setImageSrc(renderItemIcon(currentMp));
		} else if (mpData === speedScore) {
			setImageSrc(renderSpeedIcon(currentMp));
		}
	}, [currentMp, mpData]);

	return (
		<S.Wrap>
			<MainTitle title={mainTitle.calculator} />

			<S.Inner>
				<S.Input
					type="text"
					id="input01"
					placeholder="현재 점수를 입력하세요"
					value={stringCurrent}
					onChange={handleChange}
					maxLength={7}
				/>
				<ToggleSelector data={mode} clickFn={handleClick} itemScore={itemScore} speedScore={speedScore} />
			</S.Inner>

			<S.Result>
				<S.ResultBox>
					<S.Icon backgroundPosition={imageSrc}>
						<span className="hidden"></span>
					</S.Icon>
					<S.ResultText>{findNextMp(mpData, currentMp)}</S.ResultText>
				</S.ResultBox>
			</S.Result>
		</S.Wrap>
	);
}
