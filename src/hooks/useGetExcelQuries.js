import { useQuery } from '@tanstack/react-query';
import { fetchExcelData } from 'utils/excelReader';

export function useGetExcelQuries() {
	const file1Query = useQuery({
		queryKey: ['excel', 'file1'],
		staleTime: Infinity,
		queryFn: () => fetchExcelData('/data/xlsx/kartdocs_카트바디도감_a2.xlsx'),
	});

	const file2Query = useQuery({
		queryKey: ['excel', 'file2'],
		staleTime: Infinity,
		queryFn: () => fetchExcelData('/data/xlsx/kartdocs_카트바디도감_n1.xlsx'),
	});

	const file3Query = useQuery({
		queryKey: ['excel', 'file3'],
		staleTime: Infinity,
		queryFn: () => fetchExcelData('/data/xlsx/kartdocs_캐릭터도감.xlsx'),
	});

	return {
		kart_a2: {
			data: file1Query.data,
			isLoading: file1Query.isLoading,
			isError: file1Query.isError,
			isFetched: file1Query.isFetched,
		},
		kart_n1: {
			data: file2Query.data,
			isLoading: file2Query.isLoading,
			isError: file2Query.isError,
			isFetched: file2Query.isFetched,
		},
		character: {
			data: file3Query.data,
			isLoading: file3Query.isLoading,
			isError: file3Query.isError,
			isFetched: file3Query.isFetched,
		},
	};
}
