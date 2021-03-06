import Head from 'next/head';
import { memo, useEffect, useState } from 'react';

import { loginGitHub } from '../firebase/client';

import { Button } from 'components/Button';
import { GitHubIcon } from 'components/Icons/GitHub';
import { colors } from 'styles/theme';
import { useRouter } from 'next/router';
import { useUser, USER_STATES } from 'hooks/useUser';

const Home = () => {
	const user = useUser();
	const router = useRouter();

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

			<section>
				<img src="/logo.png" alt="logo" />
				<h1>TwittCoff</h1>
				<h2>Habla con desarrolladores sobre desarrollo</h2>
				<div>
					{user === USER_STATES.NOT_LOGGED && (
						<Button onClick={handleClick}>
							<GitHubIcon fill="#fff" width={24} height={24} />
							Ingresa con GitHub
						</Button>
					)}
					{user === USER_STATES.NOT_KNOWN && (
						<div>
							<p>loading...</p>
						</div>
					)}
				</div>
			</section>

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
