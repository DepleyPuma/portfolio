import { AnimatedText } from '@/components/animated/AnimatedText/AnimatedText';
import { Job } from '@/components/Job';
import { workExperience } from '@/lib/workExperience';
import { useTranslations } from 'next-intl';

export function WorkExperience() {
	const t = useTranslations('WorkExperience');
	return (
		<section className='relative w-full flex flex-col justify-center items-center bg-[var(--website-bg-color)] text-[var(--foreground)] px-4 pb-32 pt-64 font-sans'>
			<div className='max-w-7xl w-full'>
				<AnimatedText
					splitBy='words'
					duration={1}
					whileInView
					delay={0.2}
					as='h2'
					className='text-3xl md:text-4xl xl:text-5xl font-extrabold italic mb-6 text-white'>
					{t('title')}
				</AnimatedText>
			</div>
			{workExperience.map((workExp, index) => (
				<Job key={workExp.name} {...workExp} delayIndex={index} />
			))}
			{/* <div className='flex justify-between items-center mt-10 max-w-6xl w-full text-white'>
				<div className='flex gap-4'>
					<Image src={'/fcb.png'} height={100} width={100} alt='company image' />
					<div className=' space-y-1'>
						<h3 className='font-bold text-2xl'>FCB Health Spark</h3>
						<p className='font-extralight'>Junior Front-End Developer</p>
					</div>
				</div>
				<div>
					<p className='text-muted-foreground font-bold'>April 2024 - May 2025</p>
				</div>
			</div> */}
		</section>
	);
}
