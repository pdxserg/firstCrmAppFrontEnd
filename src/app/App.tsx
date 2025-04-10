import './App.module.css'
import { Route, Routes} from "react-router-dom";

import {ToastContainer} from "react-toastify";
import {Main} from "../common/components/Main/Main.tsx";
import {Jobs} from "../features/jobs/UI/jobs/Jobs.tsx";
import {NewJob} from "../common/components/NewJob/NewJob.tsx";
import {Page404} from "../common/components/Page 404/Page404.tsx";
import {Layout} from "../common/components/Layout/Layout.tsx";
import {Home} from "../common/components/Home.tsx";
import {CreateCustomer} from "../common/components/Create/CreateCustomer.tsx";
import {Customers} from "../common/components/Customers/Customers.tsx";
import Customer from "../common/components/Customer/Customer.tsx";

export const Path = {
	Main: "/",
	Jobs: "/jobs",
	NotFound: "/*",
	Header: "/header",
	NewJob: "/jobs/new-job",
	NewCustomer: "/jobs/new-customer",
	Customers: "/customers",
	Customer: "/customer/:id"

	// Login: "/login",
} as const

function App() {
	return (
		<>
			<ToastContainer/>

			<Routes>
				<Route path={Path.Main} element={<Layout/>}>
					<Route index element={<Main />} />
					<Route path={Path.Header} element={<Home />} />
					<Route path={Path.Jobs} element={<Jobs />} />
					<Route path={Path.NewJob} element={<NewJob />} />
					<Route path={Path.NewCustomer} element={<CreateCustomer />} />
					<Route path={Path.Customers} element={<Customers />} />
					{/*<Route path="/customer/:id" element={<CustomerDetail />} />*/}
					<Route path={Path.Customer} element={<Customer />} />
					<Route path={Path.NotFound} element={<Page404 />} />


					{/*<Route path={Path.Login} element={<Login />} />*/}
				</Route>

			</Routes>


		</>
	)
}

export default App
