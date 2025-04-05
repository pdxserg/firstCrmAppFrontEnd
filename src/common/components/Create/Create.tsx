// @flow


import {ModalRadix} from "../ModalRadix/ModalRadix.tsx";
import {useState} from "react";
import {Path} from "../../../app/App.tsx";
import {Link} from "react-router-dom";


export const Create = ( ) => {

	const [isModalOpen, setIsModalOpen] = useState(false);
	return (
		<>
			<button onClick={()=>setIsModalOpen(true)}>Create</button>
			<ModalRadix open={isModalOpen} onClose={() => setIsModalOpen(false)} title={'Search'}
			            description={" "}>
				<div>
					<Link to={Path.NewJob}><button onClick={() => setIsModalOpen(false)}>Create job</button></Link>
					<Link to={Path.NewCustomer}><button onClick={() => setIsModalOpen(false)}>Create customer</button></Link>

				</div>
			</ModalRadix>
		</>

	);
};