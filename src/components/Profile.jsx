export const Profile = ({ name, email }) => {
	return (
		<>
			<h1>{name}</h1>
			<a href={`mailto:${email}`}>{email}</a>
		</>
	);
};
