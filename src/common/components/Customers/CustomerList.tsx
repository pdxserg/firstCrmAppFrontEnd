// ClientTable.tsx
import {useState} from 'react';
import styles from './CustomerList.module.css';
import {AddressType} from "../AddressInput/AddressInput.tsx";
import {ModalRadix} from "../ModalRadix/ModalRadix.tsx";
import {useDeleteCustomerMutation} from "../../../features/customers/api/customersApi.ts";
import {toast} from "react-toastify";
import {CreateCustomer} from "../Create/CreateCustomer.tsx";
import {useNavigate} from "react-router-dom";

export interface ClientType {
	id: string;
	name: string;
	email?: string;
	// company?: string;
	address?: string;
	phone?: string;
	// created?: string;
}

export type CustomerType = {
	id: string,
	customerName: string
	customerEmail: string
	customerPhone: string
	address: AddressType

};


type CustomerProps = {
	customers: CustomerType[] | undefined;
	// onClientSelect?: (client: CustomerType) => void;
	// onAddClient?: () => void;
}

export const CustomerList = ({
	                             customers,
                             }: CustomerProps) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [selectedClientIds, setSelectedClientIds] = useState<string[]>([]);
	const [customerIdToDelete, setCustomerIdToDelete] = useState<null | string>(null);
	const [showAddForm, setShowAddForm] = useState(false);

	const navigate =useNavigate()
	const [deleteCustomer] = useDeleteCustomerMutation()



	const deleteCustomerHandler = (id: string) => {
		setCustomerIdToDelete(null)
		deleteCustomer(id)
			.unwrap()
			.then((res) => {
				toast.success(res.message)
			})
			.catch((error) => { // Type assertion
				if (error && error.data && error.data.error) {
					toast.error(error.data.error);
				} else {
					toast.error("An unexpected error occurred.");
				}
			})

	}


	const handleClientSelect = (id: string) => {
		navigate(`/customer/${id}`)

	};

	const handleCheckboxChange = (clientId: string) => {
		setSelectedClientIds(prev =>
			prev.includes(clientId)
				? prev.filter(id => id !== clientId)
				: [...prev, clientId]
		);
	};

	const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			setSelectedClientIds(customers!.map(client => client.id));
		} else {
			setSelectedClientIds([]);
		}
	};

	const filteredClients = customers
		? customers.filter(client =>
			client.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
			(client.customerEmail && client.customerEmail.toLowerCase().includes(searchTerm.toLowerCase())) ||
			(client.customerPhone && client.customerPhone.toLowerCase().includes(searchTerm.toLowerCase()))
		)
		: [];


	if (!customers) {
		return (
			<div className={styles.tableContainer}>
				<div className={styles.tableHeader}>
					{/* Your header content */}
				</div>
				<div className={styles.emptyState}>
					Loading customers...
				</div>
			</div>
		);
	}

	return (
		<div className={styles.tableContainer}>

			<ModalRadix open={!!customerIdToDelete} onClose={() => setCustomerIdToDelete(null)}
			            title={'Delete Customer'}
			            description={`Are you sure you want to delete Customer ?`}>
				<div>
					<button onClick={() => {
						if (customerIdToDelete) {
							deleteCustomerHandler(customerIdToDelete)
						}
					}
					}>YES
					</button>
					<button onClick={() => setCustomerIdToDelete(null)}>NO</button>
				</div>
			</ModalRadix>

			<div className={styles.tableHeader}>
				<div className={styles.searchContainer}>
					<input
						type="text"
						placeholder="Search"
						className={styles.searchInput}
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
				<div className={styles.actions}>
					<button className={styles.addButton} onClick={()=>setShowAddForm(true)}>
						+ Add Client
					</button>
				</div>
			</div>
			{showAddForm &&
				<div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <CreateCustomer
                            onSuccess={() => setShowAddForm(false)}
                            onCancel={() => setShowAddForm(false)}
                        />
					</div>
				</div>
					}
                    <div className={styles.table}>
                        <div className={styles.tableRow + ' ' + styles.headerRow}>
                            <div className={styles.checkboxCell}>
                                <input
                                    type="checkbox"
                                    onChange={handleSelectAll}
                                    checked={selectedClientIds.length === customers!.length && customers!.length > 0}
                                />
                            </div>
                            <div className={styles.cell}>ID</div>
                            <div className={styles.cell}>Name</div>
                            <div className={styles.cell}>Company</div>
                            <div className={styles.cell}>Address</div>
                            <div className={styles.cell}>Phone</div>
                            <div className={styles.cell}>Created</div>
                        </div>

						{filteredClients.length > 0 ? (
							filteredClients.map((client) => (
								<div
									key={client.id}
									className={styles.tableRow}
									onClick={() => handleClientSelect(client.id)}
								>
									<div className={styles.checkboxCell} onClick={(e) => e.stopPropagation()}>
										<input
											type="checkbox"
											checked={selectedClientIds.includes(client.id)}
											onChange={() => handleCheckboxChange(client.id)}
										/>
									</div>
									<div className={styles.cellID}>
										<button  className={styles.deleteButton}
										         onClick={(e) =>{
											         e.stopPropagation()
													 setCustomerIdToDelete(client.id)
										}}
										>x</button>
									</div>
									<div className={styles.nameCell}>
										<div>{client.customerName}</div>
										{client.customerEmail &&
                                            <div className={styles.email}>{client.customerEmail}</div>}
									</div>
									<div className={styles.cell}>{client.id || '-'}</div>
									<div
										className={styles.cell}>{client.address.houseStreet + " " + client.address.city || '-'}</div>
									<div className={styles.cell}>
										{client.customerPhone ? (
											<a href={`tel:${client.customerPhone}`} className={styles.phoneLink}
											   onClick={(e) => e.stopPropagation()}>
												{client.customerPhone}
											</a>
										) : '-'}
									</div>
									<div className={styles.cell}>{'-'}</div>
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