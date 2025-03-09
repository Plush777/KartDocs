import * as S from 'style/components/sub/common/Sidebar.style';
import SearchItem from 'components/search/SearchItem';
import useSearch from 'hooks/useSearch';
import Result from 'components/encyclopedia/Result';

export default function Sidebar({ wrapClassName, dimmedClassName, data, children, sidebarRef }) {
	const { value, results, focused, handleFocus, handleBlur, handleValueChange, handleValueRemove } = useSearch(data);

	console.log(data);

	const commonProps = {
		value: value,
		dataType: 'sidebar',
	};

	return (
		<>
			<S.Wrap ref={sidebarRef} className={wrapClassName}>
				<S.Top>
					<SearchItem
						value={value}
						focused={focused}
						onFocusFn={handleFocus}
						onBlurFn={handleBlur}
						onChangeFn={handleValueChange}
						removeFn={handleValueRemove}
						placeholder={'어떤 걸 찾고 계세요?'}
						inputId={'s01'}
					></SearchItem>
					{children}
				</S.Top>
				<S.Inner>
					<S.GroupContainer>
						<Result commonProps={commonProps} result={value.length > 0 ? results : data} />
					</S.GroupContainer>
				</S.Inner>
			</S.Wrap>
			<S.Dimmed aria-hidden="true" className={dimmedClassName} />
		</>
	);
}
