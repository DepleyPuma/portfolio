import { HeroSection } from '@/view/HeroSection';
import { DockDemo } from '@/components/Navigation';
import { About } from '@/view/About';
import { Skills } from '@/view/Skills';
import { WorkExperience } from '@/view/WorkExperience';
import { Projects } from '@/view/Projects';

export default function Home() {
	return (
		<div className='relative overflow-hidden'>
			<HeroSection />
			<About />
			<WorkExperience />
			<Skills />
			<Projects />
			<div id='contact' className='h-screen w-full bg-[var(--website-bg-color)]'></div>
			<DockDemo />
		</div>
	);
}
