
import styles from './Page404.module.css'
import {Link} from "react-router-dom";
import {Path} from "../../../app/App.tsx";


export const Page404 = () => {
	return (
		<div className={styles.page404}>
			<h1>404</h1>
			<h2>page not found</h2>
			<Link to={Path.Main}>
				<button>Main Menu</button>
			</Link>
		</div>
	)
}