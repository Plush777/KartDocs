import * as XLSX from 'xlsx';

export async function fetchExcelData(filePath) {
	try {
		const response = await fetch(filePath);
		const arrayBuffer = await response.arrayBuffer();
		const workbook = XLSX.read(arrayBuffer);
		const worksheet = workbook.Sheets[workbook.SheetNames[0]];

		const jsonData = XLSX.utils.sheet_to_json(worksheet);

		const transformedData = jsonData.map(item => {
			const oldKey = '기본 튜닝 수치\r\n(부스터 가속 / 드리프트 가속 / 부스터 시간 / 부스터 충전량)';
			const newItem = {};

			// 모든 키에 대해 공백 제거하고 새 객체에 할당
			Object.entries(item).forEach(([key, value]) => {
				// oldKey인 경우 '기본튜닝수치'로, 그 외는 공백 제거
				const newKey = key === oldKey ? '기본튜닝수치' : key.replace(/\s+/g, '');

				newItem[newKey] = value;
			});

			return newItem;
		});

		// console.log(transformedData);

		return transformedData;
	} catch (error) {
		console.error('Excel 파일을 불러오는데 실패했습니다:', error);
		throw error;
	}
}
