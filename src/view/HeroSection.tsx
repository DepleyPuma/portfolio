'use client';

import Image from 'next/image';
import { motion, useAnimation } from 'motion/react';
import { AnimatedText } from '@/components/animated/AnimatedText/AnimatedText';
import DotGrid from '@/components/animated/DotGrid/DotGrid';
import Magnet from '@/components/animated/Magnet/Magnet';
import gsap from 'gsap';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { SquareArrowOutUpRight } from 'lucide-react';
import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

export function HeroSection() {
	const t = useTranslations('HeroSection');
	const controls = useAnimation();

	useEffect(() => {
		// Najpierw fade-in, potem pulsowanie
		controls
			.start({
				opacity: 1,
				scale: 1,
				transition: { duration: 0.8, ease: 'easeOut', delay: 0.5 },
			})
			.then(() => {
				controls.start({
					scale: [1, 1.05],
					transition: {
						duration: 2,
						ease: 'easeInOut',
						repeat: Infinity,
						repeatType: 'reverse',
					},
				});
			});
	}, [controls]);

	const handleScrollToContact = () => {
		gsap.to(window, {
			scrollTo: '#contact',
			duration: 1.5,
			ease: 'power3.inOut',
		});
	};

	return (
		<section className='relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[var(--website-bg-color)] text-[var(--foreground)] px-4 py-12 md:py-0 font-sans'>
			<div className='max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0'>
				{/* Left Column: Text */}
				<div className='flex-1 flex flex-col items-start justify-center z-10'>
					<AnimatedText
						splitBy='words'
						duration={1}
						delay={0.5}
						as='h1'
						className='text-3xl md:text-4xl font-extrabold italic mb-2 text-white'
					>
						{t('title')}
					</AnimatedText>
					<AnimatedText
						splitBy='words'
						duration={1}
						delay={1}
						as='h2'
						className='text-xl md:text-2xl font-semibold mb-6 text-[#D9D9D9]'
					>
						{t('subtitle')}
					</AnimatedText>
					<AnimatedText
						splitBy='lines'
						duration={1}
						delay={1.3}
						as='p'
						className='mb-8 max-w-lg text-base md:text-lg text-[#ededed]'
					>
						{t('description')}
					</AnimatedText>
					<Magnet
						padding={100}
						disabled={false}
						magnetStrength={4}
						className='cursor-pointer'
					>
						<motion.div
							initial={{ opacity: 0, scale: 0.1 }}
							animate={{ opacity: 1, scale: [0.1, 1] }}
							transition={{ duration: 0.5, ease: 'easeInOut', delay: 2 }}
						>
							<ShimmerButton
								shimmerColor='#5c5c5c'
								background='var(--btn-bg-color)'
								onClick={handleScrollToContact}
								className='inline-flex items-center gap-2 rounded-full px-8 py-3 font-semibold text-black bg-[var(--btn-bg-color)] shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-200 cursor-pointer'
							>
								{t('contactButton')}
								<SquareArrowOutUpRight size={20} />
							</ShimmerButton>
						</motion.div>
					</Magnet>
				</div>
				{/* Right Column: Image + Dot Grid */}
				<motion.div
					initial={{ opacity: 0, scale: 1 }}
					animate={controls}
					className='flex-1 flex items-center justify-center relative w-full md:w-auto h-[400px] md:h-[500px] z-10'
				>
					<Image
						src='/szsz.webp'
						alt='Szymon Photo'
						width={400}
						height={600}
						className='relative object-cover'
						priority
					/>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 1 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
				className='absolute top-[75%] left-1/2 md:left-[68%] -translate-x-1/2 -translate-y-1/2 w-full max-w-[600px] h-[400px] md:max-w-[600px] md:h-[600px] xl:max-w-[800px] md:top-[45%] xl:h-[800px] overflow-hidden'
			>
				<DotGrid
					dotSize={5}
					gap={15}
					baseColor='#ffffff'
					activeColor='#454545'
					proximity={120}
					shockRadius={250}
					shockStrength={5}
					resistance={750}
					returnDuration={1.5}
				/>
			</motion.div>
		</section>
	);
}
