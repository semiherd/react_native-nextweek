import { ShiftType } from "../../type/type.shift"
import { User } from '../../context/user/type.user'
import { IdParam } from '../../type/type.app'
import { useFetchApi,useUser } from '../hook/index'
import { useUserState } from '../../context/user/UserContext'
import { ApiList } from '../../asset/constant/Api'
import { 
	mock_readPeopleInShift,
	mock_readShift , 
	mock_createShift 
} from '../../__mock__/api/shift'
import { 
	Api_ReadShift,
	Api_ReadRosterShift,
	Api_CreateShift, Api_CreateShift_Param,
	Api_UpdateShift, Api_UpdateShift_Param,
	Api_DeleteShift,Api_DeleteShift_Param,
	UpdateShiftOptions
} from '../../type/type.api'
import { useAxiosPriv } from '../../service/hook/UseAxiosPriv'
import { AuthState } from "../../context/user/type.auth"

export const useShift = () => {
	const { getApi, postApi } = useFetchApi()
	const { fetchUser } = useUser()
	const axiosPriv = useAxiosPriv()
	const {user,manager,useMocked,token}:AuthState= useUserState()

	async function getUsers<T extends User['_id']>(list:T[]):Promise<User[]>{
		try{
			const response:User[]=[] 
			await Promise.all(list.map(async(member:T,_) => {
				const data:User|null= await fetchUser(member)			
				if(data && data!==null) {
					response.push(data)
				}
			}))
			return response
		}catch(e){
			console.log(e)
			return []
		}
	}

	const readPeopleInShift= async <T extends IdParam<ShiftType,'_id'>>(id:T):Promise<User[]> => {
		try{
			const { url }= ApiList.shift.readShift
			const urlString= `${url}`
			const data: Api_ReadShift|null=await axiosPriv.get(urlString) 		
			const source= useMocked ?mock_readPeopleInShift :data
			const list:ShiftType['user'][]= source===null ?[] :source.shifts.map( item => item.user)
			if(!list.length) return []
			const people:User[]= await getUsers<ShiftType['user']>(list)
			
			return people			
		}catch(e){
			return []
		}
	}	
 
	const readShift= async <T extends IdParam<ShiftType,'_id'>|IdParam<User,'_id'>>(id:T):Promise<Api_ReadShift['shifts']|null> => {
		try{
			const { url }= ApiList.shift.readShift
			const urlString= `${url}`			
			const response: Api_ReadShift|null= await axiosPriv.get(urlString)
			if(response===null) return mock_readShift.shifts
			else return response.shifts
		}catch(e){
			return null
		}
	}	

	const createShift= async <T extends Api_CreateShift_Param>(param:T):Promise<Api_CreateShift|null> => {
		try{	
			const { url }= ApiList.shift.readShift
			const urlString= `${url}`		
			const param= {
				"user": "user1",
				"starting": "2022-11-08T07:00:00.654+00:00",
				"ending": "2022-11-08T15:00:00.654+00:00"
			}
			const response: Api_CreateShift|null= await axiosPriv.post(urlString,JSON.stringify(param))
			if(response===null) return mock_createShift
			else return response
		}catch(e){
			console.log(e)
			return null
		}
	}
	
	const updateShift= async <T extends Api_UpdateShift_Param>(id:T,type: UpdateShiftOptions):Promise<Api_UpdateShift> => {
		try{
			const { url }= ApiList.shift.updateShift
			const urlString= `${url}/${id}/${type}`		
			const response: Api_UpdateShift|null= await axiosPriv.post(urlString)
			if(response===null) return { changed: false}
			return response
		}catch(e){
			return { changed: false}
		}
	}
		
	const deleteShift= async <T extends ShiftType['_id']>(id:T):Promise<Api_DeleteShift|{deletedShift:null}> => {
		try{
			const { url }= ApiList.shift.updateShift
			const param= id
			const urlString= `${url}/${id}`
			const response: Api_DeleteShift|null= await axiosPriv.post(urlString,JSON.stringify(param))
			if(response===null) return {deletedShift:null}
			return response

		}catch(e){
			return { deletedShift:null }
		}
	}
	

	return {
		getUsers,
		readShift,
		createShift,
		deleteShift,
		updateShift,
		readPeopleInShift,
	}
}
