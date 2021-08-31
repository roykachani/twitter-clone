import { useEffect, useState } from 'react';
import axios from 'axios';

import { AppLayout } from 'components/AppLayout';

import styles from 'styles/HomePage.module.css';

const HomePage = () => {
	const [timeline, setTimeline] = useState([]);

	useEffect(async () => {
		const { data } = await axios.get(
			'http://localhost:3000/api/statuses/home_timeline'
		);
		setTimeline(data);
	}, []);

	return (
		<>
			<AppLayout>
				<header className={styles.header}>
					<h2>Inicio</h2>
				</header>
				<section className={styles.section}></section>
				<nav className={styles.nav}></nav>
			</AppLayout>
		</>
	);
};

export default HomePage;
