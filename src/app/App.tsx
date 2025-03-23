import './App.module.css'
import {Path, } from "../common/routing/Routing.tsx";
import { Route, Routes} from "react-router-dom";

import {ToastContainer} from "react-toastify";
import {Main} from "../common/components/Main/Main.tsx";
import {Jobs} from "../features/jobs/UI/jobs/Jobs.tsx";
import {NewJob} from "../common/components/NewJob/NewJob.tsx";
import {Page404} from "../common/components/Page 404/Page404.tsx";
import {Layout} from "../common/components/Layout/Layout.tsx";


function App() {

	return (
		<>
			<ToastContainer/>

			<Routes>
				<Route path={Path.Main} element={<Layout/>}>
					<Route index element={<Main />} />
					<Route path={Path.Jobs} element={<Jobs />} />
					<Route path={Path.NewJob} element={<NewJob />} />
					<Route path={Path.NotFound} element={<Page404 />} />

					{/*<Route path={Path.Login} element={<Login />} />*/}
				</Route>

			</Routes>


		</>
	)
}

export default App
