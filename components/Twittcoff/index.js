import { Avatar } from 'components/Avatar';
const Twittcoff = ({ id, avatar, username, message }) => {
	// console.log(id);
	return (
		<>
			<article key={id}>
				<div>
					<Avatar alt={username} src={avatar} />
				</div>
				<section>
					<strong>{username}</strong>
					<p>{message}</p>
				</section>
			</article>
			<style jsx>{`
				article {
					border-bottom: 2px solid #eee;
					display: flex;
					padding: 10px 15px;
				}
				div {
					padding-right: 8px;
				}
				p {
					margin: 0;
					line-height: 1.31;
				}
			`}</style>
		</>
	);
};

export default Twittcoff;
