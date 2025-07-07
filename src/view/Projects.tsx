import { AnimatedText } from '@/components/animated/AnimatedText/AnimatedText';
import { Project } from '@/components/Project';
import { useTranslations } from 'next-intl';
import { projects } from '@/lib/projects';

export function Projects() {
	const t = useTranslations('Projects');

	return (
		<section className='relative w-full flex flex-col justify-center items-center bg-[var(--website-bg-color)] text-[var(--foreground)] px-4 py-18 md:py-32 font-sans'>
			<div className='max-w-7xl w-full'>
				<AnimatedText
					splitBy='words'
					duration={1}
					whileInView
					delay={0.2}
					as='h2'
					className='text-3xl md:text-4xl xl:text-5xl font-extrabold italic mb-6 text-white'
				>
					{t('title')}
				</AnimatedText>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl'>
				{projects.map((project, idx) => (
					<Project
						key={project.title + idx}
						title={project.title}
						description={project.description}
						image={project.image}
						technologies={project.technologies}
						features={project.features}
						delayIndex={idx}
					/>
				))}
			</div>
		</section>
	);
}
