import { AnimatedText } from '@/components/animated/AnimatedText/AnimatedText';
import { useTranslations } from 'next-intl';
import { skills } from '@/lib/skills';
import { Skill } from '@/components/Skill';

export function Skills() {
	const t = useTranslations('Skills');

	return (
		<section className='relative w-full flex flex-col justify-center items-center bg-[var(--website-bg-color)] text-[var(--foreground)] px-4 py-12 md:py-32 font-sans'>
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
				<div className='flex flex-wrap gap-3'>
					{skills.map((skill, index) => (
						// <span
						// 	key={skill}
						// 	className='inline-block bg-[var(--btn-bg-color)] text-black rounded-full px-4 py-1 text-base font-semibold shadow-sm border border-[#bdbdbd] hover:bg-white transition-colors duration-100'
						// >
						// 	{skill}
						// </span>
						<Skill key={skill} skill={skill} delayIndex={index} />
					))}
				</div>
			</div>
		</section>
	);
}
