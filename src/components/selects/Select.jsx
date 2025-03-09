'use client';

import * as Selectstyled from 'style/common/Select.style';
import SCarrowDown from 'svg/ico-select-arrow-down.svg';
import useSelect from 'hooks/useSelect';
import useClickOutside from 'hooks/useClickOutside';
import { channels, sites } from 'data/select';
import { useEffect, useState } from 'react';
import { youtubeId } from 'const';
import { engineArray, modeArray, encyInitArray } from 'data/karts';

export default function Select({ width, height, selectKey, setSelectKey, initKey, data }) {
	const [toggle, setToggle, selectedValue, setSelectedValue, handleSelectClick, handleToggleSelect] =
		useSelect(initKey);
	let [randomChannelIndex, setRandomChannelIndex] = useState(undefined);

	const selectClose = () => {
		setToggle(false);
	};

	const ref = useClickOutside(selectClose);

	const handleSelectKey = index => {
		let newKey;

		if (data === 'channels') {
			if (index === 0) newKey = youtubeId.한상현;
			if (index === 1) newKey = youtubeId.아라양;
			if (index === 2) newKey = youtubeId.정너굴;
			if (index === 3) newKey = youtubeId.카트라이더드리프트;

			setSelectKey(newKey);

			return undefined;
		}

		if (data === 'engine') {
			if (index === 0) newKey = 'A2';
			if (index === 1) newKey = 'N1';

			console.log(data);
			console.log(newKey);

			setSelectedValue(newKey);
			setSelectKey(newKey);

			return undefined;
		}

		if (data === 'mode') {
			newKey = index === 0 ? '아이템' : '스피드';

			setSelectedValue(newKey);
			setSelectKey(newKey);
		}
	};

	const handleSelectPosTop = () => {
		if (data === 'sites') return '-153px';
		if (['channels', 'engine', 'mode'].includes(data)) return '40px';
		return null;
	};

	const renderData = () => {
		if (data === 'channels') return channels;
		if (data === 'engine') return engineArray;
		if (data === 'mode') return modeArray;
		return undefined;
	};

	const selectData = renderData();

	const renderSelectList = () => {
		if (data === 'sites') {
			return sites.map((siteItem, index) => {
				return (
					<Selectstyled.OptionItem key={index}>
						<Selectstyled.OptionText as="a" href={siteItem.link} target="_blank">
							<span>{siteItem.name}</span>
							<span className="hidden">새창열림</span>
						</Selectstyled.OptionText>
					</Selectstyled.OptionItem>
				);
			});
		}

		if (['channels', 'engine', 'mode'].includes(data)) {
			return selectData?.map((item, index) => (
				<Selectstyled.OptionItem key={index}>
					<Selectstyled.OptionText
						as="button"
						type="button"
						onClick={() => {
							handleSelectClick();
							handleSelectKey(index);
						}}
					>
						{item}
					</Selectstyled.OptionText>
				</Selectstyled.OptionItem>
			));
		}

		return null;
	};

	useEffect(() => {
		if (data === 'channels') {
			if (selectKey === youtubeId.한상현) setRandomChannelIndex(0);
			if (selectKey === youtubeId.아라양) setRandomChannelIndex(1);
			if (selectKey === youtubeId.정너굴) setRandomChannelIndex(2);
			if (selectKey === youtubeId.카트라이더드리프트) setRandomChannelIndex(3);
		}
	}, [selectKey]);

	// console.log(selectedValue);

	const renderSelectText = () => {
		if (data === 'sites') return '관련 사이트';
		if (data === 'channels') return channels[randomChannelIndex];

		// 카트바디 도감 처음 진입 시 셀렉트 초기값 설정
		if (data === 'engine') return selectedValue === encyInitArray ? encyInitArray[0] : selectedValue;
		if (data === 'mode') return selectedValue === encyInitArray ? encyInitArray[1] : selectedValue;

		return null;
	};

	// console.log(selectKey);
	// console.log(selectedValue);

	return (
		<Selectstyled.SelectArea ref={ref} width={width}>
			<Selectstyled.Select width={width} height={height} onClick={handleToggleSelect} aria-expanded={toggle}>
				<Selectstyled.SelectTxt>{renderSelectText()}</Selectstyled.SelectTxt>
				<SCarrowDown width="24px" height="24px" />
			</Selectstyled.Select>

			<Selectstyled.OptionList className="scY" top={handleSelectPosTop()} maxHeight="150px" show={toggle}>
				{renderSelectList()}
			</Selectstyled.OptionList>
		</Selectstyled.SelectArea>
	);
}
