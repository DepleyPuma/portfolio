import './globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { Metadata } from 'next';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import { DockDemo } from '@/components/Navigation';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
	title: 'Szymon Szarek | Tworzenie stron internetowych',
	description: 'Tworzę strony internetowe takie które pomogą ci zaistnieć w siecie',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale = await getLocale();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body>
				<NextIntlClientProvider>
					<SmoothScrollProvider>{children}</SmoothScrollProvider>
					<DockDemo />
				</NextIntlClientProvider>
				<Analytics />
			</body>
		</html>
	);
}
