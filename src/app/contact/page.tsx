import { AnimatedText } from '@/components/animated/AnimatedText/AnimatedText';
import { ContactForm } from '@/components/ContactForm';

function page() {
	return (
		<section className='relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[var(--footer-bg-color)] text-[var(--background)] px-4 py-12 md:py-0 font-sans'>
			<div className='w-full max-w-7xl'>
				<div className='flex justify-start items-start w-full mb-14'>
					<AnimatedText
						splitBy='words'
						duration={1}
						delay={0.5}
						as='h1'
						className='text-4xl lg:text-5xl font-extrabold italic mb-2 text-white'
					>
						{"Let's make something together"}
					</AnimatedText>
					{/* <AnimatedText
						splitBy='words'
						duration={1}
						delay={0.6}
						as='h1'
						className='text-4xl lg:text-5xl font-extrabold italic mb-2 text-white'
					>
						
					</AnimatedText> */}
				</div>
				<ContactForm />
			</div>
		</section>
	);
}

export default page;
