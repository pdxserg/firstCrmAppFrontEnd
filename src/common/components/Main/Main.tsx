// @flow


import {Path} from "../../routing/Routing.tsx";
import {Link} from "react-router-dom";

export const Main = () => {
	return (
		<div>
			<p>Let's working</p>
			<Link to={Path.Jobs}>
				<button>Jobs</button>
			</Link>
			<Link to={Path.NotFound}>
				<button>Error</button>
			</Link>
			<Link to={Path.NewJob}>
				<button>New Job</button>
			</Link>

		</div>
	);
};