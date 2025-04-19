// @flow
import styles from './Job.module.css'
import {useDeleteJobMutation, useUpdateJobMutation} from "../../api/jobApi.ts";
import {EditableSpan} from "../../../../common/components/EditableSpan/EditableSpan.tsx";
import {toast} from "react-toastify";

import {ModalRadix} from "../../../../common/components/ModalRadix/ModalRadix.tsx";
import {useState} from "react";
import {AddressType} from "../../../../common/components/Create/CreateCustomer/components/AddressInput/AddressInput.tsx";
import {MapNavigation} from "../../../../common/components/MapNavigation/MapNavigation.tsx";

export type JobType = {
	jobId: string,
	jobNumber: number
	customerId: string
	customerName: string
	customerEmail: string
	customerPhone: string
	jobDetails:{description:string, typeEquipment:string}
	address:AddressType

};
type Props = {
	jobs: JobType[] | undefined
}

export const Job = ({jobs}: Props) => {
	const [updateJob] = useUpdateJobMutation()
	const [deleteTask] = useDeleteJobMutation()
	const [jobIdToDelete, setJobIdToDelete] = useState<null | string>(null);



	const deleteJobHandler = (jobIdToDelete: string) => {
		// 	updateEntityStatus("loading")
		setJobIdToDelete(null)
		deleteTask(jobIdToDelete)
			.unwrap()
			.then((res) => {
				toast.success(res.message)
			})
			.catch((error) => { // Type assertion
				if (error && error.data && error.data.error) {
					toast.error(error.data.error);
				} else {
					toast.error("An unexpected error occurred.");
				}
			});
	}

	const updateHandler = (jobId: string,
	                       customerName?: string,
	                       customerEmail?: string,
	                       customerPhone?: string,
	                       jobDetails?: string,
	) => {

		// 	updateEntityStatus("loading")
		updateJob({jobId, jobDetails, customerName, customerEmail, customerPhone})

			.unwrap()
			.then((res) => {
				toast.success(res.message)
			})
			.catch((error) => { // Type assertion
				if (error && error.data && error.data.error) {
					toast.error(error.data.error);
				} else {
					toast.error("An unexpected error occurred.");
				}
			});
	}


	return (
		<>
			{jobs!.map(el => {
				return <li key={el.jobId} className={styles.job}>
					<h2>Job # {el.jobNumber}</h2>

					<p>Address:</p>

					<MapNavigation address={el.address}/>
					<p>Name:
						<EditableSpan value={el.customerName}
						              onChange={(customerName) => updateHandler(el.jobId, customerName)}/>
					</p>

					<p>Phone:
						<EditableSpan value={el.customerPhone}
						              onChange={(customerPhone) => updateHandler(el.jobId, undefined, undefined, customerPhone)}/>
					</p>

					<p>Email:
						<EditableSpan value={el.customerEmail}
						              onChange={(customerEmail) => updateHandler(el.jobId, undefined, customerEmail)}/>
					</p>
					<div>
						<h3>Address</h3>
						<p>some address</p>

					</div>
					<h3> Description: </h3>
					<div>{el.jobDetails.typeEquipment}</div>
					<div className={styles.jobDescription}>
						<EditableSpan value={el.jobDetails.description}
						              onChange={(jobDetails) => updateHandler(el.jobId, undefined, undefined, undefined, jobDetails)}/>
					</div>

					<button onClick={() => setJobIdToDelete(el.jobId)}>Delete</button>

				</li>

			})}
			<ModalRadix open={!!jobIdToDelete} onClose={() => setJobIdToDelete(null)} title={'Delete Post'}
			            description={`Are you sure you want to delete this post ?`}>
				<div>
					<button onClick={() => {
						if(jobIdToDelete){
							deleteJobHandler(jobIdToDelete)
						}
					}
					}>YES</button>
					<button onClick={() => setJobIdToDelete(null)}>NO</button>
				</div>
			</ModalRadix>
		</>
	);
};