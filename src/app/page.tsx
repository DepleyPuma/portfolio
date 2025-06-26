import { HeroSection } from '@/view/HeroSection';
import { DockDemo } from '@/components/Navigation';

export default function Home() {
	return (
		<div className='relative overflow-hidden'>
			<HeroSection />
			<div id='contact' className='h-screen w-full bg-red-200'></div>
			<DockDemo />
		</div>
	);
}
