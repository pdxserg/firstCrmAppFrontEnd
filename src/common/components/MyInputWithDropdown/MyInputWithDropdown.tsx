import {useEffect, useState} from "react";
import {CustomerType} from "../Create/CreateCustomer.tsx";
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
	}, [inputValue, names]);

	const handleSelect = (name:string, id?:string) => {
		// setInputValue(name);
		onSelect(name,id);
		setShowDropdown(false);
		setShow(false)
	};
	// const handleSelectNewCustomer = (name:string) => {
	// 	setInputValue(name);
	// 	onSelect(name);
	// 	setShowDropdown(false);
	// };
const handleClear=()=>{
	setShow(true)
	setInputValue("")
	onSelect("")
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
				<ul>
					<li>
						<button onClick={() => handleSelect(inputValue)}>
							Create New: {inputValue}
						</button>
					</li>
					{filteredNames?.map((item) => (
						<li key={item.id}>
							<button onClick={() => handleSelect(item.customerName,item.id)}>{item.customerName}</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default AutoTypeInput;