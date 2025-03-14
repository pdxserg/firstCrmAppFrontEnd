import {useState} from 'react'
import './App.css'
import {Header} from "../components/Header.tsx";
import {Jobs} from "../features/jobs/UI/jobs/Jobs.tsx";

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<Header/>
			<Jobs/>
			<h1>Vite + React23</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR!!!!
				</p>
			</div>

		</>
	)
}

export default App
