import { Absence, Blocker,RequestUpdateParam } from '../../type/type.request'
import { AuthState } from '../../context/user/type.auth'
import { useUserState } from '../../context/user/UserContext'
import { useFetchApi } from '../hook/UseFetchApi'
import { ShiftType } from '../../type/type.shift'
import { ApiList } from '../../asset/constant/Api'
import { 
	ApiResponse,
	ApiResponseVals,
	Api_ReadAbsence,
	Api_ReadBlocker,
	Api_ReadSwapRequest, 
	Api_UpdateSwapOffer,
	Api_UpdateAbsence_Param,
	Api_UpdateAbsence,
	Api_UpdateAbsenceChanged,
	Api_CreateSwapRequest,
	Api_CreateBlocker_Param,
	Api_CreateBlocker,
	Api_CreateSwapRequest_Param,
} from '../../type/type.api'
import { 
	mock_readSwaptofrom, 
	mock_updateSwapOfferUpdate,	
	mock_createSwapRequest 
} from '../../__mock__/api/request'
import { 
	mock_createBlocker,
	mock_readBLocker 
} from '../../__mock__/api/blocker'
import { 
	mock_readAbsence, 
	mock_updateAbsenceChanged,
	mock_updateAbsence,
} from '../../__mock__/api/absence'


const { request }= ApiList

export const useRequest = () => {
	const { useMocked, user,manager,token }:AuthState= useUserState()
	const { getApi, postApi, isLoading, error } = useFetchApi()

	const fetchRequest= async ():Promise<Api_ReadSwapRequest|null> => {
		try{
			const urlString= request.readSwapRequested.url
			const response:Api_ReadSwapRequest|null= await getApi<Api_ReadSwapRequest,{}>(urlString,token)
			return useMocked
				? mock_readSwaptofrom
				: response
			
		}catch(e){
			return null
		}
	}

	const fetchBlocker= async ():Promise<Api_ReadBlocker|null> => {
		try{
			const response:Api_ReadBlocker|null= await getApi<Api_ReadBlocker,{}>(request.readBlocker.url,token)
			return useMocked
				? mock_readBLocker
				: response
		}catch(e){
			console.log(e)
			return null
		}
	}
	const fetchAbsence= async ():Promise<Api_ReadAbsence|null> => {
		try{
			const urlString= `${request.absenceRead.url}`
			const response:Api_ReadAbsence|null= await getApi<Api_ReadAbsence,{}>(urlString,token)
			return useMocked 
					?	mock_readAbsence 
					:	response
		}catch(e){
			console.log(e)
			return null
		}
	}

	const updateSwap= async (id:ShiftType['_id'],type: RequestUpdateParam):Promise<ApiResponseVals|Api_UpdateSwapOffer|null> => {
		try{
			const url= `${request.shiftSwapOfferUpdate.url}/${id}/${type}`
			const response:Api_UpdateSwapOffer|null= await getApi<Api_UpdateSwapOffer,{}>(url,token)
			return useMocked 
					?	mock_updateSwapOfferUpdate 
					:	response		
		}catch(e){
			return ApiResponse.update.fail
		}
	}

	const updateAbsence= async (id:Absence['_id'], data: {absence:Absence}):Promise<ApiResponseVals|Api_UpdateAbsence|null> => {
		try{
			const url= `${request.absenceUpdate.url}/${id}`
			const response:Api_UpdateAbsence|null= await getApi<Api_UpdateAbsence,{absence:Absence}>(url,token,data)
			return useMocked 
				?	mock_updateAbsence
				:	response
		}catch(e){
			console.log(e)
			return  ApiResponse.update.fail
		}
	}
	
	const updateAbsenceChanged= async (id:Absence['_id'], type: Api_UpdateAbsence_Param):Promise<ApiResponseVals|Api_UpdateAbsenceChanged|null> => {
		try{
			const updateType:Api_UpdateAbsence_Param= type
			const url= `${request.absenceUpdateChanged.url}/${id}/${updateType}`
			const response:Api_UpdateAbsenceChanged|null= await getApi<Api_UpdateAbsenceChanged,{}>(url,token)
			return useMocked 
				?	mock_updateAbsenceChanged 
				:	response
		}catch(e){
			console.log(e)
			return ApiResponse.update.fail
		}
	}

	const createShiftSwapRequest=  async(id:string):Promise<Api_CreateSwapRequest|null> => {
		try{
			const urlString= request.shiftSwapRequestCreate.url
			const userId:string|null= manager ?manager._id :user ?user._id :null
			if(userId!==null){
				const param:Api_CreateSwapRequest_Param={
					user: userId,
					shift: id
				}
				const response:Api_CreateSwapRequest|null= await getApi<Api_CreateSwapRequest,typeof param>(urlString,token)
				return useMocked
					? mock_createSwapRequest
					: response		
			}
			return null
		}catch(e){
			return null
		}
	}

	const createAbsence= async (id:Absence['_id'], data: {absence:Absence}):Promise<ApiResponseVals|Api_UpdateAbsence|null> => {
		try{
			const url= `${request.absenceUpdate.url}/${id}`
			const response:Api_UpdateAbsence|null= await getApi<Api_UpdateAbsence,{absence:Absence}>(url,token,data)
			return useMocked 
				?	mock_updateAbsence
				:	response
		}catch(e){
			console.log(e)
			return  ApiResponse.update.fail
		}
	}

	const createBlocker= async (id:Blocker['_id']):Promise<ApiResponseVals|Api_CreateBlocker|null> => {
		try{
			const url= `${request.absenceUpdate.url}/${id}`
			const param:Api_CreateBlocker_Param= {
				"shiftRosterTemplate": id
			}
			const response:Api_UpdateAbsence|null= await getApi<Api_UpdateAbsence,typeof param>(url,token,param)
			return useMocked 
				?	mock_createBlocker
				:	response
		}catch(e){
			console.log(e)
			return  ApiResponse.update.fail
		}
	}
	

	return {
		fetchRequest,
		fetchBlocker,
		fetchAbsence,
		updateSwap,
		updateAbsenceChanged,
		updateAbsence,
		createAbsence,
		createBlocker,
		createShiftSwapRequest
	}
}
