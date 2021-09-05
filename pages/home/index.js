import Link from 'next/link';
import { useEffect, useState } from 'react';

import Twitcooff from 'components/Twittcoff';
import { useUser } from 'hooks/useUser';
import { fetchLatestTwitts } from 'firebase/client';

import styles from 'styles/HomePage.module.css';
import { CreateIcon } from 'components/Icons/Create';
import { HomeIcon } from 'components/Icons/Home';
import { SearchIcon } from 'components/Icons/Search';
import Head from 'next/head';

const HomePage = () => {
	const [timeline, setTimeline] = useState([]);
	const user = useUser();

	useEffect(async () => {
		if (user) {
			const timeline = await fetchLatestTwitts();
			setTimeline(timeline);
		}
	}, [user]);

	return (
		<>
			<Head>
				<title>Inicio / TwittCoff</title>
				<meta name="description" content="Inicio TwittCoff" />
			</Head>
			<header className={styles.header}>
				<h2>Inicio</h2>
			</header>
			<section className={styles.section}>
				{timeline.map(
					({ id, username, avatar, content, img, userId, createdAt }) => (
						<Twitcooff
							key={id}
							username={username}
							avatar={avatar}
							content={content}
							img={img}
							userId={userId}
							createdAt={createdAt}
						/>
					)
				)}
			</section>
			<nav className={styles.nav}>
				<Link href="/home">
					<a className={styles.anchor}>
						<HomeIcon width={32} height={32} />
					</a>
				</Link>
				<Link href="/search">
					<a className={styles.anchor}>
						<SearchIcon width={32} height={32} />
					</a>
				</Link>
				<Link href="/compose/tweet">
					<a className={styles.anchor}>
						<CreateIcon width={32} height={32} />
					</a>
				</Link>
			</nav>
		</>
	);
};

export default HomePage;
