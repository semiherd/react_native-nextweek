import { AuthState } from '../../context/user/type.auth'
import { 
	ApiResponse, 
	ApiResponseVals, 
	Api_ReadRosterShift,
	Api_ReadAbsence,
} from '../../type/type.api'
import { mock_swapRoster, mock_deleteRoster, mock_readRosterShift } from '../../__mock__/api/roster'
import { useUserState } from '../../context/user/UserContext'
import { useFetchApi } from '../hook/UseFetchApi'
import { ApiList } from '../../asset/constant/Api'
import { useAxiosPriv } from '../../service/hook/UseAxiosPriv'

const { roster }= ApiList

export const useRoster = () => {
	const { useMocked,user,token }:AuthState= useUserState()
	const { getApi, postApi } = useFetchApi()
	const axiosPriv = useAxiosPriv()

	const readRosterShift= async ():Promise<Api_ReadRosterShift> => {
		try{
			const { url }= roster.readRosterShift
			const urlString= `${url}`
			const response:Api_ReadRosterShift|null= await axiosPriv.get(urlString)
			return useMocked 
					?	mock_readRosterShift 
					:	response===null 
						?	{ shifts: [] }
						:	response		
		}catch(e){
			return { shifts: []}
		}
	}

	const swapShiftInRoster= async ({id}: {id:string}) => {
		try{
			const { url }= roster.deleteRoster
			const urlString= `${url}`
			const response:Api_SwapShiftInRoster|null= await axiosPriv.get(urlString)
			return useMocked 
				? mock_swapRoster 
				: response
			
		}catch(e){
			console.log(e)
			return ApiResponse.delete.fail
		}
	}

	const deleteShiftInRoster= async ({id}: {id:string}):Promise<Api_DeleteShiftInRoster|null|ApiResponseVals> => {
		try{
			const { url }= roster.deleteRoster
			const urlString= `${url}`
			const response:Api_DeleteShiftInRoster|null= await axiosPriv.get(urlString)
			return useMocked ?mock_deleteRoster :response
			
		}catch(e){
			console.log(e)
			return ApiResponse.delete.fail
		}
	}

	return {
		readRosterShift,
		deleteShiftInRoster,
		swapShiftInRoster
	}
}
