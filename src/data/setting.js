export const fontSizeArray = ['small', 'default', 'large'];
export const themeArray = ['light', 'dark'];

export const activeCondition = (data, item) => {
  return data === item ? 'fixed' : '';
};

export const renderText = item => {
  if (item === 'small') return '작게';
  if (item === 'default') return '보통';
  if (item === 'large') return '크게';
  if (item === 'light') return '라이트';
  if (item === 'dark') return '다크';

  return null;
};
