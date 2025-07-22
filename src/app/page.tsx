import { About } from '@/view/About';
import { Footer } from '@/view/Footer';
import { HeroSection } from '@/view/HeroSection';
import { Projects } from '@/view/Projects';
import { Skills } from '@/view/Skills';
import { WorkExperience } from '@/view/WorkExperience';

export default function Home() {
	return (
		<div className='relative overflow-hidden'>
			<HeroSection />
			<About />
			<WorkExperience />
			<Skills />
			<Projects />
			<Footer />
		</div>
	);
}
