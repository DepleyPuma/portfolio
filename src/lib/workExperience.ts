export type workExperienceType = {
	name: string;
	job: string;
	workStart: string;
	workEnd: string;
	image: string;
};

export const workExperience: workExperienceType[] = [
	{
		name: 'FCB Health Spark',
		job: 'Junior Front-end Developer',
		workStart: 'April 2024',
		workEnd: 'May 2025',
		image: '/fcb.png',
	},
	{
		name: 'Braughman Group Media Outdoor Sp. z o.o.',
		job: 'Digital Archivist',
		workStart: 'June 2024',
		workEnd: 'August 2024',
		image: '/braughman.png',
	},
	{
		name: 'Freelancing',
		job: 'Freelancer',
		workStart: 'June 2024',
		workEnd: 'Now',
		image: '/useme.png',
	},
];
