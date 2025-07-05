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
		workStart: 'FCBworkStart',
		workEnd: 'FCBworkEnd',
		image: '/fcb.png',
	},
	{
		name: 'Braughman Group Media Outdoor Sp. z o.o.',
		job: 'Digital Archivist',
		workStart: 'BraughmanworkStart',
		workEnd: 'BraughmanworkEnd',
		image: '/braughman.png',
	},
	{
		name: 'Freelancing',
		job: 'Freelancer',
		workStart: 'FreelancingworkStart',
		workEnd: 'FreelancingworkEnd',
		image: '/useme.png',
	},
];
