'use client';

import React from 'react';
import { AnimatedText } from '@/components/animated/AnimatedText/AnimatedText';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import Magnet from '@/components/animated/Magnet/Magnet';

export function About() {
	const t = useTranslations('About');
	return (
		<section className='relative w-full flex flex-col justify-center items-center bg-[var(--website-bg-color)] text-[var(--foreground)] px-4 py-16 font-sans'>
			<div className='max-w-7xl w-full'>
				{/* Left Column: Text */}
				<div className='flex flex-col items-start justify-center z-10 w-full'>
					<AnimatedText
						splitBy='words'
						duration={1}
						whileInView
						delay={0.2}
						as='h2'
						className='text-4xl xl:text-5xl font-extrabold italic mb-2 text-white'
					>
						{t('title')}
					</AnimatedText>
					<AnimatedText
						splitBy='lines'
						duration={1}
						whileInView
						delay={0.2}
						as='p'
						className='mb-8 max-w-full text-base md:text-lg text-[#ededed]'
					>
						{t('description')}
					</AnimatedText>
				</div>
				{/* Right Column: Circle Button */}
				<div className='absolute -bottom-40 right-10 md:-bottom-50 2xl:right-80 z-10'>
					<Magnet>
						<motion.div
							initial={{ opacity: 0, scale: 0.1 }}
							whileInView={{ opacity: 1, scale: [0.1, 1] }}
							transition={{ duration: 0.5, ease: 'easeInOut' }}
							className='relative w-full md:w-auto h-[200px] md:h-[250px] z-10'
						>
							<motion.button
								whileHover={{ scale: 1.08 }}
								whileTap={{ scale: 0.95 }}
								className='rounded-full w-40 h-40 md:w-50 md:h-50 bg-[#ededed] text-black flex items-center justify-center text-lg font-semibold cursor-pointer shadow-lg'
							>
								{t('button')}
							</motion.button>
						</motion.div>
					</Magnet>
				</div>
			</div>
		</section>
	);
}
