import { useEffect, useState } from 'react';
import axios from 'axios';

import { AppLayout } from 'components/AppLayout';
import Twitcooff from 'components/Twittcoff';
import { useUser } from 'hooks/useUser';
import { fetchLatestTwitts } from 'firebase/client';

import styles from 'styles/HomePage.module.css';

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
			<AppLayout>
				<header className={styles.header}>
					<h2>Inicio</h2>
				</header>
				<section className={styles.section}>
					{timeline.map(
						({ id, username, avatar, content, userId, createdAt }) => (
							<Twitcooff
								key={id}
								username={username}
								avatar={avatar}
								content={content}
								userId={userId}
								createdAt={createdAt}
							/>
						)
					)}
				</section>
				<nav className={styles.nav}></nav>
			</AppLayout>
		</>
	);
};

export default HomePage;
