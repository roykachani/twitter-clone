import Head from 'next/head';
import { memo, useEffect, useState } from 'react';

import { onAuthStateChanged, loginGitHub } from '../firebase/client';

import { AppLayout } from 'components/AppLayout';
import { Avatar } from 'components/Avatar';
import { Button } from 'components/Button';
import { GitHub } from 'components/Icons/GitHub';
import { colors } from 'styles/theme';
import { useRouter } from 'next/router';

const Home = () => {
	const [user, setUser] = useState(undefined);
	const router = useRouter();

	useEffect(() => {
		onAuthStateChanged(setUser);
	}, []);

	useEffect(() => {
		!!user && router.replace('/home');
	}, [user]);

	const handleClick = () => {
		try {
			loginGitHub();
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<Head>
				<title>twittCoff</title>
				<meta name="description" content="twitterev for devs" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<AppLayout>
				<section>
					<img src="/logo.png" alt="logo" />
					<h1>TwittCoff</h1>
					<h2>Habla con desarrolladores sobre desarrollo</h2>
					<div>
						{user === null && (
							<Button onClick={handleClick}>
								<GitHub fill="#fff" width={24} height={24} />
								Ingresa con GitHub
							</Button>
						)}
						{user === undefined && (
							<div>
								<p>loading...</p>
							</div>
						)}
					</div>
				</section>
			</AppLayout>
			<style jsx>
				{`
					img {
						width: 80px;
					}
					div {
						margin-top: 16px;
					}

					section {
						display: grid;
						height: 100%;
						place-content: center;
						place-items: center;
					}

					h1 {
						color: ${colors.primary};
						font-weight: 800;
						margin-bottom: 16px;
					}
					h2 {
						color: ${colors.secondary};
						font-size: 21px;
						margin: 0;
					}
				`}
			</style>
		</>
	);
};

export default memo(Home);
