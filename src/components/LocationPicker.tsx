import { FC, useEffect, useRef, useState } from "react";

import MarkerIcon from "../img/icons/marker.svg?react";
import { useAppSelector } from "../hooks/useAppSelector";
import classNames from "classnames";
import { ILocation } from "../redux/reducers/locationSlice";
import { useActions } from "../hooks/useActions";

const LocationPicker: FC = () => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const locationPickerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (locationPickerRef.current && !locationPickerRef.current.contains(event.target as Node)) {
				setIsActive(false);
			}
		};

		document.body.addEventListener("click", handleClickOutside);

		return () => {
			document.body.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const mainClasses = classNames("location-picker", { ["location-picker_active"]: isActive });

	const { currentLocation: cl, locations } = useAppSelector((state) => state.location);
	const { setCurrentLocation } = useActions();

	const handleToggle = () => {
		setIsActive((prev) => !prev);
	};

	const handlePickLocation = (location: ILocation) => {
		setCurrentLocation(location);
		setIsActive(false);

		localStorage.setItem("location", JSON.stringify(location));
	};

	return (
		<div ref={locationPickerRef} className={mainClasses}>
			<div className="location-picker__header" onClick={handleToggle}>
				<MarkerIcon />
				<span className="text text_s">{`${cl.location}, ${cl.state}`}</span>
			</div>
			<div className="location-picker__content">
				<div className="location-picker__wrapper">
					<ul className="location-picker__list">
						{locations.map((location, index) => (
							<li
								className={`location-picker__item${
									cl.location === location.location && cl.state === location.state ? " location-picker__item_current" : ""
								}`}
								key={index}
								onClick={() => handlePickLocation(location)}
							>
								{location.location}, {location.state}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default LocationPicker;
