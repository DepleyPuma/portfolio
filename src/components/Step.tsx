import { StepsType } from '@/lib/steps';
import { useTranslations } from 'next-intl';
import { useRef } from 'react';
import { motion, useInView } from 'motion/react';

type StepTypeProps = StepsType & { delayIndex: number };

export function Step({ index, title, text, translate, delayIndex }: StepTypeProps) {
	const ref = useRef(null);
	const t = useTranslations('services');

	const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

	const variants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.div
			ref={ref}
			variants={variants}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'}
			transition={{
				duration: 0.5,
				ease: 'easeInOut',
				delay: delayIndex * 0.25,
			}}
			className='flex flex-col items-start w-full lg:max-w-[33svw] text-white'>
			<span className='mb-4 text-lg'>{index}</span>

			<hr className='border-0 h-[1px] w-full bg-muted-foreground' />

			<h3 className='py-8 text-2xl'>{t(`${translate}.${title}`)}</h3>

			<p>{t(`${translate}.${text}`)}</p>
		</motion.div>
	);
}
