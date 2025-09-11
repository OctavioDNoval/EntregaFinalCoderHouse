import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = process.env.EXPO_PUBLIC_RTDB_URL;

export const shopApi = createApi({
	reducerPath: "shopApi",
	baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
	endpoints: (builder) => ({
		getCategories: builder.query({
			query: () => "Categorias.json",
			/*transformResponse: (res) => {
                return Object.values(res);
            },*/
		}),
		getProductsByCategory: builder.query({
			query: (category) =>
				`Productos.json?orderBy="idcategoria"&equalTo=${category}`,
			transformResponse: (res) => {
				return Object.values(res);
			},
		}),
		getProducts: builder.query({
			query: () => "Productos.json",
			transformResponse: (res) => {
				return Object.values(res);
			},
		}),
	}),
});

export const {
	useGetCategoriesQuery,
	useGetProductsByCategoryQuery,
	useGetProductsQuery,
} = shopApi;
