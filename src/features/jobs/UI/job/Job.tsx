// @flow
import styles from './Job.module.css'
import {useDeleteJobMutation, useUpdateJobMutation} from "../../../../jobApi.ts";
import {EditableSpan} from "../../../../common/components/EditableSpan/EditableSpan.tsx";

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
	const [updateJob]=useUpdateJobMutation()
	const [deleteTask] = useDeleteJobMutation()
	// const removeTask = () => {
	// 	updateEntityStatus("loading")
	// 	deleteTask({ taskId: task.id, todolistId: todo.id })
	// 		.unwrap()
	// 		.then(() => {
	// 			updateEntityStatus("succeeded")
	// 		})
	// 		.catch(() => {
	// 			updateEntityStatus("failed")
	// 		})
	// }
	const deleteJobHandler=(id:string)=>{
		deleteTask( id)
	}
	const updateHandler=(id:string,jobDetails:string)=>{
		// eslint-disable-next-line no-debugger
		debugger
		updateJob({id, jobDetails})
	}


	return (
		<>

			{jobs!.map(el => {
				return <li key={el.id} className={styles.job}>
					<h2>Job # {el.jobNumber}</h2>
					<h3>Name: {el.customerName}</h3>
					<p>Phone: {el.customerPhone}</p>
					<p>Email: {el.customerEmail}</p>
					<div className={styles.jobDescription}>
						<span> Description: </span>
						<EditableSpan value={el.jobDetails} onChange={(e)=>updateHandler(el.id,e)}/>

					</div>
					<button onClick={()=>deleteJobHandler(el.id)}>Delete</button>
				</li>

			})}

		</>
	);
};