export interface ICoffee {
	id: number;
	img: string;
	categories: number[];
	name: string;
	description: string;
	price: number;
}

export interface ICategory {
	id: number;
	name: string;
}

export interface IJSONBinResponse {
	metadata: {
		createdAt: Date;
		id: string;
		name: string;
		private: boolean;
	};
	record: {
		coffees: ICoffee[];
		categories: ICategory[];
		locations: string[];
	};
}
