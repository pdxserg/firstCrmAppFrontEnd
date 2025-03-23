// @flow
import styles from './Job.module.css'
import {useDeleteJobMutation, useUpdateJobMutation} from "../../../../jobApi.ts";
import {EditableSpan} from "../../../../common/components/EditableSpan/EditableSpan.tsx";
import {toast} from "react-toastify";

export type JobType = {
	id: string,
	jobNumber: number
	customerName: string
	customerEmail: string
	customerPhone: string
	jobDetails: string

};
type Props = {
	jobs: JobType[] | undefined
}

export const Job = ({jobs}: Props) => {
	const [updateJob] = useUpdateJobMutation()
	const [deleteTask] = useDeleteJobMutation()

	const deleteJobHandler = (id: string) => {
		// 	updateEntityStatus("loading")
		deleteTask(id)
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
	const updateHandler = (id: string,
	                       customerName?: string,
	                       customerEmail?: string,
	                       customerPhone?: string,
	                       jobDetails?: string,
	) => {

		// 	updateEntityStatus("loading")
		updateJob({id, jobDetails, customerName, customerEmail, customerPhone})

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
				return <li key={el.id} className={styles.job}>
					<h2>Job # {el.jobNumber}</h2>
					<p>Name:
					<EditableSpan value={el.customerName} onChange={(customerName) => updateHandler(el.id, customerName)}/>
					</p>

					<p>Phone:
					<EditableSpan value={el.customerPhone} onChange={(customerPhone) => updateHandler(el.id, undefined, undefined, customerPhone)}/>
					</p>

					<p>Email:
					<EditableSpan value={el.customerEmail} onChange={(customerEmail) => updateHandler(el.id, undefined, customerEmail)}/>
					</p>

					<p> Description: </p>
					<div className={styles.jobDescription}>
						<EditableSpan value={el.jobDetails} onChange={(jobDetails) => updateHandler(el.id,  undefined, undefined,undefined, jobDetails)}/>
					</div>

					<button onClick={() => deleteJobHandler(el.id)}>Delete</button>
				</li>

			})}

		</>
	);
};