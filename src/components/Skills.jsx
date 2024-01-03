import { Counter } from "./Counter";

export const Skills = () => {
	const skills = ["react", "js", "html"];

	return (
		<>
			<h3>Skills</h3>
			<ul>
				{skills.map((element, index) => (
					<>
						<li>{element}</li>
						<Counter />
					</>
				))}
			</ul>
		</>
	);
};
