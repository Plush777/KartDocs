import * as S from 'style/components/sidebar/SearchItem.style';
import SCsearch from 'svg/ico-search.svg';
import SCclose from 'svg/ico-close.svg';

export default function SearchItem({
	focused,
	value,
	inputId,
	placeholder,
	inputStyleClassName,
	inputDisabled,
	onFocusFn,
	onBlurFn,
	onChangeFn,
	removeFn,
	styleProps,
}) {
	return (
		<S.SearchWrap styleProps={styleProps}>
			<S.SearchContainer>
				<S.SearchWrapInner className={focused ? 'active' : ''}>
					<S.SearchInput
						className={`${inputStyleClassName} ${!value.length > 0 && 'active'}`}
						disabled={inputDisabled}
						type="search"
						id={inputId}
						placeholder={placeholder}
						onFocus={onFocusFn}
						onBlur={onBlurFn}
						onChange={onChangeFn}
						value={value}
						autoComplete="off"
						spellCheck="false"
					/>
					<S.SearchLabel htmlFor={inputId}>
						<SCsearch width="20px" height="20px" />
					</S.SearchLabel>
					<S.RemoveButton className={value.length > 0 && 'active'} onClick={removeFn}>
						<SCclose width="16px" height="16px" />
						<span className="hidden">검색어 지우기</span>
					</S.RemoveButton>
				</S.SearchWrapInner>
			</S.SearchContainer>
		</S.SearchWrap>
	);
}
