'use client';
import './globals.css';
import SmoothScrollProvider from './components/SmoothScrollProvider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pl' suppressHydrationWarning>
			<body>
				<SmoothScrollProvider>{children}</SmoothScrollProvider>
			</body>
		</html>
	);
}
