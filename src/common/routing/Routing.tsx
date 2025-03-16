import {Page404} from "../components/Page 404/Page404.tsx";
import {Header} from "../components/Header.tsx";
 import {Route, Routes} from "react-router-dom";
import {Jobs} from "../../features/jobs/UI/jobs/Jobs.tsx";
import {Main} from "../components/Main/Main.tsx";

export const Path = {
	Main: "/",
	Jobs: "/jobs",
	NotFound: "/*",
	Header: "/header",
	// Login: "/login",
} as const

export const Routing = () => {
	return (
		<Routes>
			<Route path={Path.Main} element={<Main />} />
			<Route path={Path.Jobs} element={<Jobs />} />
			<Route path={Path.NotFound} element={<Page404 />} />
			<Route path={Path.Header} element={<Header />} />
			{/*<Route path={Path.Login} element={<Login />} />*/}
		</Routes>
	)
}
