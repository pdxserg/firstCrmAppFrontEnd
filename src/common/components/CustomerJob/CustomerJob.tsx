// @flow
import styles from'./CustomerJob.module.css'
import {useEffect, useState} from "react";
import {CustomerJob2} from "./CustomerJob2.tsx";
import {Details} from "./Details/Details.tsx";
import {useParams} from "react-router-dom";
import {useGetJobsByIdQuery} from "../../../features/jobs/api/jobApi.ts";
import {JobType} from "../../../features/jobs/UI/job/Job.tsx";


type Tab = 'details' | 'items' | 'estimates'  | 'payments' | 'attachments';


export const CustomerJob = () => {

	const { id } = useParams()
	const{data}=useGetJobsByIdQuery({id})


	const [activeTab, setActiveTab] = useState<Tab>('details');
	const [jobInfo, setJobInfo] = useState<JobType>({
		jobId: "string",
		jobNumber: 0,
		customerId: "string",
		customerName: "string",
		customerEmail: "string",
		customerPhone: "string",
		jobDetails:{description:"string", typeEquipment:"string"},
		address:{
			houseStreet:"string",
			suitApt:"string",
			city:"string",
			state:"string",
			zip:"string",
		}
	})



	useEffect(() => {
		if (data){
			setJobInfo(data.job)

		}
	}, [data]);



	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		console.log(name,value)
		setJobInfo({
			...jobInfo,
			[name]: value
		});
	};

	const handleSave = () => {
		alert('Customer information saved!');
		  // console.log(customerInfo.customerName);
	};


	   if (!jobInfo) return <div>Customer not found</div>;
	const renderTabContent = () => {
		switch (activeTab) {
			case 'details':
				return <Details jobInfo={jobInfo} handleInputChange={handleInputChange}/>
			case 'items':
				return   < CustomerJob2 />
			case 'payments':
				return <div className={styles.tabContent}>Payment content will be displayed here</div>;
			case 'estimates':
				return <div className={styles.tabContent}>Estimate content will be displayed here</div>;
			case 'attachments':
				return <div className={styles.tabContent}>Attach content will be displayed here</div>;
			default:
				return <div className={styles.tabContent}>Select a tab to view content</div>;
		}
	};
	// if (isLoading) return <div>Loading...</div>;
	// if (isError) return <div>Error loading customer</div>;
	//  if (!data) return <div>Customer not found</div>;

	return (
		<div className={styles.customerContainer}>
			<div className={styles.header}>
				<nav className={styles.nav}>
					<h2>Job #{jobInfo.jobNumber}-{jobInfo.customerName}</h2>
					<ul className={styles.tabs}>
						<li
							className={`${styles.tab} ${activeTab === 'details' ? styles.active : ''}`}
							onClick={() => setActiveTab('details')}
						>
							Details
						</li>
						<li
							className={`${styles.tab} ${activeTab === 'items' ? styles.active : ''}`}
							onClick={() => {setActiveTab('items')}}
						>
						 Items
						</li>
						<li
							className={`${styles.tab} ${activeTab === 'payments' ? styles.active : ''}`}
							onClick={() => setActiveTab('payments')}
						>
							Payments
						</li>
						<li
							className={`${styles.tab} ${activeTab === 'estimates' ? styles.active : ''}`}
							onClick={() => setActiveTab('estimates')}
						>
							Estimates
						</li>
						<li
							className={`${styles.tab} ${activeTab === 'attachments' ? styles.active : ''}`}
							onClick={() => setActiveTab('attachments')}
						>
							Attachments
						</li>

					</ul>
				</nav>
			</div>

			<div className={styles.content}>
				{renderTabContent()}
			</div>

			<div className={styles.footer}>
				{activeTab === "details" &&
                    <button className={styles.saveButton} onClick={handleSave}>
                        Save
                    </button>
				}
				<button className={styles.saveButton}>Action</button>
			</div>
		</div>
	);
};