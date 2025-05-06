/** @type {import('next').NextConfig} */
const CSSManglePlugin = require('css-mangle-webpack-plugin').default;

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
	openAnalyzer: false,
});

const nextConfig = {
	reactStrictMode: false,
	compiler: {
		styledComponents: true,
	},

	output: 'standalone',
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	// 도메인 모두 허용 https://stackoverflow.com/questions/71235874/how-to-allow-all-domains-for-image-nextjs-config
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		});

		if (process.env.NODE_ENV === 'production') {
			config.plugins.push(new CSSManglePlugin());
		}

		return config;
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://openapi.naver.com/:path*',
			},
			{
				source: '/krtp/:path*',
				destination: 'https://kartrider-tips-api.fly.dev/api/:path*',
			},
		];
	},
};

//https://medium.com/readytowork-org/implementing-pwa-in-the-next-13-application-3e46f6b3f6d8
const withPWA = require('next-pwa')({
	dest: 'public',
	disable: process.env.NODE_ENV === 'development',
	register: true,
	skipWaiting: true,
});

const withMDX = require('@next/mdx')({});
module.exports = withBundleAnalyzer(withPWA(withMDX(nextConfig)));
