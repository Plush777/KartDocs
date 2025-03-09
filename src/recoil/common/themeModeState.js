import { atom } from 'recoil';

// const asyncThemeEffect = () => {
//   ({ setSelf, onSet }) => {
//     setSelf(() => {
//       if (getCookieValue('dark') === 'dark') {
//         return 'dark';
//       } else {
//         return 'light';
//       }
//     });

//     onSet((newValue, _, isReset) => {
//       document.cookie = `theme=${newValue}; path=/;`;
//     });
//   };
// };

export const themeModeAtom = atom({
  key: 'themeMode',
  default: 'light',
});
