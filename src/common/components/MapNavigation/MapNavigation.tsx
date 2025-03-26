// @flow

import {AddressType} from "../AddressInput/AddressInput.tsx";

type Props = {
address:AddressType
};
export const MapNavigation = ({address}: Props) => {
	console.log(address)

	 const destination = "16001 NE 47th St  WA 98682";
	// const destination = address.houseStreet +","+address.city+","+address.zip }
	// const destination =`${address.houseStreet}, ${address.city}, ${address.zip}`
	// const destination = address.houseStreet +","+address.city+","+address.zip



const encodedDestination = encodeURIComponent(destination);
	const appleMapsUrl = `https://maps.apple.com/?daddr=${encodedDestination}&dirflg=d`;
	const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedDestination}`;
	return (
		<div>
			<p>{destination}</p>
			<div style={{display: "flex", gap: "10px"}}>


				<a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
					<button style={{
						background: "#3d9c3f",
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

		</div>
	);
};