import { AnimatedText } from '@/components/animated/AnimatedText/AnimatedText';
import { useTranslations } from 'next-intl';

export function AboutSubPageText() {
	const t = useTranslations('AboutSubPage');

	return (
		<div className='flex flex-col items-start justify-center z-10 w-full'>
			<AnimatedText
				splitBy='words'
				duration={1}
				whileInView
				delay={0.2}
				as='h2'
				className='text-4xl xl:text-5xl font-extrabold italic mb-4 text-white'
			>
				{t('title')}
			</AnimatedText>
			<AnimatedText
				splitBy='lines'
				duration={1}
				whileInView
				delay={0.2}
				as='p'
				className='mb-4 max-w-full text-base md:text-lg text-[#ededed]'
			>
				{t('intro')}
			</AnimatedText>
			<AnimatedText
				splitBy='lines'
				duration={1}
				whileInView
				delay={0.2}
				as='p'
				className='mb-4 max-w-full text-base md:text-lg text-[#ededed]'
			>
				{t('daily')}
			</AnimatedText>
			<AnimatedText
				splitBy='lines'
				duration={1}
				whileInView
				delay={0.2}
				as='p'
				className='mb-4 max-w-full text-base md:text-lg text-[#ededed]'
			>
				{t('lifestyle')}
			</AnimatedText>
			<AnimatedText
				splitBy='lines'
				duration={1}
				whileInView
				delay={0.2}
				as='p'
				className='mb-4 max-w-full text-base md:text-lg text-[#ededed]'
			>
				{t('hobbies')}
			</AnimatedText>
			<AnimatedText
				splitBy='lines'
				duration={1}
				whileInView
				delay={0.2}
				as='p'
				className='mb-4 max-w-full text-base md:text-lg text-[#ededed]'
			>
				{t('approach')}
			</AnimatedText>
			<AnimatedText
				splitBy='lines'
				duration={1}
				whileInView
				delay={0.2}
				as='p'
				className='mb-8 max-w-full text-base md:text-lg text-[#ededed]'
			>
				{t('closing')}
			</AnimatedText>
		</div>
	);
}
