'use client';

import { AnimatePresence, motion, useInView } from 'motion/react';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

type ProjectTypeProps = {
	image?: string;
	title?: string;
	description?: string;
	url: string;
	technologies?: string[];
	features?: string[];
	delayIndex: number;
};

export const Project = ({
	image = '/test.webp',
	title = 'Project Name',
	description = 'Opis projektu...',
	url,
	technologies = [],
	features = [],
	delayIndex,
}: ProjectTypeProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

	const variants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const t = useTranslations('Projects');

	return (
		<>
			<motion.div
				ref={ref}
				initial='hidden'
				variants={variants}
				animate={isInView ? 'visible' : 'hidden'}
				transition={{
					duration: 0.5,
					ease: 'easeInOut',
					delay: delayIndex * 0.25,
				}}
				className='group relative w-full h-[230px] md:h-[400px] max-w-2xl cursor-pointer rounded-lg overflow-hidden shadow-lg'
				onClick={() => setIsOpen(true)}
			>
				<Image
					src={image}
					alt={title}
					fill
					className='object-cover group-hover:scale-105 transition-all duration-300'
					sizes='(max-width: 768px) 100vw, 50vw'
				/>
				<div className='absolute bottom-0 left-0 w-full z-10 p-4'>
					<h3 className='text-2xl md:text-4xl font-extrabold italic text-white drop-shadow-lg'>
						{title}
					</h3>
				</div>
				<div className='pointer-events-none absolute inset-x-0 -bottom-2 h-1/2 w-[110%] bg-gradient-to-t from-black/80 to-transparent'></div>
			</motion.div>
			<SpringModal
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				title={title}
				url={url}
				image={image}
				description={description}
				technologies={technologies}
				features={features}
				t={t}
			/>
		</>
	);
};

const SpringModal = ({
	isOpen,
	setIsOpen,
	title,
	url,
	image,
	description,
	technologies = [],
	features = [],
	t,
}: {
	isOpen: boolean;
	setIsOpen: (open: boolean) => void;
	title: string;
	url: string;
	image: string;
	description: string;
	technologies?: string[];
	features?: string[];
	t: ReturnType<typeof useTranslations>;
}) => (
	<AnimatePresence>
		{isOpen && (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				onClick={() => setIsOpen(false)}
				className='bg-slate-900/20 backdrop-blur p-2 sm:p-4 md:p-8 fixed inset-0 z-1000 flex items-center justify-center cursor-pointer'
			>
				<motion.div
					initial={{ scale: 0, rotate: '12.5deg' }}
					animate={{ scale: 1, rotate: '0deg' }}
					exit={{ scale: 0, rotate: '0deg' }}
					onClick={e => e.stopPropagation()}
					className='bg-gradient-to-tl from-[#0a0a0a] via-black to-[#4f4f4f] text-white p-6 rounded-lg w-full max-w-lg mx-4 my-8 shadow-xl cursor-default relative max-h-[calc(100vh-4rem)] flex flex-col'
				>
					<div className='relative z-10'>
						<Image
							src={image}
							alt={title}
							width={800}
							height={300}
							className='object-cover w-full rounded-lg mb-4 h-[120px] sm:h-[150px] md:h-[200px]'
						/>
						<h3 className='text-2xl sm:text-3xl font-bold text-left mb-2'>{title}</h3>
						<p className='text-left mb-4 text-sm sm:text-base'>{t(description)}</p>
						{technologies.length > 0 && (
							<div className='mb-4'>
								<h4 className='font-semibold mb-2 sm:mb-4 text-left'>
									Technologie:
								</h4>
								<ul className='flex flex-wrap justify-start gap-1 sm:gap-2'>
									{technologies.map(tech => (
										<li
											key={tech}
											className='bg-white/10 px-2 py-1 rounded text-xs sm:text-sm'
										>
											{tech}
										</li>
									))}
								</ul>
							</div>
						)}
						{features.length > 0 && (
							<div className='mb-4'>
								<h4 className='font-semibold py-2 sm:py-4 text-left text-sm sm:text-base'>
									Wyróżniające funkcje:
								</h4>
								<ul className='list-disc list-inside text-xs sm:text-sm space-y-1'>
									{features.map(feature => (
										<li key={feature}>{t(feature)}</li>
									))}
								</ul>
							</div>
						)}
					</div>

					<div className='flex gap-2 pt-4 mt-auto'>
						<button
							onClick={() => setIsOpen(false)}
							className='bg-white/10 hover:bg-white/25 transition-colors text-white font-semibold w-full py-2 rounded cursor-pointer text-sm sm:text-base'
						>
							{t('close')}
						</button>
						<Link
							href={url}
							onClick={() => setIsOpen(false)}
							className='bg-white/20 hover:bg-white/25 transition-colors text-center text-white font-semibold w-full py-2 rounded cursor-pointer text-sm sm:text-base'
						>
							{t('live')}
						</Link>
					</div>
				</motion.div>
			</motion.div>
		)}
	</AnimatePresence>
);
