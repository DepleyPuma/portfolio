'use client';

import { workExperienceType } from '@/lib/workExperience';
import Image from 'next/image';
import { useRef } from 'react';
import { useInView, motion } from 'motion/react';
import { useTranslations } from 'next-intl';

type JobProps = workExperienceType & {
	delayIndex: number;
};

export function Job({ name, job, workStart, workEnd, image, delayIndex }: JobProps) {
	const ref = useRef(null);

	const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

	const variants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const t = useTranslations('WorkExperience');
	// const workStart = t(`${name}workStart`);
	// const workEnd = t(`${name}workEnd`);

	return (
		<motion.div
			ref={ref}
			variants={variants}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'}
			transition={{
				duration: 0.5,
				ease: 'easeInOut',
				delay: delayIndex * 0.15,
			}}
			className='flex justify-between items-center mt-10 max-w-6xl w-full text-white'
		>
			<div className='flex gap-4'>
				<div className='relative w-[50px] h-[50px] md:w-[100px] md:h-[100px]'>
					<Image
						src={image}
						alt='company image'
						fill
						sizes='(max-width: 768px) 50vw, 33vw'
						className='object-contain'
					/>
				</div>
				<div className='space-y-1'>
					<h3 className='font-bold md:text-2xl max-w-sm'>{name}</h3>
					<p className='font-extralight'>{job}</p>
				</div>
			</div>
			<div>
				<p className='text-muted-foreground font-bold text-sm md:text-lg'>
					{t(workStart)} - {t(workEnd)}
				</p>
			</div>
		</motion.div>
		// <div className='flex justify-between items-center mt-10 max-w-6xl w-full text-white'>

		// {/* </div> */}
	);
}
