'use client';

import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { settingToggleAtom } from 'recoil/common/settingToggleState';
import Settings from 'components/setting/Settings';
import HeaderLeft from './HeaderLeft';
import HeaderRight from 'components/header/HeaderRight';
import MobileHeaderMenu from 'components/mobile/Header/MobileHeaderMenu';

export default function HeaderItems({ myTheme, setMyTheme }) {
	const [settingToggleState, setSettingToggleState] = useRecoilState(settingToggleAtom);

	const handleSettingButton = () => {
		setSettingToggleState(prev => !prev);
	};

	const [menuToggle, setMenuToggle] = useState(false);

	return (
		<>
			<HeaderLeft myTheme={myTheme} setMenuToggle={setMenuToggle} />
			<HeaderRight handleSettingButton={handleSettingButton} />
			{settingToggleState && <Settings setMyTheme={setMyTheme} />}

			<MobileHeaderMenu menuToggle={menuToggle} handleSettingButton={handleSettingButton} />
		</>
	);
}
