import { colors } from '../../styles/theme';

export const Button = ({ children, onClick }) => {
	return (
		<>
			<button onClick={onClick}>{children}</button>
			<style jsx>{`
				button {
					align-items: center;
					background: ${colors.black};
					border: 0;
					color: #fff;
					cursor: pointer;
					border-radius: 9999px;
					display: flex;
					font-weight: 800;
					font-size: 16px;
					padding: 8px 24px;
					transition: opacity 0.3 ease;
				}
				button > :global(svg) {
					margin-right: 8px;
				}

				button:hover {
					opacity: 0.7;
				}
			`}</style>
		</>
	);
};
