// @flow
import styles from './Jobs.module.css'
import {Job} from "../job/Job.tsx";
import {useGetJobsQuery} from "../../../../jobApi.ts";
import {useState} from "react";



// const jobs: JobType[]=[
// 	{id:'1', jobNumber: 1 , customerName:'Maik', customerEmail:"@", customerPhone: 3332222, jobDetails:'some description' },
// 	{id:'2', jobNumber: 2 , customerName:'Bob', customerEmail:"@", customerPhone: 3332222, jobDetails:'some description' },
// 	{id:'3', jobNumber: 3 , customerName:'Darren', customerEmail:"@", customerPhone: 3332222, jobDetails:'some description' }
// ]
export const Jobs = () => {
const[jobNumber,setJobNumber]=useState<number|null|undefined>(undefined)
	console.log(jobNumber)
		const{data, refetch}=useGetJobsQuery({jobNumber})



	if (!data || data.items.length === 0) {
		return <div>No jobs found.
			<button onClick={()=>setJobNumber(0)}>Search2</button>
		</div>;
	}
	return (
		<div className={styles.jobsContainer}>
			<div>
				<span>Find job</span>
				<br/>
				<input type="text"/>
				<button onClick={()=>setJobNumber(6)}>Search</button>
			</div>
			<div>
				<button onClick={refetch}>All jobs</button>
				<button onClick={()=>setJobNumber(undefined)}  >Refresh</button>
			</div>
			<ul className={styles.jobs}>
				<Job jobs={data.items}/>
			</ul>
		</div>
	);
};