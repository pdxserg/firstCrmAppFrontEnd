import styles from "./JobDescription.module.css"
type Props={
	jobDetails:string
	setJobDetails:(newDescription:string)=>void
}
export const JobDescription = ({jobDetails, setJobDetails}: Props) => {

	return (
		<>
			<label htmlFor="someName">desc:</label>
			<br/>
			<textarea id="someName"
			          name="w3review"
			          rows={4} cols={50}
			          className={styles.textArea}
			          value={jobDetails}
			          onChange={(e) => setJobDetails(e.currentTarget.value)}
			></textarea>
		</>
	)
}
