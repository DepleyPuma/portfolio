export type ProjectType = {
	title: string;
	description: string;
	url: string;
	image: string;
	technologies: string[];
	features: string[];
};

export const projects: ProjectType[] = [
	{
		title: 'EduPlatform',
		description: 'EduPlatformDescription',
		image: '/test.webp',
		url: 'test',
		technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
		features: [
			'EduPlatformFeature1',
			'EduPlatformFeature2',
			'EduPlatformFeature3',
			'EduPlatformFeature4',
		],
	},
	{
		title: 'Trzy-czte-ry',
		description: 'TrzyCzteRyDescription',
		image: '/projects/HOME_PAGE.webp',
		url: 'https://www.trzy-czte-ry.com.pl/',
		technologies: ['React', 'TailwindCSS', 'Shadcn-UI', 'TypeScript'],
		features: [
			'TrzyCzteRyFeature1',
			'TrzyCzteRyFeature2',
			'TrzyCzteRyFeature3',
			'TrzyCzteRyFeature4',
		],
	},
	{
		title: 'Spark Amber',
		description: 'SparkAmberDescription',
		image: '/projects/spark_amber.webp',
		url: 'test',
		technologies: ['Next.js', 'TailwindCSS', 'Framer Motion', 'Stripe'],
		features: [
			'SparkAmberFeature1',
			'SparkAmberFeature2',
			'SparkAmberFeature3',
			'SparkAmberFeature4',
		],
	},
	{
		title: 'Portfolio',
		description: 'PortfolioDescription',
		image: '/projects/portfolio.webp',
		url: 'https://szymon-szyszka.pl',
		technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vercel', 'i18n'],
		features: [
			'PortfolioFeature1',
			'PortfolioFeature2',
			'PortfolioFeature3',
			'PortfolioFeature4',
		],
	},
];
