'use client';

import { animate, stagger, useInView } from 'motion/react';
import { splitText } from 'motion-plus';
import { useEffect, useRef } from 'react';

type AnimatedTextProps = {
	children: React.ReactNode;
	splitBy?: 'chars' | 'words' | 'lines';
	className?: string;
	as?: React.ElementType;
	delay?: number;
	duration?: number;
	whileInView?: boolean;
};

export function AnimatedText({
	children,
	splitBy = 'words',
	className = '',
	as: Component = 'p',
	delay = 0,
	duration = 1,
	whileInView = false,
}: AnimatedTextProps) {
	const textRef = useRef<HTMLElement>(null);
	const isInView = useInView(textRef, { once: true });

	useEffect(() => {
		if (whileInView && !isInView) return;

		document.fonts.ready.then(() => {
			if (!textRef.current) return;

			const splitResults = splitText(textRef.current);
			const elements = splitResults[splitBy];

			animate(
				elements,
				{ opacity: [0, 1], y: [10, 0] },
				{
					type: 'spring',
					duration,
					bounce: 0,
					delay: stagger(0.15, { startDelay: delay }),
				}
			);
		});
	}, [delay, duration, splitBy, whileInView, isInView]);

	return (
		<Component ref={textRef} className={className}>
			{children}
		</Component>
	);
}
