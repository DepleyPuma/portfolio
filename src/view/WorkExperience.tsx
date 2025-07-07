import { AnimatedText } from '@/components/animated/AnimatedText/AnimatedText';
import { Job } from '@/components/Job';
import { workExperience } from '@/lib/workExperience';
import { useTranslations } from 'next-intl';

export function WorkExperience() {
	const t = useTranslations('WorkExperience');
	return (
		<section className='relative w-full flex flex-col justify-center items-center bg-[var(--website-bg-color)] text-[var(--foreground)] px-4 pt-48 pb-12 md:pb-32 md:pt-64 font-sans'>
			<div className='max-w-7xl w-full'>
				<AnimatedText
					splitBy='words'
					duration={1}
					whileInView
					delay={0.2}
					as='h2'
					className='text-4xl xl:text-5xl font-extrabold italic mb-6 text-white'
				>
					{t('title')}
				</AnimatedText>
			</div>
			{workExperience.map((workExp, index) => (
				<Job key={workExp.name} {...workExp} delayIndex={index} />
			))}
		</section>
	);
}
