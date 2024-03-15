import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IJSONBinResponse } from "../types";

export const coffeeApi = createApi({
	reducerPath: "coffeeApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://api.jsonbin.io/v3/b/65f48797266cfc3fde98e9e4/latest" }),
	endpoints: (build) => ({
		fetchAll: build.query<IJSONBinResponse, string>({
			query: () => ({
				url: "",
				method: "GET",
				headers: {
					"X-Master-Key": "$2b$10$ou1eG5cCVElqaTRE0N33zeHeGocpZk0H0e0.5jO4GeIVd2vaN.5zq",
					"X-Access-Key": "$2b$10$Yet/6G1q6JkV8tA48ACv/OF/eXoS9XpX8uCCK1/38M3MjqcviVUz.",
				},
			}),
		}),
	}),
});
