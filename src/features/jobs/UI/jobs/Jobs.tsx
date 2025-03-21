// @flow
import styles from './Jobs.module.css'
import {Job} from "../job/Job.tsx";
import {useGetJobsQuery} from "../../../../jobApi.ts";
import { useState} from "react";

export const Jobs = () => {
const[jobNumber,setJobNumber]=useState<number|null|undefined>(undefined)
	const [searchParams, setSearchParams]=useState<string>("")
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
				<input type="text" value={searchParams} onChange={(e)=>setSearchParams(e.currentTarget.value)}/>
				<button onClick={()=>setJobNumber(+searchParams)}>Search</button>
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