'use server';

import * as z from 'zod';

const FormSchema = z.object({
	name: z.string().min(2).max(50),
	email: z.string().email(),
	message: z.string().min(2),
});

export async function submitContactForm(formData: FormData) {
	try {
		const data = {
			name: formData.get('name') as string,
			email: formData.get('email') as string,
			message: formData.get('message') as string,
		};

		FormSchema.parse(data);
		console.log('Data are correct!', data);
	} catch (error) {
		console.log(error);
	}
}
