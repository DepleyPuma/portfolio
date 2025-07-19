'use client';

import { AnimatedText } from '@/components/animated/AnimatedText/AnimatedText';
import Magnet from '@/components/animated/Magnet/Magnet';
import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import ContactBtn from '@/components/ContactBtn';

export function Footer() {
	const t = useTranslations('Footer');

	return (
		<section
			id='contact'
			className='relative w-full flex flex-col justify-center items-center bg-[var(--footer-bg-color)] text-[var(--foreground)] px-4 py-18 md:py-32 font-sans'
		>
			<div className='max-w-7xl w-full'>
				<AnimatedText
					splitBy='words'
					duration={1}
					whileInView
					delay={0.2}
					as='h2'
					className='text-5xl md:text-7xl font-regular mb-6 text-white'
				>
					{t('title')}
				</AnimatedText>
				<AnimatedText
					splitBy='words'
					duration={1}
					whileInView
					delay={0.6}
					as='h2'
					className='text-5xl md:text-7xl font-regular mb-6 md:mb-24 text-white'
				>
					{t('subtitle')}
				</AnimatedText>

				<hr className='border-0 h-[1px] bg-muted-foreground' />

				<div className='absolute bottom-85 right-10 md:bottom-70 2xl:right-100 z-10'>
					<Magnet>
						<div className='relative w-full md:w-auto h-[200px] md:h-[250px] z-10'>
							<motion.button
								whileHover={{ scale: 1.08 }}
								whileTap={{ scale: 0.95 }}
								className='rounded-full w-40 h-40 md:w-50 md:h-50 bg-[#ededed] text-black flex items-center justify-center text-lg font-semibold cursor-pointer shadow-lg'
							>
								{t('buttonContact')}
								{/* Get in touch */}
							</motion.button>
						</div>
					</Magnet>
				</div>

				<div className='flex flex-col md:flex-row gap-16 md:gap-8 mt-40 mb-30'>
					<ContactBtn text='szymon.szarek1@wp.pl' href='mailto:szymon.szarek1@wp.pl' />
					<ContactBtn text='+48 788 008 871' href='tel:+48788008871' />
				</div>
			</div>
		</section>
	);
}
