import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale = await getLocale();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body>
				<NextIntlClientProvider>
					<SmoothScrollProvider>{children}</SmoothScrollProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
