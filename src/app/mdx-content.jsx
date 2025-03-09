'use client';

import { MDXRemote } from 'next-mdx-remote';
import Division from 'components/mdx/Division';
import Paragraph from 'components/mdx/Paragraph';
import Italic from 'components/mdx/Italic';
import Strong from 'components/mdx/Strong';
import MdxLink from 'components/mdx/MdxLink';
import Blockquote from 'components/mdx/Blockquote';
import Img from 'components/mdx/Img';
import Sprite from 'components/mdx/Sprite';
import Info from 'components/mdx/Info';
import Tag from 'components/mdx/Tag';
import TagList from 'components/mdx/TagList';
import Figure from 'components/mdx/Figure';
import GridWrapper from 'components/encyclopedia/GridWrapper';
import Video from 'components/mdx/Video';
import Del from 'components/mdx/Del';
import { createElement } from 'react';

const createHeading = level => {
	return ({ children, ...props }) => {
		const slug = typeof children === 'string' ? children.toString().toLowerCase().replace(/\s+/g, '-') : '';

		return createElement(
			`h${level}`,
			{
				id: slug,
				...props,
			},
			children,
		);
	};
};

const MdxComponents = {
	Link: props => <MdxLink {...props} />,
	Division: props => <Division {...props} />,
	Paragraph: props => <Paragraph {...props} />,
	Strong: props => <Strong {...props} />,
	Italic: props => <Italic {...props} />,
	Bq: props => <Blockquote {...props} />,
	Img: props => <Img {...props} />,
	Sprite: props => <Sprite {...props} />,
	Info: props => <Info {...props} />,
	Tag: props => <Tag {...props} />,
	TagList: props => <TagList {...props} />,
	Figure: props => <Figure {...props} />,
	GridWrapper: props => <GridWrapper {...props} />,
	Video: props => <Video {...props} />,
	Del: props => <Del {...props} />,
	h1: createHeading(1),
	h2: createHeading(2),
	h3: createHeading(3),
	h4: createHeading(4),
	h5: createHeading(5),
	h6: createHeading(6),
};

export function MdxContent({ source }) {
	return <MDXRemote {...source} components={MdxComponents} />;
}
