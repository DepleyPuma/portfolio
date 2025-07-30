'use client';

import { submitContactForm } from '@/lib/actions';
import { SquareArrowOutUpRight } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import { ShimmerButton } from './magicui/shimmer-button';
import { Input } from './Input';
import Magnet from '@/components/animated/Magnet/Magnet';

export function ContactForm() {
	const { pending } = useFormStatus();

	return (
		<>
			<form
				action={submitContactForm}
				className='border-1 border-muted-foreground rounded-4xl px-4 pt-8 pb-10'
			>
				<Input name='name' type='text' text='Your name?' placeholder='John Wattson' />
				<Input name='email' type='text' text='Your email?' placeholder='John@wattson.com' />
				<Input
					name='message'
					type='text'
					text='Your message?'
					placeholder='Hi my name is John can you help me with...'
				/>
				<Magnet
					padding={100}
					disabled={false}
					magnetStrength={8}
					className='cursor-pointer'
				>
					<ShimmerButton
						type='submit'
						shimmerColor='#5c5c5c'
						background='var(--btn-bg-color)'
						className='inline-flex items-center gap-2 rounded-full px-8 py-3 font-semibold text-black bg-[var(--btn-bg-color)] shadow-md hover:scale-110 hover:shadow-lg transition-transform duration-200 cursor-pointer'
					>
						{pending ? 'Sending...' : 'Send it'}
						<SquareArrowOutUpRight size={20} />
					</ShimmerButton>
				</Magnet>
			</form>
		</>
	);
}
