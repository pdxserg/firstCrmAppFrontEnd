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

	const deleteJobHandler=(id:string)=>{
		// 	updateEntityStatus("loading")
		deleteTask( id)
			.unwrap()
			.then(()=>{alert("Success")})
			.catch(()=>{alert("Bud request")})
	}
	const updateHandler=(id:string,jobDetails:string)=>{
		// 	updateEntityStatus("loading")
		updateJob({id, jobDetails})
			.unwrap()
			.then(()=>{alert("Success")})
			.catch(()=>{alert("Bud request")})
	}


	return (
		<>

			{jobs!.map(el => {
				return <li key={el.id} className={styles.job}>
					<h2>Job # {el.jobNumber}</h2>
					<h3>Name: {el.customerName}</h3>
					<p>Phone: {el.customerPhone}</p>
					<p>Email: {el.customerEmail}</p>
					<p> Description: </p>
					<div className={styles.jobDescription}>
						<EditableSpan value={el.jobDetails} onChange={(e) => updateHandler(el.id, e)}/>
					</div>
					<button onClick={() => deleteJobHandler(el.id)}>Delete</button>
				</li>

			})}

		</>
	);
};