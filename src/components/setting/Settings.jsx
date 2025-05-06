'use client';

import * as H from 'style/layout/Header.style';
import * as B from 'style/common/Button.style';
import * as Set from 'style/components/header/Setting.style';
import SCclose from 'svg/ico-close.svg';
import { M768 } from 'components/config/MediaQuery';
import useBodyScrollLock from 'hooks/useBodyScrollLock';
import useClickOutside from 'hooks/useClickOutside';
import { fontSizeArray, themeArray, activeCondition, renderText } from 'data/setting';
import { useSetRecoilState } from 'recoil';
import { settingToggleAtom } from 'recoil/common/settingToggleState';
import { useState } from 'react';

export default function Settings({ setMyTheme }) {
  const setSettingToggleState = useSetRecoilState(settingToggleAtom);
  const { openScroll } = useBodyScrollLock();

  const settingClose = () => {
    setSettingToggleState(false);

    if (window.matchMedia('(max-width: 768px)').matches) {
      openScroll();
    }
  };

  const ref = useClickOutside(settingClose);

  const settingObject = [
    {
      title: '글자 크기 설정',
      array: fontSizeArray,
      getSettingValue: localStorage.getItem('fontSize'),
      handleGlobal: function (index) {
        const myFontSize = fontSizeArray[index];

        localStorage.setItem('fontSize', myFontSize);
        document.documentElement.classList.add(myFontSize);

        fontSizeArray.forEach(item => {
          if (item !== myFontSize) {
            document.documentElement.classList.remove(item);
          }
        });
        document.cookie = `fontSize=${myFontSize}; path=/;`; // SSR
      },
    },
    {
      title: '테마 설정',
      array: themeArray,
      getSettingValue: localStorage.getItem('theme'),
      handleGlobal: function (index) {
        const myTheme = themeArray[index];

        localStorage.setItem('theme', myTheme);
        setMyTheme(myTheme);
        document.documentElement.style.colorScheme = myTheme === 'light' ? 'light' : 'dark';
        document.body.dataset.theme = myTheme;
        document.body.style.backgroundColor = myTheme === 'light' ? '#fff' : '#121212';
        document.cookie = `theme=${myTheme}; path=/;`; // SSR
      },
    },
  ];

  let totalLength = 0;

  settingObject.forEach(setting => {
    totalLength += setting.array.length;
  });

  const [isActive, setIsActive] = useState(Array(totalLength).fill(''));

  const handleActive = index => {
    setIsActive([index]);
  };

  return (
    <>
      <H.DimmedWrap>
        <Set.SettingWrap ref={ref}>
          <Set.SettingList>
            {settingObject.map((settingItem, settingIndex) => {
              return (
                <Set.SettingItem key={settingIndex}>
                  <Set.SettingTitle>{settingItem.title}</Set.SettingTitle>
                  {settingItem.title === '글자 크기 설정' && (
                    <M768>
                      <button
                        type="button"
                        className="btnClose"
                        onClick={() => {
                          settingClose();
                          openScroll();
                        }}
                      >
                        <SCclose width="22px" height="22px" fill="#000" />
                      </button>
                    </M768>
                  )}
                  <Set.SettingButtonList>
                    {settingItem.array.map((listItem, listIndex) => {
                      return (
                        <B.BtnSetting
                          key={listIndex}
                          onClick={() => {
                            settingItem.handleGlobal(listIndex);
                            handleActive(listIndex);
                          }}
                          className={`${activeCondition(settingItem.getSettingValue, listItem)}`}
                        >
                          {renderText(listItem)}
                        </B.BtnSetting>
                      );
                    })}
                  </Set.SettingButtonList>
                </Set.SettingItem>
              );
            })}
          </Set.SettingList>
        </Set.SettingWrap>
      </H.DimmedWrap>

      <M768>
        <div aria-hidden="true" id="modalDimmed"></div>
      </M768>
    </>
  );
}
