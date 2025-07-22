'use client';
import { AnimatedText } from '@/components/animated/AnimatedText/AnimatedText';
import { Step } from '@/components/Step';
import { stepsArr } from '@/lib/steps';
import { motion, useInView, Variants } from 'motion/react';
import { useRef } from 'react';

export function ICanHelpYou() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

	const variants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const dotVariants: Variants = {
		jump: {
			opacity: 1,
			y: -10,
			transition: {
				duration: 0.8,
				repeat: Infinity,
				repeatType: 'mirror',
				ease: 'easeInOut',
			},
		},
	};

	return (
		<section className='relative w-full flex flex-col justify-center items-start bg-[var(--website-bg-color)] text-[var(--foreground)] px-4 py-16 font-sans'>
			<div className='flex justify-center items-start gap-2'>
				<AnimatedText
					splitBy='words'
					duration={1}
					delay={0.5}
					as='h2'
					className='text-4xl xl:text-5xl font-extrabold italic mb-16 text-white'>
					I can help you with
				</AnimatedText>
				<motion.div
					ref={ref}
					variants={variants}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					transition={{
						duration: 0.5,
						ease: 'easeInOut',
						delay: 0.6,
					}}>
					<motion.div
						initial='hidden'
						animate='jump'
						transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
						className='flex justify-center items-center gap-1'>
						<motion.div className='w-2.5 h-2.5 rounded-full mt-8 bg-white' variants={dotVariants} />
						<motion.div className='w-2.5 h-2.5 rounded-full mt-8 bg-white' variants={dotVariants} />
						<motion.div className='w-2.5 h-2.5 rounded-full mt-8 bg-white' variants={dotVariants} />
					</motion.div>
				</motion.div>
			</div>

			<div className='flex flex-col justify-center items-start gap-14 lg:flex-row'>
				{stepsArr.map((step, index) => (
					<Step key={step.index} {...step} delayIndex={index} />
				))}
			</div>
		</section>
	);
}
