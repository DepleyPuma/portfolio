import { HeroSection } from '@/view/HeroSection';
import { DockDemo } from '@/app/components/Navigation';

export default function Home() {
	return (
		<div className='relative overflow-hidden'>
			<HeroSection />
			<div id='contact' className='h-screen w-full bg-red-200'></div>
			<DockDemo />
		</div>
	);
}
