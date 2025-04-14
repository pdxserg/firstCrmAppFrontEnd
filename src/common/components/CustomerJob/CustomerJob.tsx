// @flow
import styles from'./CustomerJob.module.css'
import {useState} from "react";
import {CustomerType} from "../Create/CreateCustomer/CreateCustomer.tsx";
import {CustomerJob2} from "./CustomerJob2.tsx";
import {Details} from "./Details/Details.tsx";


type Tab = 'details' | 'items' | 'estimates'  | 'payments' | 'attachments';


export const CustomerJob = () => {




	// const { id } = useParams()
	// console.log('useparam',id)
	const [activeTab, setActiveTab] = useState<Tab>('details');

	const [customerInfo, setCustomerInfo] = useState<CustomerType>(
		{
			customerId:"777",
			customerName: 'Customer name',
			customerPhone: '4324523523',
			customerEmail: '',
			address: {houseStreet:"", city:'', zip:'', suitApt:"", state:'' },
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
	// const{data, isLoading,isError}=useGetCustomersByIdQuery({id})
	//
	// useEffect(() => {
	// 	if (data){
	// 		setCustomerInfo(data.customer)
	// 		console.log(data.customer)
	// 	}
	// }, [data]);



	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
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
			case 'details':
				return <Details customerInfo={customerInfo} handleInputChange={handleInputChange}/>
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
	// if (!data) return <div>Customer not found</div>;

	return (
		<div className={styles.customerContainer}>
			<div className={styles.header}>
				<nav className={styles.nav}>
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