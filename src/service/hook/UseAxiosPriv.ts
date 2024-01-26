import { useEffect } from 'react'
import { axiosPriv } from "../api/Axios"
import { useUserState } from  '../../context/user/UserContext'
import useRefreshToken from './UseRefreshToken'

const useAxiosPriv = () => {
	const { token }= useUserState()
	const refresh= useRefreshToken()

	useEffect( () => {
		const requestIntercept= axiosPriv.interceptors.request.use(
			config => {
				if( !config.headers['Authorization'] ) {
					config.headers['Authorization']= `Bearer ${token}`
				}
				return config
			},(error) => Promise.reject
		)

		const responseIntercept= axiosPriv.interceptors.response.use(
			response => response,
			async (error) => {
				const prevRequest= error?.config
				if(error.response?.status===403 && !prevRequest?.sent){
					prevRequest.sent= true
					const newAccessToken= await refresh()
					prevRequest.headers['Authorization']= `Bearer ${newAccessToken}`
					return axiosPriv(prevRequest)
				}
				return Promise.reject(error)
			}
		)
		
		return () => {
			axiosPriv.interceptors.request.eject(requestIntercept)
			axiosPriv.interceptors.response.eject(responseIntercept)
		}

	},[token,refresh])

	return axiosPriv
}

export { useAxiosPriv }