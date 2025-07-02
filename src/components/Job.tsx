import { workExperienceType } from '@/lib/workExperience';
import Image from 'next/image';

export function Job({ name, job, workStart, workEnd, image }: workExperienceType) {
	return (
		<div className='flex justify-between items-center mt-10 max-w-6xl w-full text-white'>
			<div className='flex gap-4'>
				<div className='relative w-[50px] h-[50px] md:w-[100px] md:h-[100px]'>
					<Image
						src={image}
						alt='company image'
						fill
						sizes='(max-width: 768px) 50vw, 33vw' // Wskazówka dla optymalizacji
						className='object-contain' // Klasa Tailwind zamiast stylu inline
					/>
				</div>
				<div className='space-y-1'>
					<h3 className='font-bold md:text-2xl max-w-sm'>{name}</h3>
					<p className='font-extralight'>{job}</p>
				</div>
			</div>
			<div>
				<p className='text-muted-foreground font-bold text-sm md:text-lg'>
					{workStart} - {workEnd}
				</p>
			</div>
		</div>
	);
}
