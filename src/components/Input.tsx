import { HTMLInputTypeAttribute } from 'react';

type InputTypeProps = {
	name: string;
	type: HTMLInputTypeAttribute;
	text: string;
	placeholder: string;
	error?: boolean; // Properties for test
};

export function Input({
	name,
	type,
	text = 'Your name?',
	placeholder,
	error = false,
}: InputTypeProps) {
	return (
		<div
			className={`flex flex-col mb-6 rounded-xl px-4 py-5 ${
				error ? 'border-1 border-red-800' : 'border-1 border-transparent'
			}`}
		>
			<label htmlFor={name} className='text-4xl font-bold italic'>
				{text}
			</label>
			<input
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
				className='py-6 bg-[var(--footer-bg-color)] text-[var(--background)] text-xl border-0 outline-0'
			/>
		</div>
	);
}
