import { Avatar } from 'components/Avatar';
const Twittcoff = ({ id, avatar, username, content, userId, createdAt }) => {
	// console.log(id);
	return (
		<>
			<article key={id}>
				<div>
					<Avatar alt={username} src={avatar} />
				</div>
				<section>
					<header>
						<strong>{username}</strong>
						<date>{createdAt}</date>
					</header>
					<p>{content}</p>
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
