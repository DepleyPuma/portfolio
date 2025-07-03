'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

type SkillProps = {
	skill: string;
	delayIndex: number;
};

export function Skill({ skill, delayIndex }: SkillProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: '-50px 0px' });

	const variants = {
		hidden: { opacity: 0, y: 15 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.span
			ref={ref}
			key={skill}
			variants={variants}
			initial='hidden'
			animate={isInView ? 'visible' : 'hidden'}
			transition={{
				duration: 0.4,
				ease: 'easeInOut',
				delay: delayIndex * 0.08,
			}}
			className='inline-block bg-[var(--btn-bg-color)] text-black rounded-full px-4 py-1 text-base font-semibold shadow-sm border border-[#bdbdbd] hover:bg-white transition-colors duration-100'>
			{skill}
		</motion.span>
	);
}
