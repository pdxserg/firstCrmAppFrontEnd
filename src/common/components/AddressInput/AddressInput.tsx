
import  s from "./AddressInput.module.css"
	import {ChangeEvent, useState} from "react";

export type AddressType={
	houseStreet:string
	suitApt:string
	city:string
	state:string
	zip:string
}

type Props={
	onchangeAddress:(newAddress:AddressType| undefined)=>void
}
export const  AddressInput=({onchangeAddress}:Props)=>{
		const [houseStreet, setHouseStreet] = useState('');
		const [suitApt, setSuitApt] = useState('');
		const [city, setCity] = useState('');
		const [state, setState] = useState('');
		const [zip, setZip] = useState('');
		const [error, setError] = useState('');

		// const [isFull,setIsFull]=useState(false)
	const isFull=houseStreet && city && state && zip

		const newAddress:AddressType = {houseStreet, city, zip, suitApt, state}


		const handleHouseStreetChange = (e:ChangeEvent<HTMLInputElement>) => {
			setHouseStreet(e.target.value );
		};

		const handleSuitAptChange = (e:ChangeEvent<HTMLInputElement>) => {
			const value=e.target.value
				setSuitApt(value );
		};

		const handleCityChange = (e:ChangeEvent<HTMLInputElement>) => {
			const value=e.target.value
			if (value.length > 0) {
				const capitalizedValue=
					value
					.split(' ')
					.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
					.join(' ')
				setCity(capitalizedValue);
			} else {
				setCity(value);
			}

		};

		const handleStateChange = (e:ChangeEvent<HTMLInputElement>) => {
			setState(e.target.value);
		};

		const handleZipChange = (e:ChangeEvent<HTMLInputElement>) => {
			setZip(e.target.value.trim());
			setError('')
		};
	const handleBlur = () => {
		if (!/^9\d{4}$/.test(zip)) {// begin from 9, only number, length 5
			setError("errorMessage");
		}
	};
		const checkZip= zip.length===5 && zip[0]==="9"
	console.log("zip",checkZip)

		return (
			<div>
				<div>
					<label htmlFor="houseStreet">House/Street:</label>
					<input
						type="text"
						id="houseStreet"
						value={houseStreet}
						onChange={handleHouseStreetChange}
						className={houseStreet? s.inputBorderGreen:s.inputBorderRed}
					/>
				</div>

				<div>
					<label htmlFor="suitApt">Suit/Apt:</label>
					<input
						type="text"
						id="suitApt"
						value={suitApt}
						onChange={handleSuitAptChange}

					/>
				</div>

				<div>
					<label htmlFor="city">City:</label>
					<input
						type="text"
						id="city"
						value={city}
						onChange={handleCityChange}
						className={city? s.inputBorderGreen:s.inputBorderRed}
					/>
				</div>


					<div className={state? s.inputBorderGreen:s.inputBorderRed}>
						<label>State:</label>

							<label>
								<input
									style={{width: 50}}
									type="radio"
									value="WA"
									checked={state === 'WA'}
									onChange={handleStateChange}

								/>
								WA,
							</label>
							<label>
								<input
									style={{width: 50}}
									type="radio"
									value="OR"
									checked={state === 'OR'}
									onChange={handleStateChange}
								/>
								OR
							</label>

					</div>


				<div>
					<label htmlFor="zip">Zip:</label>
					<input
						type="text"
						minLength={5}
						maxLength={5}
						id="zip"
						value={zip}
						onChange={handleZipChange}
						onBlur={handleBlur}
						className={!checkZip? s.inputBorderRed: s.inputBorderGreen}
					/>
					{error && <p style={{color: "red"}}>wrong zip code</p>}
				</div>
				<button onClick={()=>onchangeAddress(newAddress)}
				        disabled={!isFull ||!checkZip }
				className={isFull? s.buttonGreen:s.buttonRed}
				>save</button>
			</div>
		);
}

