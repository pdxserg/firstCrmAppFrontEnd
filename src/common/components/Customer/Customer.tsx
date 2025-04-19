// Customer.tsx
import {useEffect, useState} from 'react';
import styles from './Customer.module.css';

import {useParams} from "react-router-dom";
import {useGetCustomersByIdQuery} from "../../../features/customers/api/customersApi.ts";
import {InfoTab} from "./tabContent/InfoTab/InfoTab.tsx";
import {CustomerJobs} from "./tabContent/CustomerJobs/CustomerJobs.tsx";
import {CustomerType} from "../Create/CreateCustomer/CreateCustomer.tsx";


type Tab = 'info' | 'jobs' | 'estimates' | 'invoices' | 'payments' | 'addresses';


interface CustomerProps {
	// You can add props as needed
}

const Customer: React.FC<CustomerProps> = () => {
	const {id} = useParams()
	console.log('useparam', id)
	const [activeTab, setActiveTab] = useState<Tab>('info');

	const [customerInfo, setCustomerInfo] = useState<CustomerType>(
		{
			customerId: "",
			customerName: 'Customer name',
			customerPhone: '4324523523',
			customerEmail: '',
			address: {houseStreet: "", city: '', zip: '', suitApt: "", state: ''},
			// lastName: '',
			// companyName: '',
			// secondaryPhone: '',
			// description: '',
			// adSource: '',
			// billToAddress: '234 SE 136th Ave, Vancouver, Washington 98684',
			// autoInvoicing: false,
			// allowBilling: false,
			// paymentTerms: 'Use default (use account value)',
			// parentClient: ''
		}
	)
	const {data, isLoading, isError} = useGetCustomersByIdQuery({id})

	useEffect(() => {
		if (data) {
			setCustomerInfo(data.customer)
			console.log(data.customer)
		}
	}, [data]);


	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const {name, value} = e.target;
		setCustomerInfo({
			...customerInfo,
			[name]: value
		});
	};

	const handleSave = () => {
		alert('Customer information saved!');
		console.log(customerInfo);
	};

	const renderTabContent = () => {
		switch (activeTab) {
			case 'info':
				return <InfoTab customerInfo={customerInfo} handleInputChange={handleInputChange}/>
			case 'jobs':
				return <CustomerJobs customerInfo={customerInfo}/>
			case 'estimates':
				return <div className={styles.tabContent}>Estimates content will be displayed here</div>;
			case 'invoices':
				return <div className={styles.tabContent}>Invoices content will be displayed here</div>;
			case 'payments':
				return <div className={styles.tabContent}>Payments content will be displayed here</div>;
			case 'addresses':
				return <div className={styles.tabContent}>Addresses content will be displayed here</div>;
			default:
				return <div className={styles.tabContent}>Select a tab to view content</div>;
		}
	};
	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error loading customer</div>;
	if (!data) return <div>Customer not found</div>;

	return (
		<div className={styles.customerContainer}>
			<div className={styles.header}>
				<nav className={styles.nav}>
					<ul className={styles.tabs}>
						<li
							className={`${styles.tab} ${activeTab === 'info' ? styles.active : ''}`}
							onClick={() => setActiveTab('info')}
						>
							Client Info
						</li>
						<li
							className={`${styles.tab} ${activeTab === 'jobs' ? styles.active : ''}`}
							onClick={() => setActiveTab('jobs')}
						>
							Jobs(10)
						</li>
						<li
							className={`${styles.tab} ${activeTab === 'estimates' ? styles.active : ''}`}
							onClick={() => setActiveTab('estimates')}
						>
							Estimates(0)
						</li>
						<li
							className={`${styles.tab} ${activeTab === 'invoices' ? styles.active : ''}`}
							onClick={() => setActiveTab('invoices')}
						>
							Invoices(0)
						</li>
						<li
							className={`${styles.tab} ${activeTab === 'payments' ? styles.active : ''}`}
							onClick={() => setActiveTab('payments')}
						>
							Payments(0)
						</li>
						<li
							className={`${styles.tab} ${activeTab === 'addresses' ? styles.active : ''}`}
							onClick={() => setActiveTab('addresses')}
						>
							Addresses(1)
						</li>
						<li className={styles.tab}>
							More <span className={styles.dropdownIcon}>▼</span>
						</li>
					</ul>
				</nav>
			</div>

			<div className={styles.content}>
				{renderTabContent()}
			</div>

			<div className={styles.footer}>
				{activeTab === "info" &&
                    <button className={styles.saveButton} onClick={handleSave}>
                        Save
                    </button>
				}
				<button className={styles.saveButton}>Action</button>
			</div>
		</div>
	);
};

export default Customer;