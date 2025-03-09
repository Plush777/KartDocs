import styled from 'styled-components';

export const Wrap = styled.div`
	width: 100%;
	min-height: calc(100vh - 141px);
	background-color: var(--main-background);
	transition: background 0.3s ease-in-out;

	${({ theme }) => theme.laptopL`
      min-height: calc(100vh - 141px);
  	`};

	${({ theme }) => theme.tablet`
      min-height: calc(100vh - 149px);
  	`};
`;

export const Inner = styled.div`
	position: relative;
	max-width: 1300px;
	margin: 0 auto;
	padding: ${props => (props.paddingTop === 'hasNavi' ? '150px' : '120px')} 16px;

	${({ theme }) => theme.laptopL`
       padding: ${props => (props.paddingTop === 'hasNavi' ? '130px' : '95px')} 16px;
  	`};
`;
