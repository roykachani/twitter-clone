import { useEffect, useState } from 'react';
import axios from 'axios';

import { AppLayout } from 'components/AppLayout';
import Twitcooff from 'components/Twittcoff';

import styles from 'styles/HomePage.module.css';
import { useUser } from 'hooks/useUser';

const HomePage = () => {
	const [timeline, setTimeline] = useState([]);
	const user = useUser();

	useEffect(async () => {
		if (user) {
			const { data } = await axios.get(
				'http://localhost:3000/api/statuses/home_timeline'
			);
			setTimeline(data);
		}
	}, [user]);

	return (
		<>
			<AppLayout>
				<header className={styles.header}>
					<h2>Inicio</h2>
				</header>
				<section className={styles.section}>
					{timeline.map(({ id, username, avatar, message }) => (
						<Twitcooff
							key={id}
							username={username}
							avatar={avatar}
							message={message}
						/>
					))}
				</section>
				<nav className={styles.nav}></nav>
			</AppLayout>
		</>
	);
};

export default HomePage;
