import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = "https://coderhouse-entrega-final-default-rtdb.firebaseio.com/";
export const profileAPI = createApi({
	reducerPath: "profileAPI",
	baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
	endpoints: (builder) => ({
		getProfilePic: builder.query({
			query: (localId) => `profileData/${localId}.json`,
		}),
		updateProfilePic: builder.mutation({
			query: ({ localId, img }) => ({
				url: `profileData/${localId}.json`,
				method: "PATCH",
				body: {
					image: img,
				},
			}),
		}),
		updateProfileName: builder.mutation({
			query: ({ localId, name }) => ({
				url: `profileData/${localId}.json`,
				method: "PATCH",
				body: {
					name: name,
				},
			}),
		}),
		updateProfileLastName: builder.mutation({
			query: ({ localId, lastname }) => ({
				url: `profileData/${localId}.json`,
				method: "PATCH",
				body: {
					lastname: lastname,
				},
			}),
		}),
		updateProfileCel: builder.mutation({
			query: ({ localId, cel }) => ({
				url: `profileData/${localId}.json`,
				method: "PATCH",
				body: {
					cel: cel,
				},
			}),
		}),
		getProfile: builder.query({
			query: (localId) => `profileData/${localId}.json`,
		}),
		addProductToCart: builder.mutation({
			query: ({ localId, product }) => ({
				url: `profileData/${localId}/cart/${product.id}.json`,
				method: "PATCH",
				body: product,
			}),
		}),
		removeProductFromCart: builder.mutation({
			query: ({ localId, productId }) => ({
				url: `profileData/${localId}/cart/${productId}.json`,
				method: "DELETE",
			}),
		}),
		getCart: builder.query({
			query: (localId) => `profileData/${localId}/cart.json`,
		}),
	}),
});

export const {
	useGetProfilePicQuery,
	useUpdateProfilePicMutation,
	useUpdateProfileNameMutation,
	useUpdateProfileLastNameMutation,
	useUpdateProfileCelMutation,
	useGetProfileQuery,
	useAddProductToCartMutation,
	useRemoveProductFromCartMutation,
	useGetCartQuery,
} = profileAPI;
