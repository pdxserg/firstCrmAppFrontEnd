// @flow
import styles from './Jobs.module.css'
import {Job} from "../job/Job.tsx";
import {useGetJobsQuery} from "../../../../jobApi.ts";


// const jobs: JobType[]=[
// 	{id:'1', jobNumber: 1 , customerName:'Maik', customerEmail:"@", customerPhone: 3332222, jobDetails:'some description' },
// 	{id:'2', jobNumber: 2 , customerName:'Bob', customerEmail:"@", customerPhone: 3332222, jobDetails:'some description' },
// 	{id:'3', jobNumber: 3 , customerName:'Darren', customerEmail:"@", customerPhone: 3332222, jobDetails:'some description' }
// ]
export const Jobs = () => {
const{data}=useGetJobsQuery()
	console.log(data)
	if (!data) {
		return <div>No jobs found.
			<button>Search</button>
		</div>;
	}
	return (
		<div>

		<ul className={styles.jobs}>
			<Job jobs={data}/>
			</ul>
		</div>
	);
};