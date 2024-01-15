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

const { roster }= ApiList

export const useRoster = () => {
	const { useMocked,user,token }:AuthState= useUserState()
	const { getApi, postApi } = useFetchApi()

	const readRosterShift= async ():Promise<Api_ReadRosterShift> => {
		try{
			const { url }= roster.readRosterShift
			const urlString= `${url}`
			if(token){
				const response:Api_ReadRosterShift|null= await getApi<Api_ReadRosterShift,{}>(urlString,token)
				return useMocked 
					?	mock_readRosterShift 
					:	response===null 
						?	{ shifts: [] }
						:	response
			}else{
				return { shifts: []}
			}
		}catch(e){
			return { shifts: []}
		}
	}

	const swapShiftInRoster= async ({id}: {id:string}) => {
		try{
			const { url }= roster.deleteRoster
			const urlString= `${url}`
			console.log('swapShiftInRoster',id)
			if(token){
				const response:Api_SwapShiftInRoster|null= await getApi<Api_SwapShiftInRoster,{}>(urlString,token)
				return useMocked ?mock_swapRoster :response
			}else{
				return ApiResponse.delete.fail
			}
		}catch(e){
			console.log(e)
			return ApiResponse.delete.fail
		}
	}

	const deleteShiftInRoster= async ({id}: {id:string}):Promise<Api_DeleteShiftInRoster|null|ApiResponseVals> => {
		try{
			const { url }= roster.deleteRoster
			const urlString= `${url}`
			if(token){
				const response:Api_DeleteShiftInRoster|null= await getApi<Api_DeleteShiftInRoster>(urlString,token)
				return useMocked ?mock_deleteRoster :response
			}else{
				return ApiResponse.delete.fail
			}
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
