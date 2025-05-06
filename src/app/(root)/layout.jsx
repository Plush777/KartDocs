import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import { cookies } from 'next/headers';

export default function MainLayout({ children }) {
	const cookieStore = cookies();

	/*
    cookies: {name: cookie이름 , value: cookie 값} 형식으로 저장됨.
  */
	const serverStates = {
		// 올바른 fallback 값 설정
		theme: cookieStore.get('theme')?.value || 'light',
		fontSize: cookieStore.get('fontSize')?.value || 'default',
	};

	console.log(serverStates.theme);
	console.log(serverStates.fontSize);

	return (
		<>
			<Header serverStates={serverStates} />
			{children}
			<Footer />
		</>
	);
}
