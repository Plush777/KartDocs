'use client';

import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
	body,
	html {
		margin: 0;
		padding: 0;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		-webkit-text-size-adjust: 100%;
		-moz-text-size-adjust: none;
		-o-text-size-adjust: none;
		-webkit-touch-callout: none;
		user-select: none;
	}
	:where(
			html,
			body,
			div,
			span,
			object,
			h1,
			h2,
			h3,
			h4,
			h5,
			h6,
			p,
			blockquote,
			a,
			button,
			abbr,
			address,
			img,
			q,
			dl,
			dt,
			dd,
			ol,
			ul,
			li,
			fieldset,
			form,
			label,
			legend,
			table,
			caption,
			tbody,
			tfoot,
			thead,
			tr,
			th,
			td,
			article,
			aside,
			footer,
			header,
			section,
			summary
		) {
		margin: 0;
		padding: 0;
		border: 0;
	}
	:where(article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section) {
		display: block;
	}
	:where(ol, ul, li) {
		list-style: none;
	}
	:where(h1, h2, h3, h4, h5, h6) {
		font-weight: normal;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	address {
		font-style: normal;
	}
	button {
		display: inline-block;
		border: none;
		background-color: transparent;
		cursor: pointer;
		font-family: unset;
	}
	pre {
		word-break: break-all;
		white-space: pre-line;
		margin: 0;
	}
	* {
		box-sizing: border-box;
	}
	img {
		-webkit-user-drag: none;
		-khtml-user-drag: none;
		-moz-user-drag: none;
		-o-user-drag: none;
		user-select: none;
		display: block;
		-webkit-touch-callout: none;
		pointer-events: none;
	}
	::selection {
		background-color: transparent;
	}
	input::selection {
		background-color: blue;
	}

	input {
		height: 100%;
		border: 1px solid var(--stroke1);
		border-radius: 4px;
		color: var(--text1);
		padding: 0 10px;
		background-color: var(--background2);

		&::-webkit-search-decoration,
		&::-webkit-search-cancel-button,
		&::-webkit-search-results-button,
		&::-webkit-search-results-decoration {
			display: none;
		}

		/* &[type='number']{
        -moz-appearance: textfield;
    } */

		&::-webkit-outer-spin-button,
		&::-webkit-inner-spin-button {
			-webkit-appearance: none;
			margin: 0;
		}
	}

	body {
		touch-action: pan-y;
		color: var(--text1);
	}

	html {
		&.small {
			font-size: 15px;
		}
		&.default {
			font-size: 16px;
		}
		&.large {
			font-size: 17.5px;
		}
	}

	body {
		--mainHeightDefault: 371px;
		--mainHeightWide: 802px;
		--mainHeightNews: 660px;
		--section-gap: 150px;
		--dimmed: rgba(0, 0, 0, 0.3);
		--live: #eb0400;
		--main-scroll-height: 560px;
		--sidebar-summary-padding-left: 30px;
		--sidebar-details-height: 50px;
		--sidebar-item-text-underline-offset: 2px;
		--sidebar-padding: 22px;

		&[data-theme='light'] {
			--main-background: #f2f2f2;
			--background1: #fff;
			--background2: #fff;
			--background3: #000;
			--background4: #ececec;
			--background5: #f9f9f9;
			--sidebar-background: #f2f2f2;
			--scrollbar-track-background: #f2f2f2;
			--scrollbar-thumb-background: #a6a6a6;
			--stroke1: #ddd;
			--stroke2: #e5e8eb;
			--stroke3: #dedede;
			--description: #626262;
			--active: #3a67ea;
			--active-background: #000;
			--skeleton: #f5f5f5;
			--disabled: rgba(0, 0, 0, 0.6);
			--disabled-background: #d3d3d3;
			--title: #000;
			--text1: #333;
			--text2: #333;
			--text3: #fff;
			--red: #d1180b;
			--red-background: #d1180b;
			--purple-background: #ba00ff;
			--gray-background: #6c7274;
			--green-background: #008000;
			--orange-background: #b9582c;
			--blue-background: #3a67ea;
			--highlight-background: #dce2f2;
			--background2-rgb: 0, 0, 0;
			--skeleton-background: #eee;
			--green-text: #006600;
			--yellow-text: #7f6d01;
			--purple-text: #800080;
			--open-in-new: url('/images/common/ico-open-in-new.svg');
			--angle-arrow: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='34' height='34' viewBox='0 0 24 24' fill='none'%3E%3Cpath fill='%23333' d='M15.5 14.5C15.4015 14.5005 15.3038 14.4813 15.2128 14.4435C15.1218 14.4057 15.0392 14.3501 14.97 14.28L11.97 11.28L8.96999 14.28C8.82472 14.3502 8.6607 14.3716 8.50227 14.3411C8.34385 14.3107 8.19947 14.23 8.09056 14.111C7.98165 13.9919 7.91402 13.841 7.89771 13.6805C7.88139 13.52 7.91726 13.3585 7.99999 13.22L11.5 9.72001C11.6406 9.57956 11.8312 9.50067 12.03 9.50067C12.2287 9.50067 12.4194 9.57956 12.56 9.72001L16.06 13.22C16.2004 13.3606 16.2793 13.5513 16.2793 13.75C16.2793 13.9488 16.2004 14.1394 16.06 14.28C15.9873 14.3539 15.8998 14.4116 15.8034 14.4495C15.7069 14.4874 15.6035 14.5046 15.5 14.5Z'/%3E%3C/svg%3E");
		}

		&[data-theme='dark'] {
			--main-background: #121212;
			--background1: #292a2d;
			--background2: #1e1e1e;
			--background3: #fff;
			--background4: #1e1e1e;
			--background5: #1e1e1e;
			--sidebar-background: #1e1e1e;
			--scrollbar-track-background: #121212;
			--scrollbar-thumb-background: #a6a6a6;
			--stroke1: #2a2a2a;
			--stroke2: rgba(255, 255, 255, 0.2);
			--stroke3: rgba(255, 255, 255, 0.2);
			--description: #bbbbbf;
			--active: #00a2ff;
			--active-background: #fff;
			--skeleton: #1e1e1e;
			--disabled: rgba(255, 255, 255, 0.55);
			--disabled-background: rgba(255, 255, 255, 0.55);
			--title: #f8f8fa;
			--text1: #ececec;
			--text2: #fff;
			--text3: #000;
			--red: #ff4353;
			--red-background: #d1180b;
			--purple-background: #800080;
			--gray-background: #6c7274;
			--green-background: #008000;
			--orange-background: #724820;
			--blue-background: #2468a2;
			--highlight-background: #004d92;
			--background2-rgb: 255, 255, 255;
			--skeleton-background: #333;
			--green-text: #00ffa3;
			--yellow-text: #ffa500;
			--purple-text: #c85ac8;
			--open-in-new: url('/images/common/ico-open-in-new-w.svg');
			--angle-arrow: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='34' height='34' viewBox='0 0 24 24' fill='none'%3E%3Cpath fill='%23ececec' d='M15.5 14.5C15.4015 14.5005 15.3038 14.4813 15.2128 14.4435C15.1218 14.4057 15.0392 14.3501 14.97 14.28L11.97 11.28L8.96999 14.28C8.82472 14.3502 8.6607 14.3716 8.50227 14.3411C8.34385 14.3107 8.19947 14.23 8.09056 14.111C7.98165 13.9919 7.91402 13.841 7.89771 13.6805C7.88139 13.52 7.91726 13.3585 7.99999 13.22L11.5 9.72001C11.6406 9.57956 11.8312 9.50067 12.03 9.50067C12.2287 9.50067 12.4194 9.57956 12.56 9.72001L16.06 13.22C16.2004 13.3606 16.2793 13.5513 16.2793 13.75C16.2793 13.9488 16.2004 14.1394 16.06 14.28C15.9873 14.3539 15.8998 14.4116 15.8034 14.4495C15.7069 14.4874 15.6035 14.5046 15.5 14.5Z'/%3E%3C/svg%3E");
		}
	}

	/* mobile scroll */
	::-webkit-scrollbar {
		-webkit-appearance: none;
		-webkit-overflow-scrolling: auto;
	}
	::-webkit-scrollbar:vertical {
		width: 14px;
	}
	::-webkit-scrollbar:horizontal {
		height: 14px;
	}
	/*---*/

	::-webkit-scrollbar {
		width: 14px;
	}
	::-webkit-scrollbar-button {
		display: none;
	}
	::-webkit-scrollbar-track {
		background-color: var(--scrollbar-track-background);
	}
	::-webkit-scrollbar-thumb {
		border: solid transparent;
		background-clip: padding-box;
		border-radius: 8px;
		background-color: var(--scrollbar-thumb-background);
	}

	.hidden {
		display: block;
		width: 0;
		height: 0;
		margin: 0;
		padding: 0;
		line-height: 0;
		font-size: 0;
		overflow: hidden;
	}

	.eps {
		width: 100%;
		max-width: 100%;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
		&.type01 {
			display: table;
			table-layout: fixed;
			white-space: nowrap;
			> * {
				display: table-cell;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
	}

	.scY {
		overflow-y: auto;
		&::-webkit-scrollbar {
			width: 5px;
		}
		&::-webkit-scrollbar-thumb {
			border: 0;
			border-radius: 10px;
			background-color: var(--scrollbar-thumb-background);
		}
	}

	.openInNew {
		display: inline-flex;
		align-items: center;
		&::after {
			content: '새창 열림';
			position: relative;
			top: -2px;
			display: inline-block;
			width: 18px;
			height: 18px;
			font-size: 0;
			color: transparent;
			margin-left: 5px;
			background: var(--open-in-new) no-repeat center;
		}
	}

	#modalRoot,
	#modalDimmed {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	#modalRoot {
		z-index: 10000;
	}
	#modalDimmed {
		background-color: var(--dimmed);
		z-index: 10000;
		pointer-events: all;
	}

	${({ theme }) => theme.laptopL`
    body {
        --section-gap: 120px;
    }
`};

	${({ theme }) => theme.tablet`
    body {
        --mainHeightDefault: 200px;
        --section-gap: 100px;
        --sidebar-summary-padding-left: 25px;
    }
`};

	${({ theme }) => theme.mobile`
    body {
        --sidebar-summary-padding-left: 20px;
        --sidebar-details-height: 40px;
        --sidebar-padding: 16px;
    }
`};

	${({ theme }) => theme.small`
    body {
        --section-gap: 120px;
    }
`};
`;

export default GlobalStyle;
