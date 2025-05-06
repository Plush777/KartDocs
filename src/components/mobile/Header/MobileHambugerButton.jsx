import * as H from 'style/layout/Header.style';
import SChamburger from 'svg/ico-hamburger.svg';

export default function MobileHambugerButton({ setMenuToggle }) {
  const handleHeaderMenu = () => {
    setMenuToggle(prev => !prev);
  };

  return (
    <H.BtnHambuger onClick={handleHeaderMenu}>
      <SChamburger width="24px" height="24px" fill="#000" />
    </H.BtnHambuger>
  );
}
