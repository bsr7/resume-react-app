import "./App.css";
import { EE } from "./components/EE.jsx";
import { Profile } from "./components/Profile.jsx";
import { Skills } from "./components/Skills.jsx";

function App() {
	return (
		<>
			{/* <Profile name="Byron Richards" email="bsr7cxp@virginia.edu" /> */}
			{/* <EE title="Education" item1="UVA" item2="CS" item3="DSA" />
			<EE title="Experience" item1="SWE" item2="worked on app" item3="won award" /> */}
			<Skills />
		</>
	);
}

export default App;
