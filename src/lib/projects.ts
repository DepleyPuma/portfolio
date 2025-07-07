export type ProjectType = {
	title: string;
	description: string;
	image: string;
	technologies: string[];
	features: string[];
};

export const projects: ProjectType[] = [
	{
		title: 'EduPlatform',
		description: 'EduPlatformDescription',
		image: '/test.webp',
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
		image: '/test.webp',
		technologies: ['React', 'TailwindCSS', 'Shadcn-UI', 'TypeScript'],
		features: [
			'TrzyCzteRyFeature1',
			'TrzyCzteRyFeature2',
			'TrzyCzteRyFeature3',
			'TrzyCzteRyFeature4',
		],
	},
	{
		title: 'Shoply',
		description: 'ShoplyDescription',
		image: '/test.webp',
		technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe API'],
		features: ['ShoplyFeature1', 'ShoplyFeature2', 'ShoplyFeature3', 'ShoplyFeature4'],
	},
	{
		title: 'Travelio',
		description: 'TravelioDescription',
		image: '/test.webp',
		technologies: ['Angular', 'NestJS', 'MySQL', 'Google Maps API'],
		features: ['TravelioFeature1', 'TravelioFeature2', 'TravelioFeature3', 'TravelioFeature4'],
	},
];
