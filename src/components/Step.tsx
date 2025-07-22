import { StepsType } from '@/lib/steps';
import { useTranslations } from 'next-intl';

export function Step({ index, title, text, translate }: StepsType) {
	const t = useTranslations('services');
	return (
		<div className='flex flex-col items-start w-full lg:max-w-[33svw] text-white'>
			<span className='mb-4 text-lg'>{index}</span>

			<hr className='border-0 h-[1px] w-full bg-muted-foreground' />

			<h3 className='py-8 text-2xl'>{t(`${translate}.${title}`)}</h3>

			<p>{t(`${translate}.${text}`)}</p>
		</div>
	);
}
