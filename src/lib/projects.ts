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
		title: 'NoteApp',
		description: 'NoteAppDescription',
		image: '/projects/noteApp.webp',
		url: 'https://github.com/DepleyPuma/expoApp',
		technologies: ['Expo', 'Expo Router', 'TypeScript', 'MongoDB'],
		features: ['NoteAppFeature1', 'NoteAppFeature2', 'NoteAppFeature3'],
	},
	{
		title: 'Trzy-czte-ry',
		description: 'TrzyCzteRyDescription',
		image: '/projects/HOME_PAGE.webp',
		url: 'https://www.trzy-czte-ry.com.pl/',
		technologies: ['React', 'TailwindCSS', 'Shadcn-UI', 'TypeScript'],
		features: ['TrzyCzteRyFeature1', 'TrzyCzteRyFeature2', 'TrzyCzteRyFeature3'],
	},
	{
		title: 'Spark Amber',
		description: 'SparkAmberDescription',
		image: '/projects/spark_amber.webp',
		url: 'test',
		technologies: ['Next.js', 'TailwindCSS', 'Framer Motion', 'Stripe'],
		features: ['SparkAmberFeature1', 'SparkAmberFeature2', 'SparkAmberFeature3'],
	},
	{
		title: 'Portfolio',
		description: 'PortfolioDescription',
		image: '/projects/portfolio.webp',
		url: 'https://szymonszarek.dev',
		technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vercel', 'i18n'],
		features: ['PortfolioFeature1', 'PortfolioFeature2', 'PortfolioFeature3'],
	},
];
