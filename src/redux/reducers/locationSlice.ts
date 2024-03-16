import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ILocation {
	location: string;
	state: string;
	allowance: number;
}

interface LocationState {
	locations: ILocation[];
	currentLocation: ILocation;
	isLoaded: boolean;
}

const initialState: LocationState = {
	locations: [],
	currentLocation: {
		location: "Porto Alegre",
		state: "RS",
		allowance: 0,
	},
	isLoaded: false,
};

const locationSlice = createSlice({
	name: "location",
	initialState,
	reducers: {
		setLocations(state, action: PayloadAction<ILocation[]>) {
			state.locations = action.payload;
		},
		setCurrentLocation(state, action: PayloadAction<ILocation>) {
			state.currentLocation = action.payload;
		},
		updateLocationsLoadingStatus(state, action: PayloadAction<boolean>) {
			state.isLoaded = action.payload;
		},
	},
});

export default locationSlice;
