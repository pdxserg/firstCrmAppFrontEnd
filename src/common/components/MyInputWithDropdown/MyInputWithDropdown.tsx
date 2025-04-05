import {useEffect, useState} from "react";
import {CreateCustomer, CustomerType} from "../Create/CreateCustomer.tsx";
type  Props= {
	names: CustomerType[] | undefined;
	onSelect: (name: string | undefined, id?: string) => void;
	// show1: boolean
}

const AutoTypeInput = ({ names, onSelect }:Props) => {
	const [inputValue, setInputValue] = useState('');
	const [filteredNames, setFilteredNames] = useState<CustomerType[]|undefined>([]);
	const [showDropdown, setShowDropdown] = useState(false);
	const[show,setShow]=useState(true)
	const [create, setCreate]=useState(false)

	useEffect(() => {
		if (inputValue.length >= 3 ) {
			const results = names?.filter((item) =>
				item.customerName.toLowerCase().includes(inputValue.toLowerCase())
			);
			setFilteredNames(results);
			setShowDropdown(true);
		} else {
			setShowDropdown(false);
			setFilteredNames([]);
		}
	}, [inputValue]);

	const handleSelect = (name:string, id?:string) => {
		// setInputValue(name);
		onSelect(name,id);
		setShowDropdown(false);
		setShow(false)
		setCreate(false)
	};

const handleClear=()=>{
	setShow(true)
	setInputValue("")
	onSelect("")
}
const handleCreateNewCustomer=() => {
	setCreate(true)
	// setShow(true)



}
	return (
		<div>
			{!show && (<button onClick={handleClear}>x</button>)}
			{show && (<input
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>)}
			{showDropdown && (
				<div>
					<ul>
						<li>
							<button onClick={handleCreateNewCustomer}>
								Create New: {inputValue}
							</button>

						</li>
						{filteredNames?.map((item) => (
							<li key={item.id}>
								<button
									onClick={() => handleSelect(item.customerName, item.id)}>{item.customerName}</button>
							</li>
						))}
					</ul>
					{create && <CreateCustomer name={inputValue} handleSelect={handleSelect}  />}
				</div>


			)}
		</div>
	);
};

export default AutoTypeInput;