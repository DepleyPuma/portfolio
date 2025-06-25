import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		domains: ['placehold.co'],
	},
};

export const i18n = {
	locales: ['pl', 'en'],
	defaultLocale: 'pl',
};

export default nextConfig;
