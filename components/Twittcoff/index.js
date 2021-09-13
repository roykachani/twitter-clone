import Link from 'next/link';
import { useRouter } from 'next/router';

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
	const router = useRouter();

	const handleArticle = (e) => {
		e.preventDefault();
		router.push(`/${username}/status/${id}`);
	};

	return (
		<>
			<article key={id} onClick={handleArticle}>
				<div>
					<Avatar alt={username} src={avatar} />
				</div>
				<section>
					<header>
						<strong>{username}</strong>
						<span> · </span>
						<Link href={`/${username}/status/${id}`}>
							<a>
								<time>{timeago}</time>
							</a>
						</Link>
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
				article:hover {
					background: #f5f5f5;
					cursor: pointer;
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
				a {
					color: #555;
					font-size: 14px;
					text-decoration: none;
				}

				a:hover {
					text-decoration: underline;
				}
			`}</style>
		</>
	);
};

export default Twittcoff;
