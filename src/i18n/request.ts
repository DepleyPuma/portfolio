import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
	const cookieStore = await cookies();
	const cookieLocale = cookieStore.get('NEXT_LOCALE')?.value;
	const safeLocale = cookieLocale === 'en' ? 'en' : 'pl';
	return {
		locale: safeLocale,
		messages: (await import(`../../messages/${safeLocale}.json`)).default,
	};
});
