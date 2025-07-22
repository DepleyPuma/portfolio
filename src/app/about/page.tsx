import { AboutSubPageText } from '@/view/AboutSubPageText';
import { Footer } from '@/view/Footer';
import { HeroSection } from '@/view/HeroSection';
import { ICanHelpYou } from '@/view/ICanHelpYou';

function About() {
	return (
		<>
			<HeroSection />
			<div className='bg-[var(--website-bg-color)] text-[var(--foreground)]'>
				<hr className='border-0 h-[1px] w-3/4 bg-muted-foreground mx-auto' />
			</div>
			<section className='relative w-full flex flex-col justify-center items-center bg-[var(--website-bg-color)] text-[var(--foreground)] px-4 py-16 font-sans'>
				<div className='max-w-7xl w-full'>
					<AboutSubPageText />
					<ICanHelpYou />
				</div>
			</section>
			<Footer />
		</>
	);
}

export default About;
