// @flow


import {ModalRadix} from "../ModalRadix/ModalRadix.tsx";
import {useState} from "react";
import {Path} from "../../../app/App.tsx";
import {Link} from "react-router-dom";
import styles from "../Customers/CustomerList.module.css";
import {CreateCustomer} from "./CreateCustomer.tsx";


export const Create = ( ) => {

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [showAddForm, setShowAddForm] = useState(false);

	const handleCreateCustomer=()=>{
		setShowAddForm(true)
		setIsModalOpen(false)
	}

	return (
		<>
			<button onClick={()=>setIsModalOpen(true)}>Create</button>


			<ModalRadix open={isModalOpen} onClose={() => setIsModalOpen(false)} title={'Create something new:'}
			            description={" "}>
				<div>
					<Link to={Path.NewJob}><button onClick={() =>setIsModalOpen(false) }>Create job</button></Link>

					<button onClick={handleCreateCustomer}>Create customer</button>
				</div>
			</ModalRadix>
			{showAddForm &&
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <CreateCustomer
                            onSuccess={() => setShowAddForm(false)}
                            onCancel={() => setShowAddForm(false)}
                        />
                    </div>
                </div>
			}

		</>

	);
};