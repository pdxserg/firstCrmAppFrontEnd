// @flow


import AutoTypeInput from "./MyInputWithDropdown/MyInputWithDropdown.tsx";
import {useState} from "react";
import {useGetCustomersQuery} from "../../features/customers/api/customersApi.ts";

export const Home = () => {

	const destination = "16001 NE 47th St  WA 98682";


	const encodedDestination = encodeURIComponent(destination);
	const appleMapsUrl = `https://maps.apple.com/?daddr=${encodedDestination}&dirflg=d`;
	const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedDestination}`;


	const {data} = useGetCustomersQuery()
	const names = data?.items
	const [selectedName, setSelectedName] = useState<string|undefined>('');
	// const[show1,setShow1]=useState(true)
	const handleNameSelect = (name: string|undefined, id?:string) => {
		console.log(id)
		setSelectedName(name);
	};


	return (
		<div>
			<h2>My Home page</h2>

			<div>{destination}</div>
			<div style={{display: "flex", gap: "10px"}}>


				<a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
					<button style={{
						background: "#4285F4",
						color: "#fff",
						padding: "10px",
						borderRadius: "5px",
						border: "none",
						cursor: "pointer"
					}}>
						Google Maps
					</button>
				</a>

				<a href={appleMapsUrl} target="_blank" rel="noopener noreferrer">
					<button style={{
						background: "#000",
						color: "#fff",
						padding: "10px",
						borderRadius: "5px",
						border: "none",
						cursor: "pointer"
					}}>
						Apple Maps
					</button>
				</a>
			</div>

			<div>
				<AutoTypeInput names={names}   onSelect={handleNameSelect}/>
				{selectedName && <div>
                    <span>Selected: {selectedName}</span>
                    {/*<button onClick={()=>setShow1(true)}>x</button>*/}
				</div>
					}
			</div>


		</div>
	);
};




