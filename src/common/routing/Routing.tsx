
import {Header} from "../components/Header.tsx";

export const Path = {
	Main: "/",
	Jobs: "/jobs",
	NotFound: "/*",
	Header: "/header",
	NewJob: "/jobs/new",
	// Login: "/login",
} as const

export const Routing = () => {
	return (
		<>
			<Header/>

		</>

	)
}
