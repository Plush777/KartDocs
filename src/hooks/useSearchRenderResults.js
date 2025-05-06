import SearchResult from "components/search/SearchResult";

export default function useSearchRenderResults(commonProps, dataPropsType) {
    return <SearchResult commonProps={commonProps} dataProps={dataPropsType} />
}