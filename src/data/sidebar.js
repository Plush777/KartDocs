export function filterData(dataArray, searchValue) {
	if (!Array.isArray(dataArray) || !searchValue || searchValue.trim() === '') {
		return [];
	}

	return dataArray.filter(item => item?.아이템명?.toLowerCase().includes(searchValue.toLowerCase()) || false);
}

export const sidebarfilterData = (dataObject, query) => {
	// 기본 유효성 검사
	if (!query || !dataObject || !dataObject.data) {
		return [];
	}

	const { data, type: dataType } = dataObject;
	const lowerCaseQuery = query.toLowerCase();

	// list 타입이 아닌 경우의 처리
	if (dataType === undefined || dataType !== 'list') {
		const filterItems = items => {
			// items가 배열이 아니거나 비어있는 경우 처리
			if (!Array.isArray(items) || items.length === 0) {
				return [];
			}

			return items.filter(item => {
				// item이 null이거나 undefined인 경우 처리
				if (!item) return false;

				const titleMatch = item.title?.toLowerCase().includes(lowerCaseQuery) || false;
				const hasDepth2Match = item.depth2 && Array.isArray(item.depth2) && filterItems(item.depth2).length > 0;

				return titleMatch || hasDepth2Match;
			});
		};

		// data가 배열이 아닌 경우 처리
		if (!Array.isArray(data)) {
			return [];
		}

		return data
			.map(section => {
				// section이 null이거나 undefined인 경우 처리
				if (!section) return null;

				const filteredDepth1 = filterItems(section.depth1 || []);
				const sectionTitleMatch = section.sectionTitle?.toLowerCase().includes(lowerCaseQuery) || false;

				return {
					...section,
					depth1: sectionTitleMatch ? section.depth1 || [] : filteredDepth1,
				};
			})
			.filter(section => {
				// section이 null이거나 undefined인 경우 제외
				if (!section) return false;

				const sectionTitleMatch = section.sectionTitle?.toLowerCase().includes(lowerCaseQuery) || false;
				return sectionTitleMatch || (Array.isArray(section.depth1) && section.depth1.length > 0);
			});
	}

	return []; // list 타입인 경우 빈 배열 반환
};
