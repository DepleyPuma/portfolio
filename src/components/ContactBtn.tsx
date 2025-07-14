import Link from 'next/link';
import Magnet from './animated/Magnet/Magnet';

type ContactBtnPropsType = {
	text: string;
	href: string;
};

function ContactBtn({ text, href = '#' }: ContactBtnPropsType) {
	return (
		<Magnet padding={50} disabled={false} magnetStrength={3}>
			<Link
				href={href}
				className='py-6 px-8 border rounded-4xl text-white hover:text-[var(--footer-bg-color)] hover:bg-white transition-colors duration-200'>
				{text}
			</Link>
		</Magnet>
	);
}

export default ContactBtn;
