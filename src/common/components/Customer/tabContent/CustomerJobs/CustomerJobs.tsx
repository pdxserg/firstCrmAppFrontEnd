import styles from "./CustomerJobs.module.css";
import {useNavigate} from "react-router-dom";
import {JobType} from "../../../../../features/jobs/UI/job/Job.tsx";


type Props = {
	jobs: JobType[]|undefined
};
export const CustomerJobs = ({jobs}: Props) => {


	const navigate = useNavigate()


	const handleRedirectToJob = (id: string) => {
		navigate(`/job/${id}`)

	}


	return (
		<div className={styles.tableContainer}>

			<div className={styles.tableHeader}>
				<div className={styles.searchContainer}>
					<input
						type="text"
						placeholder="Search"
						className={styles.searchInput}
						// value={searchTerm}
						// onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
			</div>
			<div className={styles.table}>
				<div className={styles.tableRow + ' ' + styles.headerRow}>
					<div className={styles.checkboxCell}>
						<input
							type="checkbox"
							// onChange={handleSelectAll}
							// checked={selectedClientIds.length === customers!.length && customers!.length > 0}
						/>
					</div>
					<div className={styles.cell}>ID</div>
					<div className={styles.cell}>Name</div>
					<div className={styles.cell}>Zip</div>
					<div className={styles.cell}>Address</div>
					<div className={styles.cell}>City</div>
					<div className={styles.cell}>State</div>
				</div>

				{jobs ? (
					jobs.length > 0 ? (
						jobs.map((job) => (
							<div
								key={job.jobId}
								className={styles.tableRow}
								// onClick={() => handleClientSelect(client.id)}
							>
								<div className={styles.checkboxCell} onClick={(e) => e.stopPropagation()}>
									<input
										type="checkbox"
										// checked={selectedClientIds.includes(client.id)}
										// onChange={() => handleCheckboxChange(client.id)}
									/>
								</div>

								{/*ID*/}
								<div className={styles.cellID}>
									<button className={styles.deleteButton}
									        onClick={() => {
										        handleRedirectToJob(job.jobId)
										        //     e.stopPropagation()
										        //     setCustomerIdToDelete(client.id)
									        }}
									>{job.jobNumber}
									</button>
								</div>

								{/*Name*/}
								<div className={styles.cell}>{job.jobDetails.typeEquipment}</div>
								{/*Zip*/}
								<div className={styles.cell}>{job.jobDetails.typeEquipment || '-'}</div>
								{/*Address*/}
								<div className={styles.cell}>{job.jobDetails.typeEquipment || '-'}</div>
								{/*City*/}
								<div className={styles.cell}>{job.jobDetails.typeEquipment || '-'}</div>
								{/*State*/}
								<div className={styles.cell}>{job.jobDetails.typeEquipment || '-'}</div>
							</div>
						))
					) : (
						<div className={styles.emptyState}>
							No clients found. Try adjusting your search or add a new client.
						</div>
					)
				) : (
					<div>loading</div>
				)}
			</div>
		</div>
	);
};