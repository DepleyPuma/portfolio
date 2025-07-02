'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ReactNode } from 'react';

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
	useGSAP(() => {
		gsap.registerPlugin(ScrollToPlugin);

		document.documentElement.style.scrollBehavior = 'auto';

		// --- Wheel Event Handler ---
		const handleWheel = (e: WheelEvent) => {
			e.preventDefault();
			const delta = e.deltaY * 2.5; // Increased multiplier for faster scrolling
			const currentScroll = window.scrollY;

			gsap.to(window, {
				scrollTo: { y: currentScroll + delta, autoKill: false },
				duration: 0.8, // Reduced duration for a snappier feel
				ease: 'power2.out',
				overwrite: 'auto',
			});
		};

		// --- Touch Event Handlers (Corrected Implementation) ---
		let lastY: number;
		let isTouching = false;

		const handleTouchStart = (e: TouchEvent) => {
			isTouching = true;
			lastY = e.touches[0].clientY;
		};

		const handleTouchMove = (e: TouchEvent) => {
			if (!isTouching) return;
			e.preventDefault();

			const clientY = e.touches[0].clientY;
			const delta = (lastY - clientY) * 10; // Multiplier for touch sensitivity
			lastY = clientY;

			const currentScroll = window.scrollY;

			gsap.to(window, {
				scrollTo: { y: currentScroll + delta, autoKill: false },
				duration: 0.8, // Consistent duration
				ease: 'power2.out',
				overwrite: 'auto',
			});
		};

		const handleTouchEnd = () => {
			isTouching = false;
		};

		window.addEventListener('wheel', handleWheel, { passive: false });
		window.addEventListener('touchstart', handleTouchStart, { passive: false });
		window.addEventListener('touchmove', handleTouchMove, { passive: false });
		window.addEventListener('touchend', handleTouchEnd, { passive: false });

		return () => {
			window.removeEventListener('wheel', handleWheel);
			window.removeEventListener('touchstart', handleTouchStart);
			window.removeEventListener('touchmove', handleTouchMove);
			window.removeEventListener('touchend', handleTouchEnd);
		};
	});

	return <>{children}</>;
}
