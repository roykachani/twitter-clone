import Head from 'next/head';
import { memo, useEffect, useState } from 'react';

import { onAuthStateChanged, loginGitHub } from '../firebase/client';

import { AppLayout } from 'components/AppLayout';
import { Avatar } from 'components/Avatar';
import { Button } from 'components/Button';
import { GitHub } from 'components/Icons/GitHub';
import { colors } from 'styles/theme';

const Home = () => {
	const [user, setUser] = useState(undefined);

	useEffect(() => {
		onAuthStateChanged(setUser);
		// console.log('hola');
	}, []);
	// console.log(user);

	const handleClick = () => {
		try {
			// const user = await loginGitHub();
			// setUser(user);
			loginGitHub().then((user) => {
				setUser(user);
			});
			// console.log('holaara');
		} catch (e) {
			console.log(e);
		}
	};

	// console.log('holaarafuera');
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
						{user && user.avatar && (
							<div>
								<Avatar alt={user.username} src={user.avatar} withText />
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
