import {Link, Outlet} from "react-router-dom";
import style from "./Layout.module.css"
import {Path} from "../../../app/App.tsx";
import {Create} from "../Create/Create.tsx";



export const Layout = () => {
	return (
		<>
			<header className={style.header}>
				<nav>
					<Link to={Path.Header}><button>Home</button></Link>
					<Link to={Path.Jobs}><button>Jobs</button></Link>
					<Link to={Path.NewJob}><button>Create</button></Link>
					<Create/>
				</nav>
			</header>
			<main>
				<Outlet/>
			</main>
			<footer className={style.footer}><span>&copy; 2025 Your Company</span></footer>

		</>
	);
};