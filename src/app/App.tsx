import './App.module.css'
import {Path, Routing} from "../common/routing/Routing.tsx";
import {Link} from "react-router-dom";
import styles from './App.module.css'


function App() {

	return (
		<>
			{/*<div>Create new</div>*/}
			{/*<div>Jobs</div>*/}
			{/*<div>Customers</div>*/}
			{/*<Jobs/>*/}
			<Link className={styles.boottonToMain} to={Path.Main}>
				<button>Main</button>
			</Link>
			<Routing/>

		</>
	)
}

export default App
