import axios from "axios"

export const http = axios.create({
	baseURL: process.env.NEXT_PUBLIC_CMS_API_URL,
})

http.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		console.log(error)
		return Promise.reject(error)
	},
)
