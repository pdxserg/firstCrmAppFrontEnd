
import styles from "./CustomerJobs.module.css";
import {CustomerType} from "../../Customer.tsx";




type Props = {
	customerInfo: CustomerType
};
export const CustomerJobs = ({customerInfo}: Props) => {
	console.log(customerInfo)
const jobs=[{id:1, worcDeskription:"fsdfsdfsdf"},{id:2, worcDeskription:"fsdfsdfsdf"}]

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

				{jobs.length > 0 ? (
					jobs.map((client) => (
						<div
							key={client.id}
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
									// onClick={(e) => {
									//     e.stopPropagation()
									//     setCustomerIdToDelete(client.id)
									// }}
								>{client.id}
								</button>
							</div>

							{/*Name*/}
							<div className={styles.cell}>{client.worcDeskription}</div>
							{/*Zip*/}
							<div className={styles.cell}>{client.id || '-'}</div>
							{/*Address*/}
							<div className={styles.cell}>{client.worcDeskription || '-'}</div>
							{/*City*/}
							<div className={styles.cell}>{client.worcDeskription || '-'}</div>
							{/*State*/}
							<div className={styles.cell}>{client.worcDeskription || '-'}</div>
						</div>
					))
				) : (
					<div className={styles.emptyState}>
						No clients found. Try adjusting your search or add a new client.
					</div>
				)}
			</div>
		</div>
	);
};