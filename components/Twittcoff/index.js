import { Avatar } from 'components/Avatar';
import { useTimeAgo } from 'hooks/useTimeAgo';

const Twittcoff = ({
	id,
	avatar,
	username,
	content,
	img,
	userId,
	createdAt,
}) => {
	const timeago = useTimeAgo(createdAt);

	return (
		<>
			<article key={id}>
				<div>
					<Avatar alt={username} src={avatar} />
				</div>
				<section>
					<header>
						<strong>{username}</strong>
						<span> · </span>
						<span className="date">{timeago}</span>
					</header>
					<p>{content}</p>
					{!!img && <img src={img} />}
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
				img {
					border-radius: 10px;
					height: auto;
					margin-top: 10px;
					width: 100%;
				}
				.date {
					color: #555;
					font-size: 14px;
				}
			`}</style>
		</>
	);
};

export default Twittcoff;
