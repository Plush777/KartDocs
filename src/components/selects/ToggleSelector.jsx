import { useState } from 'react';
import useClickOutside from 'hooks/useClickOutside';
import * as T from 'style/common/ToggleSelector.style';

export default function ToggleSelector({ data, clickFn, name }) {
	const [active, setActive] = useState(0);
	const [toggle, setToggle] = useState(false);

	const handleActive = index => setActive(index);
	const handleToggle = () => setToggle(!toggle);
	const handleClose = () => setToggle(false);

	const ref = useClickOutside(handleClose);

	return (
		<T.SelectWrap name={name} ref={ref}>
			<T.SelectButton onClick={handleToggle}>설정</T.SelectButton>
			<T.SelectList className={toggle && 'active'}>
				{data?.map((item, index) => {
					const isLast = index === data.length - 1;
					const clickActive = !isLast && active === index ? 'active' : '';

					return (
						<T.SelectItem key={index}>
							<T.SelectItemButton
								type={isLast ? null : 'button'}
								onClick={() => {
									clickFn(index);
									!isLast && handleActive(index);
									handleClose();
								}}
								className={`${clickActive} ${isLast ? 'openInNew' : ''}`}
								as={isLast ? 'a' : 'button'}
								target={isLast ? '_blank' : null}
							>
								{item}
							</T.SelectItemButton>
						</T.SelectItem>
					);
				})}
			</T.SelectList>
		</T.SelectWrap>
	);
}
