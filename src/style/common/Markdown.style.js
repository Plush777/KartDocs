import styled from 'styled-components';

export const Container = styled.div`
	* {
		word-break: keep-all;
	}

	img {
		+ p,
		+ h3 {
			margin-top: 20px;
		}
	}

	p:not(.noImageText) {
		line-height: 1.5;
		font-size: 1rem;
		color: var(--text1);

		.mdLink {
			display: inline;
		}

		+ .mdLinkWrap {
			margin-top: 30px;
		}

		+ .mdLink,
		+ .mdRatio,
		+ ul,
		+ details {
			margin-top: 20px;
		}

		+ .mdTip,
		+ h5 {
			margin-top: 30px;
		}

		+ h3,
		+ h4 {
			margin-top: 70px;
		}

		${({ theme }) => theme.tablet`
            font-size: 0.875rem;
        `};
	}

	details {
		summary {
			+ * {
				padding-top: 20px;
			}
		}

		ul {
			margin-top: 10px;
		}

		hr {
			margin: 30px 0;

			+ ul {
				margin-top: 0;
			}
		}

		+ h3,
		+ h4 {
			margin-top: 70px;
		}
	}

	h2,
	h3,
	h4,
	h5 {
		color: var(--title);
	}

	h2 {
		margin-bottom: 40px;
		font-size: 2.625rem;
		font-weight: 600;
		text-transform: uppercase;

		${({ theme }) => theme.laptopL`
            font-size: 2.25rem;
        `};

		${({ theme }) => theme.laptop`
            font-size: 1.875rem;
        `};

		${({ theme }) => theme.tablet`
            font-size: 2rem;
            margin-bottom: 40px;
        `};
	}

	h3 {
		font-size: 2rem;

		+ div,
		+ p,
		+ ul,
		+ ol,
		+ img,
		+ s {
			margin-top: 20px;
		}

		+ .sprite,
		+ h4 {
			margin-top: 30px;
		}
	}

	h4 {
		font-size: 1.5rem;

		.mdLink {
			display: inline;
		}

		+ ul,
		+ ol,
		+ img {
			margin-top: 15px;
		}

		+ h5 {
			margin-top: 25px;
		}

		+ p {
			margin-top: 10px;
		}

		+ div {
			margin: 20px 0 0 0;
		}

		+ h4 {
			margin-top: 20px;
		}
	}

	h5 {
		font-size: 1.25rem;

		+ p {
			margin-top: 5px;
		}
	}

	li {
		color: var(--text1);
		line-height: 1.5;

		.mdLink {
			display: inline;
			text-decoration: underline;
			text-underline-offset: 2px;
		}

		+ li {
			margin-top: 5px;
		}

		ul {
			margin-top: 10px;
		}
	}

	ul {
		+ .figureWrap,
		+ .mdRatio {
			margin-top: 20px;
		}

		+ h4 {
			margin-top: 60px;
		}
	}

	ul {
		li {
			list-style: disc;
			margin-left: 20px;
			font-size: 1rem;
		}
	}

	ol {
		li {
			counter-increment: list-item;
			font-size: 1rem;

			&::before {
				content: counter(list-item) '. ';
				color: var(--text1);
			}
		}
	}

	ul,
	ol {
		+ h3,
		h4 {
			margin-top: 70px;
		}
	}

	hr {
		margin: 60px 0;
		background-color: var(--stroke2);
		height: 1px;
		border: none;
	}

	.mdLink {
		display: block;
		text-decoration: underline;
		text-underline-offset: 2px;

		&.blank::after {
			content: '>';
			margin-left: 3px;
			font-family: 'Noto Sans KR', sans-serif;
		}
	}

	.articleDate {
		display: flex;
		flex-direction: column;
		margin-top: 60px;
		font-size: 0.875rem;
		font-style: italic;
		color: var(--disabled);
		border-top: 1px solid var(--stroke2);
		padding-top: 20px;

		+ .articleDate {
			padding-top: 0;
			border-top: 0;
			margin-top: 5px;
		}
	}

	.articleDateText {
		margin-right: 5px;
	}

	.mdRatio {
		position: relative;
		width: 100%;
		aspect-ratio: 16 / 9;
		border-radius: 8px;
		background-color: var(--background2);
		overflow: hidden;

		video,
		img,
		iframe {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			width: 100%;
			height: 100%;
			border-radius: inherit;
			display: block;
			object-fit: contain;
		}

		+ h3,
		+ h4 {
			margin-top: 70px;
		}

		+ .sprite {
			margin-top: 30px;
		}

		+ p {
			margin-top: 20px;
		}
	}

	.mdTip {
		position: relative;
		width: 100%;
		border-radius: 8px;
		padding: 16px;
		margin-top: 10px;
		background-color: var(--background2);

		&::before {
			content: 'tip :';
			position: absolute;
			left: 16px;
			top: 18.5px;
			font-size: 0.875rem;
			font-weight: 600;
			color: var(--text1);
			text-transform: uppercase;
		}

		+ h3,
		+ h4 {
			margin-top: 70px;
		}
	}

	.mdTipText {
		padding-left: 36px;
		font-size: 0.875rem;
		line-height: normal;
	}

	blockquote {
		position: relative;
		margin-top: 16px;
		margin-bottom: 16px;
		padding: 16px;
		border-left: 4px solid var(--active);
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		color: var(--text1);
		font-size: 0.875rem;
		background-color: var(--background2);
		overflow: hidden;
		z-index: 10;

		.mdLink {
			display: inline;
		}

		+ .tagListWrap {
			margin-top: 36px;
		}

		+ h3 {
			margin-top: 50px;
		}

		+ h4 {
			margin-top: 70px;
		}
	}

	.mdRef {
		display: block;
		margin-top: 30px;
		color: var(--text1);
		font-size: 0.875rem;

		.mdLink {
			display: inline;
		}
	}

	.mdImg {
		/*  */
	}

	.mdFlex {
		display: flex;
		align-items: center;

		+ h3,
		+ h4 {
			margin-top: 70px;
		}
	}

	.mdCg {
		column-gap: 10px;
	}

	.info {
		&Row {
			display: flex;
			align-items: center;
			column-gap: 10px;
		}

		&TitleBox {
			display: flex;
			align-items: center;
			font-size: 1.25rem;
			color: var(--title);
			margin-bottom: 0;
		}

		&Diff {
			display: flex;
			align-items: center;
			font-weight: 600;

			&.green {
				color: var(--green-text);
			}

			&.orange {
				color: var(--yellow-text);
			}

			&.purple {
				color: var(--purple-text);
			}

			&::after {
				content: '|';
				position: relative;
				top: 1px;
				color: var(--title);
				margin: 0 8px;
			}
		}
	}

	.tag {
		display: flex;
		align-items: center;
		border-radius: 4px;
		height: 18px;
		font-size: 0.6875rem;
		padding: 0 5px;
		color: #fff;
		line-height: normal;

		&.blue {
			background-color: var(--blue-background);
		}

		&.red {
			background-color: var(--red-background);
		}

		&ListTitle {
			margin-bottom: 0;
			font-size: 1.25rem;
			color: var(--title);
		}

		&List {
			display: flex;
			align-items: center;
			column-gap: 20px;
		}

		&ListWrap {
			display: flex;
			flex-direction: column;
			row-gap: 10px;

			+ h3 {
				margin-top: 70px;
			}
		}

		&Item {
			display: flex;
			align-items: center;

			&[data-name='일반'] .tag {
				background-color: var(--gray-background);
			}

			&[data-name='고급'] .tag {
				background-color: var(--green-background);
			}

			&[data-name='희귀'] .tag {
				background-color: var(--blue-background);
			}

			&[data-name='영웅'] .tag {
				background-color: var(--purple-background);
			}

			&[data-name='전설'] .tag {
				background-color: var(--orange-background);
			}

			&.radius {
				.tag {
					border-radius: 20px;
					height: 30px;
					padding: 0 10px;
					font-size: 0.75rem;
					color: var(--title);
					border: 1px solid var(--stroke2);
					background-color: var(--background2);
				}
			}
		}

		&ItemTextBox {
			display: flex;
			align-items: center;
			column-gap: 3px;
			margin-left: 5px;
		}

		&ItemText {
			color: var(--title);
			font-size: 0.875rem;
		}
	}

	.figureWrap {
		+ h3,
		+ h4 {
			margin-top: 50px;
		}

		+ p {
			margin-top: 20px;
		}
	}

	.figureWrap figure {
		display: flex;
		align-items: center;
		margin: 0;
		overflow-x: auto;

		&::-webkit-scrollbar {
			height: 10px;
		}

		&::-webkit-scrollbar-track {
			background-color: transparent;
		}

		&::-webkit-scrollbar-thumb {
			border-radius: 0;
			background-color: var(--title);
		}
	}

	.figureWrap figcaption {
		text-align: center;
		margin-top: 12px;
		font-size: 0.875rem;
		color: var(--disabled);
	}

	iframe {
		border: 0;
		border-radius: 8px;
	}

	.reset {
		ul {
			li {
				list-style: none;
				margin-left: 0;
				font-size: inherit;
			}
		}

		li {
			color: inherit;
			line-height: inherit;

			+ li {
				margin-top: 0;
			}
		}
	}

	s {
		display: block;
	}

	.staticImage {
		max-height: 100vh;
		max-width: 100%;
		width: 100%;
		height: auto;
		object-fit: contain;
		display: block;
		border-radius: 12px;
		background-color: var(--background1);

		&.wAuto {
			width: auto;
			border-radius: 4px;
		}

		&.half {
			width: 50%;
		}
	}

	.boxImage {
		width: 150px;
		height: 119px;
	}

	.centerImage {
		width: auto;
		margin: 0 auto;
		border-radius: 12px;
	}

	.dynamicImage {
		object-position: -40px 0;
		width: 300px;

		&.ob-p0 {
			object-position: 0 0;
		}
	}

	.grid2 {
		display: grid;
		grid-template-columns: repeat(2, 200px);
		gap: 10px;
	}

	/* [class*='grid'] {
		margin-top: 20px;
	} */

	.hasIdDiv {
		margin-top: 70px;

		+ .mdFlex {
			margin-top: 20px;
		}
	}

	.tagList {
		flex-wrap: wrap;
		row-gap: 10px;
	}

	.mdDel {
		+ p {
			margin-top: 20px;
		}
	}

	.mdLinkWrap {
		&.donate {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 16px;

			img {
				width: 60px;
				height: 60px;

				&:not([alt='qr']) {
					border-radius: 8px;
				}
			}
		}

		+ p {
			margin-top: 20px;
		}
	}

	${({ theme }) => theme.tablet`
        li, p, span:not(.tag) {
            line-height: 1.5;
        }

        br {
            +h3, +h4, +ol {
                margin-top: 30px;
            }
        }
    `};
`;

export const Sprite = styled.i`
	display: block;
	background-size: ${props => props.backgroundSize};
	background-position: ${props => props.backgroundPosition};
	background-repeat: no-repeat;

	&.item {
		width: 57px;
		height: 57px;
		background-image: url('/images/items/img-items.webp');
	}

	&.character {
		width: 220px;
		height: 280px;
		background-image: url('/images/characters/img-characters.webp');

		&.h140 {
			height: 140px;
		}

		&.h230 {
			height: 230px;
		}
	}

	&.skill {
		width: 70px;
		height: 70px;
		border-radius: 50%;
		background-image: url('/images/skills/img-skills.webp');
		background-color: #121212;
	}

	&.kart {
		width: 300px;
		height: 260px;
		background-image: url('/images/karts/img-karts.webp');
	}

	+ p,
	+ .infoWrap {
		margin-top: 20px;
	}

	+ h3 {
		margin-top: 50px;
	}
`;
