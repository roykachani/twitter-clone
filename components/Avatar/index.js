import styles from './styles.module.css';

export const Avatar = ({ alt, src, text, withText }) => {
	return (
		<div className={styles.container}>
			<img className={styles.avatar} alt={alt} src={src} title={alt} />
			{!!withText && <strong>{text || alt}</strong>}
		</div>
	);
};
