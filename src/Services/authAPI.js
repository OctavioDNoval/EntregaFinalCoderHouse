import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = process.env.EXPO_PUBLIC_AUTH_URL;
const API_KEY = process.env.API_KEY;

export const authAPI = createApi({
	//Nombre que le damos al slice
	reducerPath: "authAPI",

	//Es la funcion base o la url base de la peticion,
	//las peticiones a firebase se realizan mediante URL
	baseQuery: fetchBaseQuery({ baseUrl: baseURL }),

	//Aca estan las operaciones de la api, que son queryes en caso de lectura
	// o mutation en caso de escritura
	endpoints: (builder) => ({
		signup: builder.mutation({
			query: (auth) => ({
				url: `accounts:signUp?key=AIzaSyDjXEJRRy6YkATIrvaErHtqBGcG5vsXtac`,
				method: "POST",
				body: auth,
			}),
		}),
		login: builder.mutation({
			query: (auth) => ({
				url: `accounts:signInWithPassword?key=AIzaSyDjXEJRRy6YkATIrvaErHtqBGcG5vsXtac`,
				method: "POST",
				body: auth,
			}),
		}),
	}),
});

export const { useSignupMutation, useLoginMutation } = authAPI;
