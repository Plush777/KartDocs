'use client';

import { useEffect, useState } from 'react';

import Tab from 'components/tabs/Tab';
import Container from 'components/sub/grid/Container';
import NoMatch from 'components/search/NoMatch';
import Select from 'components/selects/Select';
import Grid from 'components/encyclopedia/Grid';
import Result from 'components/encyclopedia/Result';
import SearchItem from 'components/search/SearchItem';
import GridSkeleton from 'components/skeleton/Grid';

import useSearch from 'hooks/useSearch';
import useTab from 'hooks/useTab';
import { useGetExcelQuries } from 'hooks/useGetExcelQuries';

import * as G from 'style/components/sub/encyclopedia/Grid.style';

import { tabArray, engineArray, modeArray, encyInitArray } from 'data/karts';

export default function GridWrapper({ type }) {
	const [containerActive, setContainerActive] = useState('');
	let [engineKey, setEngineKey] = useState(engineArray);
	let [modeKey, setModeKey] = useState(modeArray);
	const [selectedData, setSelectedData] = useState([]); //엔진 or 유형 선택 시 저장되는 state

	const { kart_a2, kart_n1, character } = useGetExcelQuries();

	function resultTypeCondition(value) {
		if (value === 'data') return selectedData;

		if (value === 'tab') {
			if (type === 'karts') return 3;
			if (type === 'characters') return 4;

			return null;
		}

		return null;
	}

	const { tabIndex, setTabIndex, clicked, setClicked, loadData } = useTab(resultTypeCondition('data'));

	const {
		value,
		setValue,
		results,
		setResults,
		focused,
		handleFocus,
		handleBlur,
		handleValueChange,
		handleValueRemove,
	} = useSearch(resultTypeCondition('data'), type, loadData);

	const dataProps = {
		ency: {
			loopData: resultTypeCondition('data'),
		},
		search: {
			loopData: results,
		},
	};

	const queryObjectCondition = () => {
		if (type === 'karts') {
			return {
				data: kart_a2.data,
				isLoading: kart_a2.isLoading,
				isError: kart_a2.isError,
				isFetched: kart_a2.isFetched,
			};
		} else if (type === 'characters') {
			return {
				data: character.data,
				isLoading: character.isLoading,
				isError: character.isError,
				isFetched: character.isFetched,
			};
		}
	};

	const queryObject = queryObjectCondition();
	const queryObjectIsLoading = queryObject.isLoading;

	const commonProps = {
		dataType: 'list',
	};

	function placeholderCondition(props) {
		if (props === 'karts') return '카트바디';
		if (props === 'characters') return '캐릭터';

		return null;
	}

	function getTabFilteredData() {
		if (!dataProps.ency.loopData) return [];

		// 1. 먼저 등급에 따라 필터링
		let filtered = dataProps.ency.loopData.filter(item => item?.등급 === loadData) || [];

		// 2. 검색어가 있으면 검색어로 한번 더 필터링
		if (value.length > 0) {
			filtered = filtered.filter(item => item.아이템명.toLowerCase().includes(value.toLowerCase()));
		}

		return filtered;
	}

	const tabFilteredData = getTabFilteredData();

	useEffect(() => {
		queryObjectIsLoading ? setContainerActive('500px') : setContainerActive('auto');
		console.log(containerActive);
	}, [queryObject.data, tabIndex]);

	useEffect(() => {
		if (type === 'karts' && kart_a2.isFetched && kart_a2.data.length > 0) {
			setSelectedData(kart_a2.data);
		} else if (type === 'characters' && character.isFetched && character.data.length > 0) {
			setSelectedData(character.data);
		}
	}, [type, kart_a2.isFetched, character.isFetched, kart_a2.data, character.data]);

	//탭 넘기면 검색값과 셀렉트 값 초기화
	useEffect(() => {
		setValue('');
		setResults([]);
	}, [tabIndex]);

	useEffect(() => {
		if (type === 'karts') {
			let filteredData = [];

			if (kart_a2.isFetched && engineKey.includes('A2') && kart_a2.data.length > 0) {
				filteredData = [...kart_a2.data];
			} else if (kart_n1.isFetched && engineKey.includes('N1') && kart_n1.data.length > 0) {
				filteredData = [...filteredData, ...kart_n1.data]; // 기존 데이터 유지하면서 추가
			}

			// 🔹 모드 필터링
			filteredData = filteredData.filter(item => {
				if (modeKey.includes('아이템') && item.모드구분 === '아이템') return true;
				if (modeKey.includes('스피드') && item.모드구분 === '스피드') return true;
				return false;
			});

			setSelectedData(filteredData);
		}
	}, [engineKey, modeKey, kart_a2.isFetched, kart_n1.isFetched, kart_a2.data, kart_n1.data]);

	const noMatchClicked =
		(selectedData && value.length > 0) || (!selectedData && results.length === 0 && !clicked.includes(true));

	const sidebarResult = value.length > 0 ? dataProps.search : dataProps.ency;

	function result() {
		if (queryObject.isFetched) {
			if (commonProps?.dataType === 'sidebar') {
				return <Result result={sidebarResult} />;
			} else if (commonProps?.dataType === 'list') {
				return <Grid data={tabFilteredData} />;
			}
		}
	}

	useEffect(() => {
		console.log('📌 [selectedData 업데이트됨]:', selectedData);
	}, [selectedData]);

	return (
		<div className="reset">
			<Container displayProp="flex" alignItems="flex-start" flexDirection="column">
				<Tab
					value={value}
					type="ency"
					tabIndex={tabIndex}
					setTabIndex={setTabIndex}
					clicked={clicked}
					setClicked={setClicked}
					data={tabArray}
					marginBottom="15px"
					disabledIndex={resultTypeCondition('tab')}
					styleProps="ency"
					indicator={true}
				/>

				<G.SearchBox>
					{type === 'karts' && (
						<>
							<Select
								data="engine"
								initKey={encyInitArray}
								selectKey={engineKey}
								setSelectKey={setEngineKey}
								width="120px"
								height="36px"
							/>
							<Select
								data="mode"
								initKey={encyInitArray}
								selectKey={modeKey}
								setSelectKey={setModeKey}
								width="120px"
								height="36px"
							/>
						</>
					)}

					<SearchItem
						inputDisabled={queryObjectIsLoading ? true : false}
						value={value}
						focused={focused}
						onFocusFn={handleFocus}
						onBlurFn={handleBlur}
						onChangeFn={handleValueChange}
						removeFn={handleValueRemove}
						placeholder={`찾고싶은 ${placeholderCondition(type)}를 검색해보세요!`}
						inputId={'s02'}
						styleProps="ency"
						inputStyleClassName="encyInput"
					/>
				</G.SearchBox>
			</Container>

			<Container minHeight={containerActive} styleProp={queryObjectIsLoading ? 'grid' : ''}>
				{queryObjectIsLoading && Array.from({ length: 10 }, (_, i) => <GridSkeleton key={i} />)}
				{noMatchClicked && <NoMatch styleProp="grid" text={'이런, 조건에 맞는 항목이 없네요!'} />}

				{result()}
			</Container>
		</div>
	);
}
