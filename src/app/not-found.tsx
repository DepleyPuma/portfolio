import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function NotFound() {
	const t = useTranslations('404Page');

	return (
		<div
			style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}
			className='flex items-center justify-center px-4'
		>
			<div className='max-w-2xl w-full'>
				<div className='text-center mb-16'>
					<h1 className='text-9xl font-light mb-8 text-[#d9d9d9] tracking-tight'>404</h1>

					<h2 className='text-3xl font-light mb-6' style={{ color: '#ffffff' }}>
						{t('title')}
					</h2>

					<p className='text-lg font-light mb-12 text-[#999999]'>{t('subtitle')}</p>
					<Link
						href='/'
						className='inline-flex items-center gap-3 px-8 py-3 rounded-full font-light text-black bg-[var(--btn-bg-color)] transition-all hover:shadow-lg hover:scale-105'
					>
						{t('btnText')}
						<ArrowRight size={20} />
					</Link>
				</div>
			</div>
		</div>
	);
}
